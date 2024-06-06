import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={styles.head}>QuantPair</h1>
      
      <div className={styles.main}>

        {/* SideBar */}
        <div className={styles.sidebar}>
          <div className={styles.items}>Home</div>
          <div className={styles.items}>Favourites</div>
          <div className={styles.items}>Trending</div>
          <div className={styles.items}>Documentation</div>
          <div className={styles.items}>Contact</div>
          <div className={styles.items}>Settings</div>
        </div>
      
      <div className={styles.content}>
        <h1 className={styles.head}>Welcome to the Project</h1>
      </div>


      </div>

      
      <div className={styles.grid}>


        
      </div>
    </main>
  );
}
