import Link from "next/link";

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((link) => link)
    .map(({ label, href }) => (
      <li key={href}>
        <Link href={href} className="nav-link">
          {label}
        </Link>
      </li>
    ));
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/" className="navbar-brand mx-2">
        TixIt!
      </Link>

      <div className="d-flex justify-content-end mx-2">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};
