import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="section">
      <h2 className="title">404 — Not Found</h2>
      <Link className="btn" to="/">Go Home</Link>
    </section>
  );
}