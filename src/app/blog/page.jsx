'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Blog = () => {
  const session=useSession()
  const router=useRouter()
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  if(session.status==='loading'){
    return <p>Loading...</p>
   }
   if(session.status==='unauthenticated'){
    router?.push("/dashboard/register")
   }

  const getPost = async () => {
    try {
      let data = await fetch('/api/show', {
        cache: "no-store"
      });
      data = await data.json();
      console.log("Fetched data:", data);
      if (Array.isArray(data)) {
        setPost(data);
      } else {
        console.error("API didn't return an array:", data);
        setPost([]);
      }
    } catch (err) {
      console.error("Failed to fetch posts", err);
      setPost([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  if (loading) return <div>Loading posts...</div>;

  if (!post.length) return <div>No posts found.</div>;

  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 className={styles.head}>All Blogs</h1>
        {post.map(item => (
          <div className={styles.container} key={item._id}>
            <div className={styles.imageContainer}>
              <img src={item.img} alt="Post image"  className={styles.image} />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <h3 className={styles.decs}>{item.desc}</h3>
              <p className={styles.content}>{item.content}</p>
              <p className={styles.name}>By: {item.username}, <br />
               CreatedAt: {new Date(item.createdAt).toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short"
  })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
