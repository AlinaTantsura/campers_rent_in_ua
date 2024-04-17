import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/operations";
import { selectData, selectError, selectIsLoading } from "../redux/selectors";

function CatalogPage() {
    const dispatch = useDispatch();
    const adverts = useSelector(selectData);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchData());
    })

    return (
        isLoading ? (<p>Loading....</p>) : <ul>{
            adverts.map(advert => (<li key={advert.id}>{advert.name}</li>))}
            </ul>
    )
};

export default CatalogPage;