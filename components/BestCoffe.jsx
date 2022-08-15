import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/BestCoffe.module.scss"
export default function BestCoffe() {
  return (
    <section className={styles.bestcoffe}>
        <div className="container">
            <div className="row">
                <div className="col-md-9 col-12">
                    <h4>The Best Coffee for you</h4>
                    <h2>Cafe House</h2>
                    <p>This is free HTML5 website template from templatemo. Fndimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Ettiam sit
                         amet orci eget eros faucibus tincidunt.</p>
                    <Link href="/" >read more</Link>    
                </div>
                <div className="col-md-3  col-12 d-flex align-items-center">
                    <Image  className={styles.img} src='/img/1.jpg' width='150' height='150' alt='tea' />
                </div>
            </div>
        </div>
    </section>
  )
}
