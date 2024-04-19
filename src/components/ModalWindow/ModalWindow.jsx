import styles from "./ModalWindow.module.css"
import sprite from "../images/sprite.svg"
import { nanoid } from "nanoid"
import { Link } from "react-router-dom"

export const ModalWindow = ({ active, setActive, data }) => {
    return (
        <div className={active ? `${styles.backdrop} ${styles.active}` : `${styles.backdrop}`} onClick={() => setActive(false)}>
            <div className={active ? `${styles.content_box} ${styles.active}` : `${styles.content_box}`} onClick={(e) => e.stopPropagation()}>
                <div className={styles.title_box}>
                    <h2 className={styles.title}>{data.name}</h2>
                    <button className={styles.close_button_box} onClick={() => setActive(false)} type="button"><svg width='32px' height='32px'><use href={sprite + "#icon-RatingClose"} /></svg></button>
                </div>
                <div className={styles.info_box}> 
                    <p className={styles.reviews}><svg width="16" height="16"><use href={sprite + "#icon-Star"} /></svg>{data.rating}({data.reviews.length} Reviews)</p>
                    <p className={styles.location}><svg width="16" height="16"><use href={sprite + "#icon-location"} /></svg>{data.location}</p>
                </div> 
                <p className={styles.price}>€{data.price}</p>
                <ul className={styles.pictures_box}>
                        {data.gallery.slice(0, 3).map(image => (<li className={styles.picture_item} key={nanoid()}>
                            <img className={styles.picture} src={image} alt={image} />
                        </li>))}
                </ul>
                <p className={styles.description}>{data.description}</p>
                <ul className={styles.add_info_box}>
                        <li>
                            <Link className={`${styles.link} ${styles.active_link}`} to="/">Features</Link> 
                        </li>
                        <li>
                            <Link className={styles.link} to="/">Reviews</Link>
                        </li>
                </ul>
            </div>
        </div>
    )
}