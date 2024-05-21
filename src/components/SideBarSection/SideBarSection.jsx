import sprite from "../images/sprite.svg";
import styles from "./SideBarSection.module.css"
import { useDispatch } from "react-redux";
import { addEquipment, addLocation, addVehicleType} from "../../redux/advertsSlice";
import { useState } from "react";

export const SideBarSection = () => {
    const dispatch = useDispatch();
    const [equipment, setEquipment] = useState([]);
    const [vehicleType, setvehicleType] = useState('');
    const handleChange = (e) => {
        dispatch(addLocation(e.target.value.toLowerCase()))
    }

    const handleFilterButton = () => {
        dispatch(addEquipment(equipment));
        dispatch(addVehicleType(vehicleType))
    }

    const handleEquipment = (e) => {
        if (e.target.checked) {
           return setEquipment([...equipment, e.target.defaultValue])
        }
        setEquipment(equipment.filter(eq => eq !== e.target.defaultValue) )
    }

    const handleVehicleType = (e) => {
        setvehicleType(e.target.defaultValue)
    }
        
    return (<section>
        <form>
                <label className={styles.text_location} htmlFor="location">Location</label>
                <div className={styles.input_box}>
                    <svg width="18" height="20"><use href={sprite + "#icon-location"} /></svg>
                <input className={styles.input_field}
                name='location'
                type="text"
                placeholder="Location"
                onChange={handleChange}/>

                </div>
                <h3 className={styles.filter}>Filters</h3>
                <h4 className={styles.filter_title}>Vehicle equipment</h4>
            <ul className={styles.buttons_box}>
                <li className={styles.input_item}>
                    <input type="checkbox" name="equipment" value="airConditioner" id="AC" className={styles.input_button} onClick={handleEquipment} />
                    <label className={styles.input_label} htmlFor="AC"><svg width="32" height="32"><use href={sprite + "#icon-Vector"} /></svg>AC</label>
                </li>
                <li className={styles.input_item}>
                    <input type="checkbox" name="equipment" value="transmission" id="Automatic" className={styles.input_button} onClick={handleEquipment} />
                    <label className={styles.input_label} htmlFor="Automatic"><svg width="32" height="32"><use href={sprite + "#icon-Automatic"} /></svg>Automatic</label>
                </li>
                <li className={styles.input_item}>
                    <input type="checkbox" name="equipment" value="kitchen" id="Kitchen" className={styles.input_button}  onClick={handleEquipment}/>
                    <label className={styles.input_label} htmlFor="Kitchen"><svg width="32" height="32"><use href={sprite + "#icon-Kitchen"} /></svg>Kitchen</label>
                </li>
                <li className={styles.input_item}>
                    <input type="checkbox" name="equipment" value="TV" id="TV" className={styles.input_button} onClick={handleEquipment}/>
                    <label className={styles.input_label} htmlFor="TV"><svg width="32" height="32"><use href={sprite + "#icon-Vertical-container-1"} /></svg>TV</label>
                </li>
                <li className={styles.input_item}>
                    <input type="checkbox" name="equipment" value="toilet" id="WC" className={styles.input_button} onClick={handleEquipment}/>
                    <label className={styles.input_label} htmlFor="WC"><svg width="32" height="32"><use href={sprite + "#icon-Rating"} /></svg>WC</label>
                </li>
            </ul>

            
                <h4 className={styles.filter_title}>Vehicle type</h4>
            <ul className={styles.buttons_box}>
                <li className={styles.input_item}>
                    <input type="radio" name="vehicleType" value="panelTruck" id="van" className={styles.input_button} onClick={handleVehicleType}/>
                    <label className={styles.input_label} htmlFor="van"><svg width="40" height="28"><use href={sprite + "#icon-Button-2"} /></svg>Van</label>
                </li>
                <li className={styles.input_item}>
                    <input type="radio" name="vehicleType" value="fullyIntegrated" id="fully-integrated" className={styles.input_button} onClick={handleVehicleType}/>
                    <label className={styles.input_label} htmlFor="fully-integrated"><svg width="40" height="28"><use href={sprite + "#icon-Button-1"} /></svg>Fully Integrated</label>
                </li>
                <li className={styles.input_item}>
                    <input type="radio" name="vehicleType" value="alcove" id="alcove" className={styles.input_button} onClick={handleVehicleType}/>
                    <label className={styles.input_label} htmlFor="alcove"><svg width="40" height="28"><use href={sprite + "#icon-camper"} /></svg>Alcove</label>
                </li>
                </ul>
                    <button className={styles.search_button} type="button" onClick={handleFilterButton}>Search</button>
        </form>
                </section>)
}