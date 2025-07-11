import React from 'react'
import style from './page.module.css'
import Link from 'next/link'
const Button = ({text,url}) => {
  return (
    <Link href={url}>
    <button className={style.btn}>
      {text}
    </button>
    </Link>
  )
}

export default Button
