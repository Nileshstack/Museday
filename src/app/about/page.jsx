import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ill from "../../../public/illustration.png";
import Button from "@/components/Button/page";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={ill} fill={true} alt="Image" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDecs}>
            Where ideas breathe and stories unfold.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.decs}>
            At Museday, we are a team of thinkers, writers, and creators who
            believe in the power of thoughtful expression. In a noisy digital
            world, we aim to build a quiet corner for stories that inspire,
            inform, and connect. Whether it is reflections, deep dives, or
            creative musings — we bring life to every word. We believe that
            great content doesn't just speak — it resonates. Every post on
            Museday is crafted with intent, emotion, and clarity. Our writers
            explore ideas that matter, moments that move, and questions that
            linger long after you've closed the tab. Museday is not just a blog
            — it is a digital sanctuary for curious minds and expressive souls.
            We embrace minimalism in design and richness in thought, allowing
            every piece to breathe and every reader to pause. Here, writing
            isn't rushed. It is real.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.decs}>
            We publish curated blogs that blend creativity with clarity. From
            deep insights to light-hearted musings, we cover everything that
            sparks curiosity. Our platform encourages thought-provoking
            conversations and builds a community around digital expression.{" "}
            <br />
            ✦ We craft articles that resonate with your thoughts. <br />
            ✦ We explore ideas, from tech trends to timeless philosophies.{" "}
            <br />
            ✦ We celebrate voices — raw, real, and refreshing. <br />
          </p>
          <Button text="Contact" url="/contacts" />
        </div>
      </div>
    </div>
  );
};

export default About;
