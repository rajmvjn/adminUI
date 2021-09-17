import { Fragment } from 'react';
import styles from './SortSelect.module.css';

const SortSelect = props => {
    return (
        <Fragment>
            { props.label && <label className={styles.label}> {props.label} </label> }
            <select type="text" onChange={props.changeHandler}>
                {props.options.map((option, index) => <option key={index}>{option}</option>)}
            </select>
        </Fragment>
    );
}
export default SortSelect;