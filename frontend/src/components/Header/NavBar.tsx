import { useEffect, useState } from 'react';
import styles from './NavBar.module.css'
export function NavBar() {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const arrayOfLi = [
        {
            id: 1,
            name: 'Home',
            href: '#Home'
        },
        {
            id: 2,
            name: 'Work',
            href: '#Work'
        },
        {
            id: 3,
            name: 'About',
            href: '#About'
        }
    ]
    
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 30) {
            // scrolling down
            setShow(false);
        } else {
            // scrolling up
            if (window.scrollY < 30) {
                setShow(true);
            }
        }
        setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);


    return (
        <div className={`${styles.navbar} ${show ? styles.visible : styles.hidden}`}>
            <div className={styles.logoLetters}>
                <a href="#Home">
                    E.S.
                </a>
            </div>
            <div>
                <ul>
                    {arrayOfLi.map((li) => {
                        return(
                            <li key={li.id}><a href={li.href}>{li.name}</a></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}