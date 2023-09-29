import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import AuthLink from "../auth-link/AuthLink";
const Navbar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["social"]}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles["logo"]}>FancyBlog</div>
      <div className={styles["links"]}>
        <ThemeToggle />
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;
