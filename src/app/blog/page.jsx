import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
function page() {
  return (
    <div className={styles.maincontainer}>
      <Link href="/blog/testId" className={styles.container}>
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
          <h1 className={styles.title}>Heading one</h1>
          <p>DESCRIPTION OF FIRST ONE</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
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
          <h1 className={styles.title}>Heading one</h1>
          <p>DESCRIPTION OF FIRST ONE</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
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
          <h1 className={styles.title}>Heading one</h1>
          <p>DESCRIPTION OF FIRST ONE</p>
        </div>
      </Link>
    </div>
  );
}

export default page;
