'use client';

import { useEffect, useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
    const [top, setTop] = useState(true);

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [top]);

    return (
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href="/">Dev Mechanic</Link>
                    </div>
                    <nav className={styles.nav}>
                        <Link href='/'>Home</Link>
                        <Link href='/services'>Serviços</Link>
                        <Link href='/contacts'>Contatos</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}