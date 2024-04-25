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
  const [isLoad, setIsLoad] = useState(false);
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
    if (error) Notify.failure(error);
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
  }, [dispatch, activeModal, navigate, error]);

  if (activeModal) {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    document.body.style.position = '';
    document.body.style.top = '';
  }

  const handleLoadMoreClick = () => {
    setIsLoad(true);
  };
  return (
    <main>
      {isLoading && !error ? (
        <div className={styles.loader_container}><Loader /></div>
      ) : (
        <div className={styles.main_container}>
          <SideBarSection />
          <section>
            {adverts.length > 0 ? (
              <>
                <ul className={styles.card_box}>
                  {isLoad
                    ? adverts.map(advert => (
                        <CamperCatalogCamp
                          data={advert}
                          setActive={setActiveModal}
                          key={advert._id}
                        ></CamperCatalogCamp>
                      ))
                    : adverts
                        .slice(0, 4)
                        .map(advert => (
                          <CamperCatalogCamp
                            data={advert}
                            setActive={setActiveModal}
                            key={advert._id}
                          ></CamperCatalogCamp>
                        ))}
                </ul>
                {!isLoad && !error && adverts.length > 4 && (
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
