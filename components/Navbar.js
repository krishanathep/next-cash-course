import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <div class="container">
          <a className="navbar-brand" href="#">
            Next-JS
          </a>
          <ul class="navbar-nav">
            <li class="nav-item">
                <Link href='/'>
              <a class="nav-link">
                Home
              </a>
              </Link>
            </li>
            <li class="nav-item">
                <Link href='/about'>
              <a class="nav-link">
                About
              </a>
              </Link>
            </li>
            <li class="nav-item">
                <Link href='/products'>
              <a class="nav-link">
                Products
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
