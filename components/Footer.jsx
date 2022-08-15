import React from 'react'
import styles from '../styles/Footer.module.scss'
import Link from "next/link"
import {FaFacebook,FaLinkedin,FaTwitter,FaYoutube,FaInstagram} from "react-icons/fa"
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12">
            <h2>MAIN MENU</h2>
            <Link href='/'>HOME</Link>
            <Link href='/special'>TODAY SPECIAL</Link>
            <Link href='/menu'>MENU</Link>
            <Link href='/contact'>CONTACT</Link>
          </div>
          <div className="col-lg-4 col-12">
            <h2>About Us</h2>
            <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
            <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.</p>
          </div>
          <div className="col-lg-4 col-12">
            <h2>Get Social</h2>
            <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante.</p>
            <div className="d-flex align-items-center">
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
