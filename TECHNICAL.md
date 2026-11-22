# Binar Car Rental — technical notes

Development notes for the "Challenge Gold" car-rental frontend. For the
reader-facing overview, see [README.md](README.md).

## Stack

Exact versions come from `package-lock.json` (lockfileVersion 3), not the
manifest, which states ranges and is wrong in two places.

| Package | Locked version | Evidence |
|---|---|---|
| react | 18.2.0 | `package-lock.json:2723` |
| react-dom | 18.2.0 | `package-lock.json:2734` |
| react-router-dom | 6.18.0 | `package-lock.json:2781` |
| vite | 4.5.0 | `package-lock.json:3160` |
| @vitejs/plugin-react | 4.1.1 | `package-lock.json:1228` |
| typescript | 5.2.2 | `package-lock.json:3108` |
| axios | 1.6.1 | `package-lock.json:1337` |
| react-toastify | 9.1.3 | `package-lock.json:2797` |
| swiper | 11.0.3 | `package-lock.json:3027` |
| sass | 1.69.5 | `package-lock.json:2894` |

Manifest versus lockfile: `typescript ^5.0.2` resolves to 5.2.2 and
`vite ^4.4.5` resolves to 4.5.0 (`package.json:31-32`) — the lockfile is the
truth. The router, swiper, and axios ranges (`package.json:13,17,19`) do match
their locked versions. There are 7 runtime dependencies, including a
`react-dropdown` package with no version cited in the report
(`package.json:13-19`, `src/App.tsx:2,5`); the manifest name is `car-rental`
(`package.json:2`). Node 24 exists only in the builder image, nothing runs Node
at runtime (`Dockerfile:1,10`). The build is `npm run build` → `tsc && vite
build` (`package.json:8`).

## Architecture

There is no application server. `index.html:12-14` mounts the app at
`src/main.tsx:6-10`, which wraps everything in `<BrowserRouter>` and
`<ToastContainer>` (`src/App.tsx:1-20`). `<Routes>` consumes four client-side
routes declared in `src/routes.ts:6-11`: `/` (Landing), `/search` (Search),
`/detail/:id` (Detail), and `*` (NotFound). Components are plain React with
SCSS partials; there is no SSR, no state manager, and no background work.

`vite build` emits static assets to `dist/` (`Dockerfile:11`). nginx serves them
from `/usr/share/nginx/html` on port 8080 (`Dockerfile:10-14`) with an SPA
fallback `try_files $uri $uri/ /index.html;`
(`.containerize/nginx-spa.conf.template:8`); every client route depends on that
fallback. The Vite dev server is configured for port 3000 but is irrelevant to
the built image (`vite.config.ts:13-15`).
`ENV NODE_OPTIONS=--openssl-legacy-provider` (`Dockerfile:6`) is inherited from
the template and unnecessary for Vite 4 on Node 24.

## Data model

No local database, migrations, SQL, or ORM. The nearest thing to a schema is a
pair of hand-written TypeScript types:

- `CarType` (`src/features/car/types/CarType.ts:3-10`): `id: number`,
  `name: string`, `category: CarCategoryEnum`, `price: number`,
  `status: boolean`, `image: string`. Its `id` is the `:id` path parameter of
  `/detail/:id`; `category` is constrained by `CarCategoryEnum`
  (`src/features/car/enums/CarCategoryEnum.ts`).
- `ListCarsDTO` (`src/features/car/dto/ListCarsDTO.ts:1-7`): the search query —
  `name?`, `category?`, `isRented?`, `minPrice?`, `maxPrice?` — passed as axios
  `params` to `GET /v2/car` (`src/features/car/api.ts:6`,
  `src/common/components/SearchForm/index.tsx:47-56`).

No table is queried without a migration, because there is no database at all.
The remote Car response shape is asserted only by `CarType`, not enforced by any
server in this repo; the true contract is `UNKNOWN — requires human input`. The
`templates/*.html` files are static design mockups, not data fixtures.

## Auth

