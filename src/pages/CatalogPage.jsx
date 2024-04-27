import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/operations';
import { selectData, selectError, selectIsLoading } from '../redux/selectors';
import { CamperCatalogCamp } from '../components/CamperCatalogCard/CamperCatalogCard';
import styles from './CatalogPage.module.css';
import { SideBarSection } from '../components/SideBarSection/SideBarSection';
import { ModalWindow } from '../components/ModalWindow/ModalWindow';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import { Loader } from '../components/Loader';

function CatalogPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adverts = useSelector(selectData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [activeModal, setActiveModal] = useState(false);
  const [advertsItems, setAdvertsItems] = useState([]);
  const [page, setPage] = useState(1); 



  useEffect(() => {
    const FetchData = () => {
      dispatch(fetchData(page));
      if (error) Notify.failure(error);
    }
    FetchData()
    if (!activeModal) return;
    const handleEsc = e => {
      if (activeModal && e.key === 'Escape') {
        e.preventDefault();
        setActiveModal(false);
        navigate('/catalog');
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [dispatch, activeModal, navigate, error, page]);

  if (adverts.length !== 0 && advertsItems.length === 0) {
    setAdvertsItems([...adverts])
    if(page===1) setPage(2)
  }
  
  if (activeModal) {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    document.body.style.position = '';
    document.body.style.top = '';
  }
  const handleLoadMoreClick = () => {
    if (adverts.length > 0) {
      setPage(page + 1);
      if(page > 1) setAdvertsItems([...advertsItems ,...adverts])
    }
  };
  
  return (
    <main>
      {isLoading && !error ? (
        <div className={styles.loader_container}><Loader /></div>
      ) : (
        <div className={styles.main_container}>
          <SideBarSection />
          <section>
            {advertsItems.length > 0 ? (
              <>
                <ul className={styles.card_box}>
                  {advertsItems.map(advert => (
                        <CamperCatalogCamp
                          data={advert}
                          setActive={setActiveModal}
                          key={advert._id}
                        ></CamperCatalogCamp>
                      ))
                  }
                </ul>
                {adverts.length !== 0 && !error && (
                  <div className={styles.load_more_btn_box}>
                    <button
                      className={styles.load_more_button}
                      type="button"
                      onClick={handleLoadMoreClick}
                    >
                      Load more
                    </button>
                  </div>
                )}
              </>
            ) : (
              <p>There is no campers</p>
            )}

            {activeModal && (
              <ModalWindow active={activeModal} setActive={setActiveModal} />
            )}
          </section>
        </div>
      )}
    </main>
  );
}

export default CatalogPage;
