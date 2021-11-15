import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <div class="container">
          <a className="navbar-brand" href="#">
            Next-JS
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ms-auto">
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
        </div>
      </nav>
    </>
  );
}
