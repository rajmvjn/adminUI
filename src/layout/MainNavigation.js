import { useHistory  } from 'react-router';

import { MENU_OPTIONS } from '../constants';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {

    const history = useHistory();

    const navClickHandler = (event) => {
        event.preventDefault();
        const navText = event.target.innerText;
        if(navText) {
            history.push(navText.toLowerCase());
        }
    }

    const navOptions = MENU_OPTIONS.map((option, index) => {
        return <li key={index} className={styles.listItems}>
               <a href={"ulr"} onClick={navClickHandler}>{option}</a>    
        </li>
    });

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {navOptions}
            </ul>
        </nav>
    )

}

export default MainNavigation;