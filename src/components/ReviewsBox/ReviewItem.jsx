import styles from "./ReviewItem.module.css"
import sprite from "../images/sprite.svg"

export const ReviewItem = ({ review }) => {
    return (<li className={styles.review_item}>
        <div className={styles.name_box}>
        <span className={styles.name_pict}>{review.reviewer_name[0]}</span>
            <p className={styles.name_item}>{review.reviewer_name}
                <span><svg width="16" height="16"><use href={sprite + "#icon-Star"} /></svg>
                    <svg width="16" height="16"><use href={sprite + "#icon-Star"} /></svg>
                    <svg width="16" height="16"><use href={sprite + "#icon-Star"} /></svg>
                    <svg width="16" height="16"><use href={sprite + "#icon-Star"} /></svg>
                    <svg width="16" height="16"><use href={sprite + "#icon-Star"} /></svg>
                </span></p>
        </div>
        <p className={styles.comment}>{review.comment}</p>
    </li>)
}