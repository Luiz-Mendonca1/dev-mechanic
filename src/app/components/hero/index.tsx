import styles from './hero.module.css';

interface HeroProps {
    heading: string;
    buttoUrl: string;
    buttonTitle: string;
    bannerUrl: string;
}

export function Hero({  heading, buttoUrl, buttonTitle, bannerUrl }: HeroProps) {
    return (
        <main className={styles.main}>
            <div className={styles.containerHero}>
                <h1 className={styles.title}>{heading}</h1>

                <a 
                target='_blank'
                href={buttoUrl}
                className={styles.link}>
                    {buttonTitle}
                </a>
            </div>
            <div className={styles.contentBanner}>
                {/*img*/}
            </div>
        </main>
    );
}