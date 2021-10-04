import { Fragment } from 'react';
import styles from './SortSelect.module.css';

const SortSelect = props => {
    return (
        <Fragment>
            { props.label && <label className={styles.label} htmlFor='select-label' > {props.label} </label> }
            <select type="text" onChange={props.changeHandler} id='select-label'>
                {props.options.map((option, index) => <option key={index}>{option}</option>)}
            </select>
        </Fragment>
    );
}
export default SortSelect;