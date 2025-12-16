'use client';

import { useState, useEffect } from 'react';
import Styles from './styles.module.css';
import Link from 'next/link';

import { X, Menu } from 'lucide-react';
import { MenuProps } from '@/utils/menu.types';

interface SubMenuProp{
    menu: MenuProps
}

export function Submenu({menu}: SubMenuProp) {
    const [isOpen, setIsOpen] = useState(false);

    console.log(menu)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return(
        <main className={Styles.submenu}>
            <div className={Styles.submenuIcon} onClick={toggleMenu}> 
                <Menu size={32} />
                Menu
            </div>
            <ul className={` ${Styles.ul} ${isOpen ? Styles.open : ''} `}>

                {isOpen && (
                    <button onClick={toggleMenu} className={Styles.closeButton}>
                        <X size={55} />
                    </button>
                )}

                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/services">Serviços</Link>
                </li>
                <li>
                    <Link href="/contacts">Contatos</Link>
                </li>
            </ul>
        </main>
    )
}