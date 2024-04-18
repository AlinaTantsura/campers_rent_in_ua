import sprite from "../images/sprite.svg";
import styles from "./SideBarSection.module.css"

export const SideBarSection = () => {
    return(<section>
                <label className={styles.text_location} htmlFor="location">Location</label>
                <div className={styles.input_box}>
                    <svg width="18" height="20"><use href={sprite + "#icon-location"} /></svg>
                    <input className={styles.input_field} name='location' type="text" value="Kyiv, Ukraine"/>
                </div>
                <h3 className={styles.filter}>Filters</h3>
                <h4 className={styles.filter_title}>Vehicle equipment</h4>
                <div className={styles.buttons_box}>
                    <button className={styles.filter_button} type="button"><svg width="32" height="32"><use href={sprite + "#icon-Vector"}  /></svg>AC</button>
                    <button className={styles.filter_button} type="button"><svg width="32" height="32"><use href={sprite + "#icon-Automatic"}  /></svg>Automatic</button>
                    <button className={styles.filter_button} type="button"><svg width="32" height="32"><use href={sprite + "#icon-Kitchen"}  /></svg>Kitchen</button>
                    <button className={styles.filter_button} type="button"><svg width="32" height="32"><use href={sprite + "#icon-Vertical-container-1"}  /></svg>TV</button>
                    <button className={styles.filter_button} type="button"><svg width="32" height="32"><use href={sprite + "#icon-Rating"}  /></svg>Shower/WC</button>
                </div>
                <h4 className={styles.filter_title}>Vehicle type</h4>
                <div className={styles.buttons_box}>
                    <button className={styles.filter_button} type="button"><svg width="40" height="28"><use href={sprite + "#icon-Button-2"}  /></svg>Van</button>
                    <button className={styles.filter_button} type="button"><svg width="40" height="28"><use href={sprite + "#icon-Button-1"}  /></svg>Fully Integrated</button>
                    <button className={styles.filter_button} type="button"><svg width="40" height="28"><use href={sprite + "#icon-camper"} /></svg>Alcove</button>
                </div>
                    <button className={styles.search_button} type="button">Search</button>

                </section>)
}