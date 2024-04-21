import { useSelector } from 'react-redux'
import styles from '../HomeSection/HomeSection.module.css'
import { selectFavorites } from '../../redux/favorites/favoriteSelectors'
import { CamperCatalogCamp } from '../CamperCatalogCard/CamperCatalogCard';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FavoriteSection = () => {
    const navigate = useNavigate();
    const favorites = useSelector(selectFavorites);
    const [activeModal, setActiveModal] = useState(false);

    useEffect(() => {
        if (!activeModal) return
        const handleEsc = (e) => {
            if (activeModal && e.key === "Escape") {
                e.preventDefault();
                setActiveModal(false);
                navigate("/favorites");
            }
        }
        document.addEventListener('keydown', handleEsc);
        return (() => {
            document.removeEventListener('keydown', handleEsc);
        });

    }, [activeModal, navigate])

    return (
        <section className={styles.section_box}>
            { (favorites && favorites.length > 0) ? (
                <ul>
                    {favorites.map(fav => (<CamperCatalogCamp data={fav} setActive={setActiveModal} key={fav._id}/>))}
                </ul>
            ) : (<p>There will be your favorites</p>)} 
            {activeModal && <ModalWindow active={activeModal} setActive={setActiveModal} pathname={"/favorites"} />}
        </section>
    )
}