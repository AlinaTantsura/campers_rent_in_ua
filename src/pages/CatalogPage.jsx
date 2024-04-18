import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/operations";
import { selectData, selectError, selectIsLoading } from "../redux/selectors";
import sprite from "../sprite.svg";

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
                <svg width="18" height="20"><use href={sprite + "#icon-location"} /></svg>
                <input name='location' type="text" />
                <h3>Filters</h3>
                <h4>Vehicle equipment</h4>
                <div>
                    <button type="button"><svg width="32" height="32"><use href={sprite + "#icon-Vector"}  /></svg>AC</button>
                    <button type="button"><svg width="32" height="32"><use href={sprite + "#icon-Automatic"}  /></svg>Automatic</button>
                    <button type="button"><svg width="32" height="32"><use href={sprite + "#icon-Kitchen"}  /></svg>Kitchen</button>
                    <button type="button"><svg width="32" height="32"><use href={sprite + "#icon-Vertical-container-1"}  /></svg>TV</button>
                    <button type="button"><svg width="32" height="32"><use href={sprite + "#icon-Rating"}  /></svg>Shower/WC</button>
                </div>
                <h4>Vehicle type</h4>
                <div>
                    <button type="button"><svg width="40" height="28"><use href={sprite + "#icon-Button-2"}  /></svg>Van</button>
                    <button type="button"><svg width="40" height="28"><use href={sprite + "#icon-Button-1"}  /></svg>Fully Integrated</button>
                    <button type="button"><svg width="40" height="28"><use href={sprite + "#icon-camper"} /></svg>Alcove</button>
                </div>
                    <button type="button">Search</button>

                <ul>{
                    adverts.map(advert => (<li key={advert.id}>
                        <img src={advert.gallery[0]} alt={advert.name} />
                        <h2>{advert.name}</h2>
                        <p>€{advert.price}</p>
                        <svg width="24" height="24"><use href={sprite + "#icon-Property-1Default"} /></svg>
                        <svg width="16" height="16"><use href={sprite + "#icon-Star"} /></svg>
                        <p>{advert.rating}({advert.reviews.length} Reviews)</p>
                        <svg width="16" height="16"><use href={sprite + "#icon-location"} /></svg>
                        <p>{advert.location}</p>
                        <p>{advert.description}</p>
                        <div>
                            <button type="button"><svg width="20" height="20"><use href={sprite + "#icon-Users"} /></svg>{advert.adults} adults</button>
                            <button type="button"><svg width="20" height="20"><use href={sprite + "#icon-Automatic"} /></svg>Automatic</button>
                            <button type="button"><svg width="20" height="20"><use href={sprite + "#icon-Vertical-container"} /></svg>Petrol</button>
                            <button type="button"><svg width="20" height="20"><use href={sprite + "#icon-Kitchen"} /></svg>Kitchen</button>
                            <button type="button"><svg width="20" height="20"><use href={sprite + "#icon-Bed"} /></svg>{advert.details.beds } beds</button>
                            <button type="button"><svg width="20" height="20"><use href={sprite + "#icon-Vector"} /></svg>AC</button>
                        </div>
                        <button type="button">Show more</button>
                        </li>))
            }
                </ul>
                </div>
    )
};

export default CatalogPage;