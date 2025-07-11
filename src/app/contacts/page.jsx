"use client"

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
const Contact = () => {

  const session=useSession()
    const router=useRouter()
    if(session.status==='loading'){
    return <p>Loading...</p>
   }
   if(session.status==='unauthenticated'){
    router?.push("/dashboard/register")
   }

 const handleSubmit= async(e)=>{
   e.preventDefault()
   const name= e.target[0].value
   const email= e.target[1].value
   const message= e.target[2].value
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message })
      })

      if (res.status === 201) {
        toast.success("Message Sent!", {
  description: "Thanks for reaching out. We'll get back to you shortly.",
  icon: "📩", 
});

      } else if (res.status === 409) {
        toast.warning("You've already submitted a message ⚠️")
      } else {
        toast.error("Something went wrong ❌")
      }
    } catch (error) {
      console.error(error)
      toast.error("Server error 😓")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Let's Keep in Touch</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src='/contact.png' alt='' fill={true} className={styles.image}/>
        </div>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
         <input type="text" placeholder='Name' className={styles.input} /> 
          <input type="text" placeholder='Email' className={styles.input} /> 
           <textarea className={styles.textarea} placeholder='Message'cols={30} rows={10}></textarea>
           <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
