import React from 'react'
import Image from 'next/image'
import styles from '../styles/TodaySpecial.module.scss'
export default function TodaySpecial() {
  return (
    <section className={styles.TodaySpecial}>
      <div className="container">
        <div className="row align-items-center justify-contnet-center">
          <div className='d-flex col-lg-4 col-12  justify-lg-content-center'>
            <Image src='/img/logo.png' height='41' width='32' alt='logo' />
            <h2>Today's Special</h2>
          </div>
          <div className={`col-lg-8 my-4 my-lg-0 bg-dark col-12 ${styles.borderclass}`}></div>
        </div>
        <div className="row">

          <div className="col-lg-7 my-3  col-12">
            <div className={`bg-light p-2 ${styles.imgbox}`}>
              <Image src='/img/special-1.jpg' alt='special plate' width='750' height='550' />
              <div className={styles.imgdetials}>
                <h3>Donec pede justo</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </div>

          </div>

          <div className="col-lg-5 my-3 col-12 px-2">
            <div className={`mb-2 p-2 bg-light col-9 col-md-6 col-lg-12 ${styles.imgbox}`}>
              <Image src='/img/special-2.jpg' alt='special plate' width='500' height='180' />
              <div className={styles.imgdetials}>
                <h3>Donec pede justo</h3>
              </div>
            </div>
            <div className="d-flex flex-wrap my-3 align-items-center">
              <div className={`p-2 ${styles.imgbox}`}>
                <div className='bg-light p-2'>
                  <Image src='/img/special-3.jpg' alt='special plate' width='160' height='180' />
                  <div className={styles.imgdetials}>
                    <h3>Quisque rutrum.</h3>
                  </div>
                </div>
              </div>
              <div className={`p-2 ${styles.imgbox}`}>
                <div className='bg-light p-2'>
                  <Image src='/img/special-4.jpg' alt='special plate' width='160' height='180' />
                  <div className={styles.imgdetials}>
                    <h3>Quisque rutrum.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
