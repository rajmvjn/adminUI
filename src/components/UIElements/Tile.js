import styles from './Tile.module.css';

const Tile = props => {

    const { tile } = props;

    return (
        <div className={styles.tile}>
            <h1>{tile.count}</h1>
            <p>Total count of</p>
            <p>{tile.category && tile.category.toUpperCase()}</p>
        </div>
    )

}

export default Tile;