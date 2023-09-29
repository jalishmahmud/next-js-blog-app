import Link from "next/link";
import styles from "./AuthLink.module.css";

const AuthLink = () => {
  const status = "notauthenticated";

  return (
    <div>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles["link"]}>Logout</span>
        </>
      )}
    </div>
  );
};

export default AuthLink;
