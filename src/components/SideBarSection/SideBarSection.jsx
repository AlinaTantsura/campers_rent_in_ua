import sprite from "../images/sprite.svg";
import styles from "./SideBarSection.module.css"
import { useDispatch } from "react-redux";
import { addEquipment, addLocation} from "../../redux/advertsSlice";

export const SideBarSection = () => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(addLocation(e.target.value.toLowerCase()))
    }

    const handleFilterButton = () => {
        dispatch(addEquipment(["airConditioner", "kokosh"]))
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
                    <input type="checkbox" name="AC" value="airConditioner" id="AC" className={styles.input_button} />
                    <label className={styles.input_label} htmlFor="AC"><svg width="32" height="32"><use href={sprite + "#icon-Vector"} /></svg>AC</label>
                </li>
                <li className={styles.input_item}>
                    <input type="checkbox" name="Automatic" value="transmission" id="Automatic" className={styles.input_button} />
                    <label className={styles.input_label} htmlFor="Automatic"><svg width="32" height="32"><use href={sprite + "#icon-Automatic"} /></svg>Automatic</label>
                </li>
                <li className={styles.input_item}>
                    <input type="checkbox" name="Kitchen" value="kitchen" id="Kitchen" className={styles.input_button}  />
                    <label className={styles.input_label} htmlFor="Kitchen"><svg width="32" height="32"><use href={sprite + "#icon-Kitchen"} /></svg>Kitchen</label>
                </li>
                <li className={styles.input_item}>
                    <input type="checkbox" name="TV" value="TV" id="TV" className={styles.input_button} />
                    <label className={styles.input_label} htmlFor="TV"><svg width="32" height="32"><use href={sprite + "#icon-Vertical-container-1"} /></svg>TV</label>
                </li>
                <li className={styles.input_item}>
                    <input type="checkbox" name="WC" value="toilet" id="WC" className={styles.input_button} />
                    <label className={styles.input_label} htmlFor="WC"><svg width="32" height="32"><use href={sprite + "#icon-Rating"} /></svg>WC</label>
                </li>
            </ul>

                <h4 className={styles.filter_title}>Vehicle type</h4>
                <div className={styles.buttons_box}>
                    <button className={styles.filter_button} type="button"><svg width="40" height="28"><use href={sprite + "#icon-Button-2"}  /></svg>Van</button>
                    <button className={styles.filter_button} type="button"><svg width="40" height="28"><use href={sprite + "#icon-Button-1"}  /></svg>Fully Integrated</button>
                    <button className={styles.filter_button} type="button"><svg width="40" height="28"><use href={sprite + "#icon-camper"} /></svg>Alcove</button>
                </div>
                    <button className={styles.search_button} type="button" onClick={handleFilterButton}>Search</button>
        </form>
                </section>)
}