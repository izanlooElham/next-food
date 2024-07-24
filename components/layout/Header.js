import Link from "next/link"
import styles from "./Header.module.css"


function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.left}>
            <Link href={"/"}>Boto Food</Link>
        </div>
        <div className={styles.right}>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/categories"}>Categories</Link>
        </div>
    </header>
  )
}

export default Header