# CONTAINERIZE - Solo/23001028_14_IRD_Binar-Car-Rental_Gold

Archetype: react-spa. Generated 2026-11-20T22:42:20+07:00 by .opencode/scripts/render.sh on branch chore/containerize (uncommitted).

## Generated files
- Dockerfile (template: Dockerfile.spa)
- Jenkinsfile (CI only; parameters REGISTRY, HARBOR_PROJECT, HARBOR_CRED_ID)
- .dockerignore
- .containerize/nginx-spa.conf.template

## Local run
```sh
bash .opencode/scripts/build.sh Solo/23001028_14_IRD_Binar-Car-Rental_Gold
bash .opencode/scripts/smoke.sh Solo/23001028_14_IRD_Binar-Car-Rental_Gold
```
Manual run: podman run --rm --network=host --env-file /home/richie/Documents/Programming/Projects/.smoke.env -e PORT=<free-port> containerize/23001028-14-ird-binar-car-rental-gold:local

## Required env var NAMES (values never stored here)
unknown - inspect app config (do not print secret values)

## DB smoke
boot + healthcheck only (DB not smoke-tested). db_driver: unknown. Never migrate/seed/modify; DBs are live.

## Flags
- agent label 'node' unverified on k3s Jenkins (only bun/buildah proven by BenchCheck) - confirm with user

Smoke results: 2026-11-20T23:03:35+07:00 boot=PASS http=200 db=not verified (no read-only CLI for react-spa; health endpoint only)
Smoke results: 2026-11-21T21:26:16+07:00 boot=PASS http=200 db=skipped (legacy mysqli app; pgsql not supported without a code rewrite)
