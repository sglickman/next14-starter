import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>nycct 2024</div>
      <div className={styles.text}>seth &copy; all rights reserved</div>
    </div>
  );
};

export default Footer;
