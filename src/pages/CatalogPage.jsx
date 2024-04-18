import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/operations";
import { selectData, selectError, selectIsLoading } from "../redux/selectors";
import { CamperCatalogCamp } from "../components/CamperCatalogCard/CamperCatalogCard";
import styles from "./CatalogPage.module.css";
import { SideBarSection } from "../components/SideBarSection/SideBarSection";

function CatalogPage() {
    const dispatch = useDispatch();
    const adverts = useSelector(selectData);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const [isLoad, setIsLoad] = useState(false);

    const handleLoadMoreClick = () => {
        setIsLoad(true);
    }

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    return (
        isLoading ? (<p>Loading....</p>) : 
            <div className={styles.main_container}>
                <SideBarSection />
                <section>
                    {adverts.length > 0 ? (
                        <>
                            <ul>{
                                isLoad ? adverts.map(advert => (<CamperCatalogCamp name={advert.name}
                        imgSrc={advert.gallery[0]}
                        price={advert.price}
                        rating={advert.rating}
                        reviewsLength={advert.reviews.length}
                        location={advert.location}
                        description={advert.description}
                        adults={advert.adults}
                        beds={advert.details.beds }
                        key={advert.id}>
                        </CamperCatalogCamp>)) :
                    adverts.slice(0, 4).map(advert => (<CamperCatalogCamp name={advert.name}
                        imgSrc={advert.gallery[0]}
                        price={advert.price}
                        rating={advert.rating}
                        reviewsLength={advert.reviews.length}
                        location={advert.location}
                        description={advert.description}
                        adults={advert.adults}
                        beds={advert.details.beds }
                        key={advert.id}>
                        </CamperCatalogCamp>))
                    }
                        </ul>
                        {!isLoad && (<button type="button" onClick={handleLoadMoreClick}>Load more</button>)}    
                            </>)
                        : (<p>There is no campers</p>)}
                </section>
            </div>
    )
};

export default CatalogPage;