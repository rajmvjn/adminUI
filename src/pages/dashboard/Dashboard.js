import { Fragment } from "react";
import Tile from "../../components/UIElements/Tile";

import styles from './Dashboard.module.css';
import { dashboard } from "../../mock";

const Dashboard = () => {

   const tiles = dashboard.map((tile)  => <Tile key={tile.id} tile={tile} />)

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