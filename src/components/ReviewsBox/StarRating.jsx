import styles from "./ReviewItem.module.css"
import sprite from "../images/sprite.svg"
import { nanoid } from "nanoid";

export const StarRating = ({rating}) => {
    const yellowStars = Array(rating).fill(0);
    const grayStars = Array(5 - rating).fill(0);
    return (
        <ul className={styles.stars_box}>
            {(yellowStars.length > 0) && yellowStars.map(star => (<li key={nanoid()}><svg width="16" height="16"><use href={sprite + "#icon-Star"} /></svg></li>))}
            {(grayStars.length > 0) && grayStars.map(star => (<li key={nanoid()}><svg width="16" height="16"><use href={sprite + "#icon-Star-gray"} /></svg></li>))}
        </ul>
    )
}