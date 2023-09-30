"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import React from "react";
function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Surya Blog
      </Link>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard">Dashboard</Link>
        <button
          className={styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
