import React from 'react'

function GoogleNavbar() {
  return (
    <div>
      <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#">All</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">video</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Image</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">News</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Shopping</a>
  </li>
</ul>
    </div>
  )
}

export default GoogleNavbar
