import { Fragment } from 'react';
import Button from '../../components/controls/Button';

import styles from './Form.module.css';

const Form = props => {

    const { formData, cancelClickHandler } = props;

    const onCancelClickHandler = (event) => {
        event.preventDefault();
        cancelClickHandler();
    }

    return (
        <form className={styles.formgrid}>
            <div className={styles.items}>Create {formData.actionName}</div>
            <div className={styles.download}><a href="download">Download excel format</a> </div>
            <div className={styles.items}>
                <label>
                    {formData.firstInputLabel}
                </label>
                <input type="text" />

            </div>
            <div className={styles.items}>
                {formData.secondInputLabel  &&  <Fragment><label>
                    {formData.secondInputLabel}
                </label>
                <input type="text" /> </Fragment>}
            </div>
            <div className={styles.desc}>
                <label>
                    {formData.thirdInputLabel}
                </label>
                <input type="text" />
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
                <Button>Create</Button>
                <Button clickHandler={onCancelClickHandler}>Cancel</Button>
            </div>
        </form>
    )
}

export default Form;