import { HomeProps } from "@/utils/home.types";
import styles from "./styles.module.css";
import Image from "next/image";

export function Services({object}: HomeProps) {
    return(
        <section className={styles.containerAbout}>
            <article className={styles.innerAbout}>
                <h1 className={styles.title}>
                    Sobre nós
                </h1>

                <p className={styles.text}>
                    {object.metadata.about.description}
                </p>

                <div className={styles.bannerAbout}>
                    <Image
                        className={styles.imageAbout}
                        alt='About Banner'
                        quality={100}
                        fill={true}
                        src={object.metadata.about.banner.url}
                    />
                </div>
            </article>
        </section>
    );
}