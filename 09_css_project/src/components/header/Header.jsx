import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Hello world institute</h1>
            <button className={styles.btn}>Log in</button>
        </div>
    )
}

export default Header
