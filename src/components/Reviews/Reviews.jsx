import { FormSubmit } from "../Form/FormSubmit";
import styles from "../Features/Features.module.css"
import { ReviewsBox } from "../ReviewsBox/ReviewsBox";

const Reviews = () => {
    return (
        <div className={styles.features_box}>
            <div>
                <ReviewsBox />
            </div>
            <FormSubmit />
        </div>
    )
}

export default Reviews;