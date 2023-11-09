import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <p
        href="/"
        className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
      >
        bootstrap
      </p>
      <span className="mb-3 mb-md-0 text-body-secondary">
        © 2023 Company, Inc
      </span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
        <p className="text-body-secondary">
          X
        </p>
      </li>
      <li className="ms-3">
        <p className="text-body-secondary">
          github
        </p>
      </li>
      <li className="ms-3">
        <p className="text-body-secondary">
          linkedIn
        </p>
      </li>
    </ul>
  </footer>
</div>

  )
}

export default Footer