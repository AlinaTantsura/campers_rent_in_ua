// import styles from "./EquipmentButtonsBox.modules.css";
import { useSelector } from "react-redux";
import styles from "../CamperCatalogCard/CamperCatalogCard.module.css"
import sprite from "../images/sprite.svg"
import { selectCurrent } from "../../redux/favorites/favoriteSelectors";

export const EquipmentButtonsBox = () => {
    const data = useSelector(selectCurrent);
    return (
        <ul className={styles.button_box}>
            {(data.adults) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Users"} /></svg>{data.adults} adults</button>
                </li>
            )}
            {(data.transmission === 'automatic') && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Automatic"} /></svg>Automatic</button>
                </li>
            )}
            {(data.engine === 'petrol') && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Vertical-container"} /></svg>Petrol</button>
                </li>
            )}
            {(data.details.kitchen) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Kitchen"} /></svg>Kitchen</button>
                </li>
            )}
            {(data.details.beds) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Bed"} /></svg>{data.details.beds} beds</button>
                </li>
            )}
            {(data.airConditioner) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Vector"} /></svg>AC</button>
                </li>
            )}
            {(data.details.airConditioner) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-streamline_hotel-air-conditioner"} /></svg>{data.details.airConditioner} air conditioner</button>
                </li>
            )}
            {(data.details.CD) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-circle-disk"} /></svg>CD</button>
                </li>
            )}
            {(data.details.radio) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-solar_radio-linear"} /></svg>Radio</button>
                </li>
            )}
            {(data.details.hob) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Microwave"} /></svg>{data.details.hob} hob</button>
                </li>
            )}
            {(data.details.toilet) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-mingcute_toilet-paper-line"} /></svg>Toilet</button>
                </li>
            )}
            {(data.details.shower) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Rating"} /></svg>Shower</button>
                </li>
            )}
            {(data.details.freezer) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-arcticons_freezer"} /></svg>Freezer</button>
                </li>
            )}
            {(data.details.gas) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-mdi_gas"} /></svg>Gas</button>
                </li>
            )}
            {(data.details.water) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-Water"} /></svg>Water</button>
                </li>
            )}
            {(data.details.microwave) && (
                <li>
                    <button className={styles.button} type="button"><svg width="20" height="20"><use href={sprite + "#icon-streamline_microwave"} /></svg>Microwave</button>
                </li>
            )}
                
                </ul>
    )
    
}