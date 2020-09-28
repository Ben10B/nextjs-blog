import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
    <Link href="/notes/">
      <a className="navbar-brand">Note App</a>
    </Link>
    <Link href="/notes/new">
      <a className="navbar-brand">Create Note</a>
    </Link>
  </nav>
  )
}

export default Navbar;