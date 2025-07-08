'use client'
import styles from './FormationCards.module.scss';
import { useLang } from '../../context/LangContext';
import type { FormationType } from '../../types/FormationType';
import Formation from '../Formation';

function FormationCards() {
    const { datas } = useLang();
    if(!datas) return null;
    const formations: FormationType[]= datas.formation;
    if(!formations) return null;

    return (
         <div className={styles.formationCards}>
             {formations.sort((a,b) => b.id - a.id).map(formation => (
        <Formation key={formation.id} formationDatas={formation} />
      ))}
        </div>
    )
   
}

export default FormationCards;