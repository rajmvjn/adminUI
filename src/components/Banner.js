import styles from './Banner.module.css';

const Banner = (props) => {

    const resStatusData = props.responseStatusData;

    return <div className={styles.banner}>
        {resStatusData.message}
    </div>;

}

export default Banner;