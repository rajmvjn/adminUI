import styles from './Application.module.css';
import { Fragment } from 'react';
import { appCodes } from '../../mock/appCodes';

import SearchInput from '../../components/controls/SearchInput';
import SortSelect from '../../components/controls/SortSelect';
import Button from '../../components/controls/Button';
import Grid from '../../components/UIElements/Grid';

const Application = () => {

    const onChangeHandler = (event) => {
        alert(event.target.value);
    }

    const onSortChangeHandler = (event) => {
        alert(event.target.value);
    }

    const onButtonClickHandler = (ACTION,event) => {
        console.log(ACTION, event)
    }



    return (

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
            </div>
        </Fragment>
    )

}

export default Application;