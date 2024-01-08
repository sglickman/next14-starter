import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>New Yorker Comic Contest Team</h1>
        <p className={styles.desc}>🏆️ go for the 🥇</p>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/eustace_tilley_trophy.jpeg"
          alt=""
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
