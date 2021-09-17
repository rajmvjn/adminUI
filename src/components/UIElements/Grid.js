import { Fragment } from 'react';

import styles from './Grid.module.css';

const Grid = props => {

    const { gridData } = props;

    //const gridContent = 

    return (
        <Fragment>
            <div className={styles.appGrid}></div>
                <div className={styles.appGridHeader}>
                    <div>
                        Checkbox
                    </div>

                    <div>
                        Application Code
                    </div>

                    <div>Applicatin Description</div>

                    <div>Actions</div>

                </div>
                <div className={styles.appGridRow}>

                    <div>
                        Checkbox
                    </div>

                    <div>
                        Application Code
                    </div>

                    <div>Applicatin Description</div>

                    <div>Actions</div>

                </div>
                <div className={styles.appGridRow}>

                    <div>
                        Checkbox
                    </div>

                    <div>
                        Application Code
                    </div>

                    <div>Applicatin Description</div>

                    <div>Actions</div>

                </div>
            </div>
        </Fragment>
    )

}

export default Grid;