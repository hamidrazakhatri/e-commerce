import React from "react";

export default function NavberS() {
  return <>
  <nav class="navbar p-2 navbar-expand-lg bg">
  <div class="container-fluid p-3">
    <a class=" fw-bold mx-2  main fs-2" href="#">E-COMMERCE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link fw-bold mx-2 fs-4 text-white out" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold mx-2 fs-4  out text-white" href="#">About</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link fw-bold mx-2 fs-4 out text-white" aria-disabled="true">Product</a>
        </li>

        <li class="nav-item">
          <a class="nav-link fw-bold mx-2 fs-4 out text-white" aria-disabled="true">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold mx-2 fs-4 out text-white" aria-disabled="true">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold mx-2 fs-4 out text-white" aria-disabled="true">Contact-us</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class=" inp me-2 p-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  
  </>;
}
