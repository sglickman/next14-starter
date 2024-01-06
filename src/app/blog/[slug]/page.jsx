import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

const getPost = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const getAuthor = async (authorId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${authorId}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SinglePost = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);
  const author = await getAuthor(post.userId);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/14985628/pexels-photo-14985628/free-photo-of-architecture-minimal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/14985628/pexels-photo-14985628/free-photo-of-architecture-minimal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
