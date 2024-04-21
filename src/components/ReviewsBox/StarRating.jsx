import styles from "./ReviewItem.module.css"
import sprite from "../images/sprite.svg"

export const StarRating = ({rating=5}) => {
    const yellowStars = Array(rating).fill(0);
    const grayStars = Array(5 - rating).fill(0);
    return (
        <ul className={styles.stars_box}>
            {(yellowStars.length > 0) && yellowStars.map(star => (<li><svg width="16" height="16"><use href={sprite + "#icon-Star"} /></svg></li>))}
            {(grayStars.length > 0) && grayStars.map(star => (<li><svg width="16" height="16"><use href={sprite + "#icon-Star-gray"} /></svg></li>))}
        </ul>
    )
}