"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const Login = () => {

const session=useSession();
const router= useRouter()
 if(session.status==='authenticated'){
      router?.push('/dashboard')
   }
 if(session.status==='loading'){
    return <p>Loading...</p>
   }
const handleSubmit= async(e)=>{
  e.preventDefault()
   const email= e.target[0].value
   const password= e.target[1].value

   signIn("credentials",{email,password})
  }
  return (
    <div>
      <h1 className={styles.container}>
         <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder='Email' className={styles.input}required />
      <input type="text" placeholder='Password' className={styles.input}required />
      <button className={styles.button}>Login</button>
     </form>
        <button className={styles.button} onClick={()=>signIn("google")}>Login with Google</button>
      </h1>
    </div>
  )
}

export default Login
