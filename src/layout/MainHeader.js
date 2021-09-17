import styles from './MainHeader.module.css';

const MainHeader = (props) => {
    return (
        <header className={styles.header} onClick={props.onClick}>
            <div className={styles.absLogo}>
                <img src="" alt="AlbertsonsLogo" />
            </div>
            <div className={styles.profile}>
                Profile
            </div>
        </header>
    )

}

export default MainHeader;