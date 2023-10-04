import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.maincontainer}>
      {data.map((item) => (
        <Link href="/blog/testId" className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src="/blog.jpg"
              width={400}
              height={250}
              alt=""
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
