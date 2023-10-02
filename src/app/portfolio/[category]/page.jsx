import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catName}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="see more" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="/11.jpg" alt="" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="see more" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="/12.jpg" alt="" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="see more" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="/11.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
