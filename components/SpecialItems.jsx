import React, { useState } from "react"
import Image from "next/image"
import styles from "../styles/PopularItems.module.scss"
export default function SpecielItems() {
  const [data] = useState([
    {
      id: 1,
      "title": "americano",
      "src": "/img/popular-1.jpg",
      "description": "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum."
    },
    {
      id: 2,
      "title": "cappuccino",
      "src": "/img/popular-2.jpg",
      "description": "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum."
    },
    {
      id: 3,
      "title": "mocha",
      "src": "/img/popular-3.jpg",
      "description": "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.",
    },
    {
      id: 4,
      "title": "black coffee",
      "src": "/img/popular-2.jpg",
      "description": "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.",
    },
    {
      id: 5,
      "title": "Coffee milk",
      "src": "/img/popular-3.jpg",
      "description": "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.",
    },
    {
      id: 6,
      "title": "Espresso",
      "src": "/img/popular-1.jpg",
      "description": "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.",
    }
  ])
  return (
    <section className={styles.poularitems}>
      <div className="container">
        <div className="row align-items-center justify-contnet-center">
          <div className="d-flex col-lg-4 col-12  justify-lg-content-center">
            <Image src="/img/logo.png" height="41" width="32" alt="logo" />
            <h2>Popular Items</h2>
          </div>
          <div className={`col-lg-8 my-4 my-lg-0  col-12 ${styles.borderclass}`}></div>
        </div>
        <div className="my-5 text-center">
          <div className="d-flex flex-wrap align-items-center justify-content-around">
            {
              data.map((item) => {
                return (
                  <div key={item.id} className="card col-lg-4 col-sm-5 my-4 col-12">
                    <Image src={item.src} className="card-img-top" width="286" height="166" alt={item.title} />
                    <div className="card-body">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>

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
