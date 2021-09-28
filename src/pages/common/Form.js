import { Fragment, useState } from 'react';
import Button from '../../components/controls/Button';

import styles from './Form.module.css';

const Form = props => {

    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');
    const [thirdInput, setThirdInput] = useState('');

    const { formLabels, cancelClickHandler, formSubmitHandler } = props;

    const onCancelClickHandler = (event) => {
        event.preventDefault();
        cancelClickHandler();
    }


    const onSubmitClickHandler = (event) => {
        event.preventDefault();        
        formSubmitHandler({firstInput, secondInput, thirdInput});
    }

    const firstInputChangeHandler = (event) => {
        setFirstInput(event.target.value)
    }

    const secondInputChangeHandler = (event) => {
        setSecondInput(event.target.value);
    }

    const thirdInputChangeHandler = (event) => {
        setThirdInput(event.target.value)
    }

    return (
        <form className={styles.formgrid}>
            <div className={styles.items}>Create {formLabels.actionName}</div>
            <div className={styles.download}><a href="download">Download excel format</a> </div>
            <div className={styles.items}>
                <label htmlFor='firstInput'>
                    {formLabels.firstInputLabel}
                </label>
                <input id='firstInput' type="text" value={firstInput} onChange={firstInputChangeHandler}/>

            </div>
            <div className={styles.items}>
                {formLabels.secondInputLabel  &&  <Fragment>
                <label htmlFor='secondInput'>
                    {formLabels.secondInputLabel}
                </label>
                <input id='secondInput' type="text" value={secondInput}  onChange={secondInputChangeHandler}/> </Fragment>}
            </div>
            <div className={styles.desc}>
                <label htmlFor='thirdInput'>
                    {formLabels.thirdInputLabel}
                </label>
                <input id='thirdInput' type="text" value={thirdInput} onChange={thirdInputChangeHandler}/>
            </div>
            <div className={styles.multipleupload}>Or upload multiple</div>
            <div className={styles.uploadfile}>
                <label className={styles.uploadLabel}>
                    Upload File(for multiple upload)
                </label>
                <input type="file" className={styles.uploadInput}/>
                <Button>Upload</Button>

            </div>
            <div className={styles.submit}>
                <Button clickHandler={onSubmitClickHandler}>Create</Button>
                <Button clickHandler={onCancelClickHandler}>Cancel</Button>
            </div>
        </form>
    )
}

export default Form;