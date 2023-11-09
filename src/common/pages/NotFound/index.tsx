import { Link } from "react-router-dom"
import './styles.scss'

export default function NotFound() {
  return (
    <div className="wrapper">
      <div className="not-found">
        <img src="/images/sad.png" alt="" />
        <h1>404</h1>
        <h5>Page not found</h5>
        <p>This Page you looking for is doesn't exist in this app.</p>
        <Link to="/" className="btn">Go Back</Link>
      </div>
    </div>
  )
}
