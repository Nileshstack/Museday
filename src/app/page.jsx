import Image from "next/image";
import styles from "./page.module.css";
import Hero from '../../public/hero.png'
import Button from "@/components/Button/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>A Place Where Content Feels Like Home</h1>
        <p className={styles.description}>Bringing stories, insights, and creativity into one cozy corner of the web.</p>
        <Button url='/portfolio' text='See Our Works'/>
      </div>
      <div className={styles.item}></div>
     <Image src={Hero} alt="hero" className={styles.img}></Image>
    </div>
  );
}
