import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/page'
import Image from "next/image";
import {items} from "./data.js";
import { notFound } from 'next/navigation';
 const getData =(cat)=>{
   const data = items[cat]
   if(data){
    return data
   }
   return notFound()
 }
const Catagory = ({params}) => {
  const data = getData(params.catagory)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.catagory}</h1>
      {data.map((item)=>(
         <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.decs}>{item.desc}</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image src={item.image} alt="" fill={true} className={styles.img} />
        </div>
      </div>
      ))}
      
    </div>
  )
}

export default Catagory
