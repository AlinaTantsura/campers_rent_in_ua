import { useSelector } from "react-redux"
import { ReviewItem } from "./ReviewItem"
import { selectCurrent } from "../../redux/favorites/favoriteSelectors"
import { nanoid } from "nanoid";

export const ReviewsBox = () => {
    const { reviews } = useSelector(selectCurrent);
    return (
        reviews && (<ul>
            {reviews.map(review => (<ReviewItem key={nanoid()} review={review} />))}
        </ul>)
    )
}