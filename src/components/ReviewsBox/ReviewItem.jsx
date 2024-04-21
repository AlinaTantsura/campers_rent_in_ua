import styles from "./ReviewItem.module.css"
import { StarRating } from "./StarRating"

export const ReviewItem = ({ review }) => {
    return (<li className={styles.review_item}>
        <div className={styles.name_box}>
            <span className={styles.name_pict}>{review.reviewer_name[0]}</span>
            <div>
            <p className={styles.name_item}>{review.reviewer_name}</p>
            < StarRating rating={review.reviewer_rating} />
            </div>
        </div>
        <p className={styles.comment}>{review.comment}</p>
    </li>)
}