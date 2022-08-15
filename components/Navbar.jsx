import React from 'react'
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
  return (
    <div className={`position-fixed ${styles.navbar}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand d-none d-md-inline" href="/">
              <a className={`d-flex align-items-center justify-content-center text-captilize ${styles.navbarbrand}`}>
                <Image src='/img/logo.png' alt='' width='32' height='41' />
                <h1>Cafe House</h1>
              </a>
            </Link>
            <button className="navbar-toggler border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${styles.navbarcollapse}`} id="navbarNavDropdown">
              <ul className={`navbar-nav mt-2 mt-lg-0 ${styles.navbarnav}`}>
                <Link href="/">home</Link>
                <Link href="/special">special</Link>
                <Link href="/menu">menu</Link>
                <Link href="/contact">contact</Link>                   
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
