'use client'
import styles from './AbilityCards.module.scss'
import type { AbilityType } from '../../types/AbilitiesType';
import { useLang } from '../../context/LangContext';
import AbilityCard from '../AbilityCard';

function AbilityCards() {
    const { datas } = useLang();
    if(!datas) return null;
    const abilities: AbilityType[]= datas.abilities;
    if(!abilities) return null;

    return (
        <section className={styles.container}>
            {abilities.map(ability => (
        <AbilityCard key={ability.id} ability={ability} />
      ))}
        </section>
    )
}

export default AbilityCards;