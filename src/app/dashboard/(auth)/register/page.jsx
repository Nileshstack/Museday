"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Register = () => {

  const [err, setErr]=useState(false)
  const router= useRouter()

  const handleSubmit= async(e)=>{
  e.preventDefault()
  const name = e.target[0].value
  const email = e.target[1].value
  const password = e.target[2].value
  try {
     const res = await fetch("/api/auth/register",{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,password
      })
     })
     res.status===201 && router.push("/dashboard/login?success=Account has been created");
  } catch (error) {
    setErr(true)
  }
  }
  return (
    <div className={styles.container}>
     <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder='Username' className={styles.input}required  />
      <input type="text" placeholder='Email' className={styles.input}required />
      <input type="text" placeholder='Password' className={styles.input}required />
      <button className={styles.button}>Register</button>
     </form>
     <Link href='/dashboard/login'>Login With an existing account</Link>
     {err && "Something went wrong"}
    </div>
  )
}

export default Register
