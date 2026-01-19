import styles from './styles.module.css';
import Image from 'next/image';
import React from 'react';

interface HeroProps {
    heading: string;
    buttonUrl: string;
    buttonTitle: string;
    bannerUrl: string;
    icon: React.ReactNode;
}

export function Hero({ heading, buttonUrl, buttonTitle, bannerUrl, icon }: HeroProps) {
    const isInternalLink = buttonUrl.startsWith('#');

    return (
        <main className={styles.main}>
            <div className={styles.containerHero}>
                <h1 className={styles.title}>{heading}</h1>

                <a 
                target={isInternalLink ? '_self' : '_blank'}
                href={buttonUrl}
                className={styles.link}
                >
                    {icon}
                    {buttonTitle}
                </a>
            </div>
            
            <div className={styles.contentBanner}>
                <Image
                    className={styles.banner}
                    alt={heading}
                    src={bannerUrl}
                    priority={true}
                    fill={true}
                    sizes='(max-width: 480px) 100vw, (max-width:1024px) 75vw, 60vw'
                />
            </div>
        </main>
    );
}