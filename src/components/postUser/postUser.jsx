import styles from "./postUser.module.css";

const getAuthor = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const PostUser = async ({ userId }) => {
  const user = await getAuthor(userId);

  return (
    <div className={styles.container}>
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>{user.name}</span>
    </div>
  );
};

export default PostUser;
