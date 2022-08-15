import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/OwnMenu.module.scss'
export default function OwnMenu() {
    const [data] = useState([
        {
            id: 1,
            "title": "Americano 1",
            "price": 30,
            "src": "/img/menu-1.jpg"
        },
        {
            id: 2,
            "title": "Americano 2",
            "price": 20,
            "src": "/img/menu-2.jpg"
        },
        {
            id: 3,
            "title": "Americano 3",
            "price": 15,
            "src": "/img/menu-3.jpg"
        },
        {
            id: 4,
            "title": "Americano 4",
            "price": 25,
            "src": "/img/menu-4.jpg"
        },
        {
            id: 5,
            "title": "Americano 5",
            "price": 45,
            "src": "/img/menu-5.jpg"
        }
    ])
    return (
        <section className={styles.OwnMenu}>
            <div className="container">
                <div className="row align-items-center  justify-contnet-center">
                    <div className='d-flex col-lg-3 col-12  justify-lg-content-center'>
                        <Image src='/img/logo.png' height='41' width='32' alt='logo' />
                        <h2> Our Menus</h2>
                    </div>
                    <div className={`col-lg-9 my-4 my-lg-0  col-12 ${styles.borderclass}`}></div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-3 col-sm-6 col-6">
                        <ul>
                            <li>Affogato</li>
                            <li>Caffè Americano</li>
                            <li>Caffè latte</li>
                            <li>Coffee milk</li>
                            <li>Café mocha</li>
                            <li>Espresso</li>
                            <li>Instant coffee</li>
                            <li>Iced coffee</li>
                            <li>Espresso</li>
                            <li>Instant coffee</li>
                            <li>Iced coffee</li>
                        </ul>
                    </div>
                    <div className="col-lg-9 col-12">
                        {
                            data.map((item) => {
                                return (
                                    <div key={item.id} className='p-2 mb-4 bg-light col-12 d-flex flex-wrap text-center justify-content-center  align-items-center'>
                                        <div className="col-md-3 col-12 my-2 bg-light">
                                            <Image src={item.src} alt={item.title} width='136' height='136' />
                                        </div>
                                        <div className="col-md-6 my-2 col-12">
                                            <h3>{item.title} </h3>
                                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum</p>
                                        </div>
                                        <div className={`col-md-3 col-12 ${styles.pricebox}`}>
                                            <span>{item.price}$</span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
