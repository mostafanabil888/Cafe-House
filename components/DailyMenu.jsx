import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/DailyMenu.module.scss'
export default function DailyMenu() {
    return (
        <section className={styles.DailyMenu}>
            <div className="container">
                <div className="row align-items-center justify-contnet-center">
                    <div className='d-flex col-lg-4 col-12  justify-lg-content-center'>
                        <Image src='/img/logo.png' height='41' width='32' alt='logo' />
                        <h2>Daily Menu</h2>
                    </div>
                    <div className={`col-lg-8 my-4 my-lg-0  col-12 ${styles.borderclass}`}></div>
                </div>
                <div className="my-5">
                <Image src='/img/menu-board.png' width='230' height='310' alt='' />
                <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
                <ol>
                    <li>Tellus eget condimentum rhoncus.</li>
                    <li>Sem quam semper libero.</li>
                    <li>Sit amet adipiscing sem neque sed ipsum.</li>
                    <li>Nam quam nunc, blandit vel, luctus pulvinar.</li>
                    <li>Maecenas nec odio et ante tincidunt tempus.</li>
                    <li>Donec vitae sapien ut libero ventenatis faucibus.</li>
                </ol>
                    <Link href='/menu' >read more</Link>
                </div>
            </div>
        </section>
    )
}
