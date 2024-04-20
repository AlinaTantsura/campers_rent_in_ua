import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/operations";
import { selectData, selectError, selectIsLoading } from "../redux/selectors";
import { CamperCatalogCamp } from "../components/CamperCatalogCard/CamperCatalogCard";
import styles from "./CatalogPage.module.css";
import { SideBarSection } from "../components/SideBarSection/SideBarSection";
import { ModalWindow } from "../components/ModalWindow/ModalWindow";

function CatalogPage() {
    const dispatch = useDispatch();
    const adverts = useSelector(selectData);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const [isLoad, setIsLoad] = useState(false);
    const [activeModal, setActiveModal] = useState(false);
    const [advertId, setAdvertId] = useState('');

    useEffect(() => {

        dispatch(fetchData());
        
        if (!activeModal) return
        const handleEsc = (e) => {
            if (activeModal && e.key === "Escape") {
                e.preventDefault();
                setActiveModal(false);
            }
        }
        document.addEventListener('keydown', handleEsc);
        return (() => {
            document.removeEventListener('keydown', handleEsc);
        });

    }, [dispatch, activeModal])

    const handleLoadMoreClick = () => {
        setIsLoad(true);
    }
    return (
        isLoading ? (<p>Loading....</p>) : 
            <div className={styles.main_container}>
                <SideBarSection />
                <section>
                    {adverts.length > 0 ? (
                        <>
                            <ul className={styles.card_box}>{
                                isLoad ? adverts.map(advert => (<CamperCatalogCamp data={advert}
                        setActive={setActiveModal}
                        setAdvertId={setAdvertId}>
                        </CamperCatalogCamp>)) :
                    adverts.slice(0, 4).map(advert => (<CamperCatalogCamp data={advert}
                        setActive={setActiveModal}
                        setAdvertId={setAdvertId}>
                        </CamperCatalogCamp>))
                    }
                        </ul>    
                        {!isLoad && (<div className={styles.load_more_btn_box}><button className={styles.load_more_button} type="button" onClick={handleLoadMoreClick}>Load more</button></div>)}    
                            </>)
                        : (<p>There is no campers</p>)}
                    {activeModal && <ModalWindow active={activeModal} setActive={setActiveModal} data={adverts.find(item => item._id === advertId)} />}
                </section>
            </div>
    )
};

export default CatalogPage;