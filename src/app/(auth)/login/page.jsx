import styles from "./login.module.css";
import { auth, signIn } from "@/lib/auth";

const LoginPage = async () => {
  const session = await auth();
  // console.log(session);

  const handleGoogleLogin = async () => {
    "use server";
    await signIn("google");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGoogleLogin}>
          <button className={styles.google}>Login with Google</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
