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
    }, [dispatch])

    return (
        isLoading ? (<p>Loading....</p>) : 
            <div>
            <label htmlFor="location">Location</label>
                <input name='location' type="text" />
                <h3>Filters</h3>
                <h4>Vehicle equipment</h4>
                <div>
                    <svg className="icon"><use className="icon" href="./symbol-defs.svg#icon-arcticons_freezer" /></svg>
                    <button type="button"><svg><use href="../symbol-defs.svg#icon-arcticons_freezer" /></svg>AC</button>
                    <button type="button"></button>
                    <button type="button"></button>
                    <button type="button"></button>
                    <button type="button"></button>
                </div>
                <h4>Vehicle type</h4>

                <ul>{
            adverts.map(advert => (<li key={advert.id}>{advert.name}</li>))
            }
                </ul>
                </div>
    )
};

export default CatalogPage;