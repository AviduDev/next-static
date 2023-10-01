import Image from "next/image"
import styles from "./Hero.module.css"

export default function Hero() {
    return (
      <div className={styles.heroContainer}>
        <h1>
          website designer/
          <br />
          frontend developer
        </h1>
        <Image
          src="https://res.cloudinary.com/avidu/image/upload/v1695488712/ezgif.com-gif-maker_1_ndll1k.webp"
          alt=""
          fill
          priority
          className={styles.background}
        ></Image>
      </div>
    );
}