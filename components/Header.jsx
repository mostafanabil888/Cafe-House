import React from 'react'
import styles from "../styles/Header.module.scss"
import Image from "next/image"
import Link from 'next/link'
export default function Header( {title} ) {
  return (
    <div className={styles.header}>
        <div className="contanier">
            <div className="d-flex align-items-center justify-content-around">
                <Image  src="/img/light.png" className='d-none d-md-inline' width='240' height='200' alt='light'/>
                <Image src="/img/light.png" width='240' height='200' alt='light'/>
                <Image src="/img/light.png" className='d-none d-md-inline' width='240' height='200' alt='light'/>
            </div>
            <div className='headercontent'>
               <div className="d-flex align-items-center justify-content-center">
               <Image className='d-inline' src='/img/header-line.png' width='67' height='14' alt='header-line'/>
                <h2>{title}</h2>
                <Image src='/img/header-line.png' width='67' height='14' alt='header-line'/>
               </div>
               <div className="my-2">
               <h1>CAFE HOUSE</h1>
                <p>Cafe House template is a mobile-friendly responsive Bootstrap v3.3.5 layout by templatemo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                <Link href='/menu' >detailss</Link>
                <Image alt='table' src='/img/table-set.png' width='989' height='523'/>
               </div>
            </div>
        </div>
    </div>
  )
}
