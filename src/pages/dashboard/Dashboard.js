import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Tile from "../../components/Tile";
import styles from './Dashboard.module.css';
import { makeHttpCall } from "../../store/http/httpActions";
import { dashboardActions } from "../../store/dashboard/dashboardSlice";
import { APPCODE_URL } from '../../constants/api';

const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(makeHttpCall(APPCODE_URL, dashboardActions));
    }, [dispatch]);

    const dasboardItems = useSelector(state => state.dashboardSlice.appCodes);    
    const tiles = dasboardItems && dasboardItems.map((tile)  => <Tile key={tile.id} tile={tile} />);    

    return (
        <Fragment>

            <div className={styles["sub-header"]}>
                Dashboard
            </div>
            <div className={styles["dashboard-grid"]}>
                {tiles}
            </div>
        </Fragment>
    )
}

export default Dashboard;