import { useEffect, useState } from 'react';
import styles from './NavBar.module.css'
export function NavBar() {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const arrayOfLi = ['Home', 'About', 'Work', 'Contact']

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
                E.S.
            </div>
            <div>
                <ul className={styles.fontOption}>
                    {arrayOfLi.map((li) => {
                        return(
                            <li key={li}><a href='#'>{li}</a></li>
                        )
                    })}
                    
                </ul>
            </div>
        </div>
    )
}