None. There is no login route (`src/routes.ts:6-11`), no auth component, and no
token storage — no `localStorage`/`sessionStorage` usage anywhere in `src/`.
`src/App.tsx:1-20` adds only `<BrowserRouter>` and `<ToastContainer>`. All four
routes render publicly; there is no guard, middleware, registration, or
password reset.

## External services

- Binar Car Rental REST API. The base URL is a hardcoded constant
  `API_CAR_URL` at `src/features/car/api.ts:4`; endpoints are `GET /v2/car`
  (list, `api.ts:6`) and `GET /car/:id` (detail, `api.ts:8`), called from
  `src/common/components/SearchForm/index.tsx:56` and
  `src/modules/detail/pages/Detail.tsx:24`.
- A Webflow-hosted favicon is referenced in `index.html:6`.
- No payment, WhatsApp, maps, SMS, or OAuth integration.

Env var names: none. There is no `.env.example` and no `import.meta.env`,
`process.env`, or `VITE_*` usage in `src/`; `src/vite-env.d.ts:1` is the stock
Vite client-types reference. The API URL is not configurable at runtime —
changing it needs a source edit and rebuild.

## Operational risks

- Hard dependency on the external API with no mock or fallback. If
  `api-car-rental.binaracademy.org` is down, search shows a toast error plus
  "No Cars Found!" and detail navigates to `/404`
  (`src/common/components/SearchForm/index.tsx:55-65`,
  `src/modules/detail/pages/Detail.tsx:22-29`). Whether the API is live is
  `UNKNOWN — requires human input`.
- `/detail/:id` fetches on mount and redirects to `/404` on any error or
  non-numeric id (`src/modules/detail/pages/Detail.tsx:18-31`), so a deep link
  without a working API is effectively a 404.
- Images are referenced from absolute paths such as `/images/happy-girl.png`
  (`src/modules/landing/components/OurService/index.tsx:22`); they must exist
  in the shipped `dist/` or the UI renders incomplete. Their presence in
  `public/` is `UNKNOWN — requires human input`.
- No boot side effects, no queue, no scheduler, no writable paths, no uploads,
  and no persisted state — all React state is in memory and resets on reload.
  Nothing breaks above one replica; the only shared dependency is the API.
- No hardcoded credentials or secrets found in source, and no `.env` was read.

## Container layout

Two-stage image. Builder `node:24-alpine` runs `npm ci` and `npm run build`
(`Dockerfile:1-8`); runtime `nginxinc/nginx-unprivileged:1.27-alpine` copies
`dist/` and the nginx template into `/usr/share/nginx/html` and serves on port
8080 (`Dockerfile:10-14`). There are no repo-local fixes: the `Dockerfile` is
the stock `Dockerfile.spa` output (`CONTAINERIZE.md:5-9`), so this repo is
re-renderable and is **not** one of the six never-re-render repos.

`CONTAINERIZE.md:27-28` carries a stale "legacy mysqli app; pgsql not
supported" comment from smoke output. It contradicts the source — this is a
TypeScript React SPA with no PHP or database — and is copy-paste noise, not an
app fact.

## Repo state and sibling comparison

Per the orchestrator handoff, this repository's GitHub remote is archived and
rejects pushes with HTTP 403. That is an upstream state, not a defect in the
app.

The sibling `Solo/23001028_14_GROUP3_Binar-Car-Rental_Platinum` is the more
functionally complete app: 14 routes including auth, admin, and payment flows,
and 49 runtime dependencies. This Gold variant has 4 routes and 7 runtime
dependencies, no auth/admin/payment, but is written in TypeScript with typed
DTOs and enums. Both are static Vite SPAs served by nginx against the same
external API. Choose Platinum for feature coverage, Gold for a smaller,
type-safe codebase.

## Open questions

- Is the external API still live, and what auth/CORS contract does it require?
- The exact Car response shape beyond `CarType` and the values in
  `CarCategoryEnum`.
- Which car IDs exist, needed to capture `/detail/:id` meaningfully.
- Whether the absolute image paths used by the UI are present in `public/`.
