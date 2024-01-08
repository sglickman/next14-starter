import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <form action="">
        <input type="text" placeholder="username" name="shortname" />
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="email" name="email" />
      </form>
    </div>
  );
};

export default RegisterPage;
