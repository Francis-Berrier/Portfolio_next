'use client'
import styles from './FilmMini.module.scss'
import type { Film } from '../../types/Film';
import { useState } from 'react';
import Modal from 'react-modal';
import FilmCard from '../FilmCard';

function FilmMini ({film}: {film: Film}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div>
            <article 
                className= {styles.cardContainer} 
                onClick={openModal}
                aria-haspopup="dialog"
                aria-expanded={modalIsOpen}
                aria-label={`Open details about the film ${film.title}`}
            >
                <button>
                    <span className={styles.overHover}></span>
                    <div className= {styles.imgFilm}>   
                        <img src= {film.imgFilmUrl} alt={`Affiche de ${film.title}`}/>
                    </div>
                    <div className= {styles.infos}>
                        <div className= {styles.title}>{film.title}</div>
                    </div>
                </button>
                
            </article>
            <Modal
                isOpen= {modalIsOpen}
                onRequestClose= {closeModal}
                contentLabel={`Details about ${film.title}`}
                className={styles.modal}
                overlayClassName={styles.overlay}
                ariaHideApp={false}
            >
                <div onClick={closeModal}>
                    <FilmCard film={film}/>
                </div>
            </Modal>
        </div>
        
    )

}

export default FilmMini;