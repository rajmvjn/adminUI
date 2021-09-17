import { Fragment } from 'react';

import styles from './Grid.module.css';

const Grid = props => {

    const { gridData } = props;
    
    const gridContentRows = gridData.map((row, index) => {
        return (
            <div key={index} className={styles.appGridRow}>

                    <div className={styles.col1}>
                        <input type="checkbox" />
                    </div>

                    <div>
                        {row.appCode}
                    </div>

                    <div>{row.description}</div>

                    <div className={styles.col4}>Actions</div>

                </div>
        )
    })

    return (
        <Fragment>
            <div className={styles.appGrid}>
                <div className={styles.appGridHeader}>
                    <div className={styles.col1}>
                        <input type="checkbox" />
                    </div>

                    <div>
                        Application Code
                    </div>

                    <div>Applicatin Description</div>

                    <div className={styles.col4}>Actions</div>

                </div>
                {gridContentRows}
                
            </div>
        </Fragment>
    )

}

export default Grid;