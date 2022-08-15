import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PopularItems.module.scss'
export default function PopularItems() {
  return (
    <section className={styles.poularitems}>
      <div className="container">
        <div className="row align-items-center justify-contnet-center">
          <div className='d-flex col-lg-4 col-12  justify-lg-content-center'>
            <Image src='/img/logo.png' height='41' width='32' alt='logo' />
            <h2>Popular Items</h2>
          </div>
          <div className={`col-lg-8 my-4 my-lg-0  col-12 ${styles.borderclass}`}></div>
        </div>
        <div className='my-5 text-center'>
          <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className='card col-lg-3 col-sm-5 my-4 col-12'>
              <Image src="/img/popular-3.jpg" className="card-img-top" width='286' height='166' alt="..." />
                <div className="card-body ">
                  <h3>americano</h3>
                  <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>

                </div>
            </div>
            <div className="card col-lg-3 col-sm-5 my-4 col-12">
              <Image src="/img/popular-3.jpg" className="card-img-top" width='286' height='166' alt="..." />
                <div className="card-body">
                  <h3>cappuccino</h3>
                  <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>

                </div>
            </div>
            <div className="card col-lg-3 col-sm-5 my-4 col-12">
              <Image src="/img/popular-3.jpg" className="card-img-top" width='286' height='166' alt="..." />
                <div className="card-body">
                  <h3>mocha</h3>
                  <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>

                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
