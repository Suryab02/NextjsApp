import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title and is the title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam
            aliquid minus quos nesciunt exercitationem, delectus deleniti,
            doloribus iste, voluptas beatae? Debitis autem corporis neque ea
            explicabo aliquid sed voluptate.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa
          at vero corrupti quisquam, dolor pariatur porro quo numquam. Provident
          cumque, numquam dolorem minus aspernatur sed eveniet nihil laboriosam
          in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          culpa at vero corrupti quisquam, dolor pariatur porro quo numquam.
          Provident cumque, numquam dolorem minus aspernatur sed eveniet nihil
          laboriosam in?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
