import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className={styles.container}>
      <div>
        <p>
          ©{year}{" "}
          <Link href="/" className="no-underline hover:underline">
            Home
          </Link>
          .All Rights Reserved.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <Link href="https://www.facebook.com/">
          <Image
            src="/1.png"
            width={20}
            height={20}
            className={styles.icon}
            alt=""
          />
        </Link>
        <Link href="https://www.instagram.com/">
          <Image
            src="/2.png"
            width={20}
            height={20}
            className={styles.icon}
            alt=""
          />
        </Link>
        <Link href="https://www.twitter.com/">
          <Image
            src="/3.png"
            width={20}
            height={20}
            className={styles.icon}
            alt=""
          />
        </Link>
        <Link href="https://www.youtube.com/">
          <Image
            src="/4.png"
            width={20}
            height={20}
            className={styles.icon}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
