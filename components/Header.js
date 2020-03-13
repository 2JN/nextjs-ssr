import React from "react";
import Link from "next/link";

const Header = () => (
  <header className="col-12 px-0 mb-auto navbar navbar-dark bg-dark shadow-sm">
    <div className="row">
      <h3 className="col-12 col-sm-2 text-center">Store</h3>
      <nav className="nav col-12 col-sm-10 justify-content-center justify-content-sm-end">
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/products">
          <a className="nav-link">Store</a>
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
