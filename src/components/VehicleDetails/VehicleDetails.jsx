import { useSelector } from "react-redux";
import styles from "./VehicleDetails.module.css"
import { selectCurrent } from "../../redux/favorites/favoriteSelectors";

export const VehicleDetails = () => {
    const data = useSelector(selectCurrent);
    return (
        <>
            <h3 className={styles.title_vehicle}>Vehicle details</h3>
            <ul className={styles.vehicle_items_box}>
                {(data.form) && (<li className={styles.vehicle_item}>Form <span className={styles.vehicle_value}>{data.form}</span></li>)}
                {(data.length) && (<li className={styles.vehicle_item}>Length <span className={styles.vehicle_value}>{data.length}</span></li>)}
                {(data.width) && (<li className={styles.vehicle_item}>Width <span className={styles.vehicle_value}>{data.width}</span></li>)}
                {(data.height) && (<li className={styles.vehicle_item}>Height <span className={styles.vehicle_value}>{data.height}</span></li>)}
                {(data.tank) && (<li className={styles.vehicle_item}>Tank <span className={styles.vehicle_value}>{data.tank}</span></li>)}
                {(data.consumption) && (<li className={styles.vehicle_item}>Consumption <span className={styles.vehicle_value}>{data.consumption}</span></li>)}
            </ul>
        </>
    )
}