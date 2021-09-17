import { Fragment } from 'react';
import styles from './SearchInput.module.css';

const SearchInput = props => {
    return (
        <Fragment>
            { props.label && <label className={styles.label}> {props.label} </label> }
            <input type="text" onChange={props.changeHandler}/>
        </Fragment>
    );
}
export default SearchInput;