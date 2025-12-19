'use client'

import Link from "next/link"
import styles from './error.module.scss'

export default function Error(){
    return(
        <div className={styles.error}>
            <h1>Error 404</h1>
            <p>essa pagina não existe</p>
            <Link href='/'>
                voltar para home
            </Link>
        </div>
    )
}