import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeHttpCall } from '../../store/http/httpActions';
import { appCodeActions } from '../../store/application/applicationSlice';

import SearchInput from '../../components/controls/SearchInput';
import SortSelect from '../../components/controls/SortSelect';
import Button from '../../components/controls/Button';
import Grid from '../../components/UIElements/Grid';
import Form from '../common/Form';
import { APPCODE_URL } from '../../constants/api';

import styles from './Application.module.css';

const Application = () => {

    const dispatch = useDispatch();
    const [showForm, setShowForm ] = useState(false);
    const appCodes = useSelector(state => state.applicationSlice.appCodes);
    console.log(appCodes);    
 
    // API related code starts..
    useEffect(() => {
        dispatch(makeHttpCall(APPCODE_URL, appCodeActions));
     }, [dispatch]);    

    const onFormSubmission = async (formData) => {      
        const appCodeData = {
            id: Math.random(),
            appCode: formData.firstInput,
            description: formData.thirdInput
        }              
        dispatch(makeHttpCall(APPCODE_URL, appCodeActions, appCodeData, 'POST'));
        setShowForm(false);
    } 
    // API related code ends.

    // event handling starts..
    const onChangeHandler = (event) => {
        alert(event.target.value);
    }

    const onSortChangeHandler = (event) => {
        alert(event.target.value);
    }

    const toggleShowForm = () => {
        setShowForm(prevState => {
            return !prevState;
        })
    }

    const onButtonClickHandler = (ACTION,event) => {
        if(ACTION === 'CREATE') {
            toggleShowForm();
        }
    }

    const onCancelClickHandler = () => {
        toggleShowForm();
    }
    //Event handlng ends
    
    // Form related code starts..
    const formLabels = {
        actionName: 'Application',
        firstInputLabel: 'Application Code',
        secondInputLabel: '',
        thirdInputLabel: 'application description'
    }

    const formElement = <Form formLabels = {formLabels} cancelClickHandler={onCancelClickHandler} formSubmitHandler={onFormSubmission}/>
    // Form related code ends.

    return (
        <Fragment>   
            { showForm ? formElement :
                <Fragment>                        
            <div className={styles.appSubHeader}>
                <div> List of Applications  </div>
                <div className={styles.selectbox}> 
                    <select>
                        <option>
                            Excel
                        </option>
                        <option>
                            PDF
                        </option>
                    </select>
                </div>
            </div>
            <div className={styles.searchbar}>
                <div>
                    <SearchInput changeHandler={onChangeHandler} label="Search"/>
                </div>
                <div>
                    <SortSelect changeHandler={onSortChangeHandler} label="Sort" options={['New to old', 'Old to new', 'A to Z', 'Z to A']}/>
                </div>
                <div>
                    <SortSelect changeHandler={onSortChangeHandler} label="Application Code" options={['All', 'IS01', 'FO01']}/>
                </div>
                <div></div>
                <div>
                    <Button clickHandler={onButtonClickHandler.bind(this, 'CREATE')}>
                        Create Application
                    </Button>                    
                </div>
                <div>
                    <Button clickHandler={onButtonClickHandler.bind(this, 'DELETE')}>
                        Delete Application
                    </Button>   
                </div>
            </div>
            <Grid gridData={appCodes} />
            <div className={styles.pagination}>
                    <div>
                        
                    </div>

                    <div>dropdown</div>

                    <div>Pagination</div>
            </div> </Fragment> }
            </Fragment>        
    )
}

export default Application;