'use client'
import styles from './CodeCards.module.scss'
import { useLang } from '../../context/LangContext';
import type { Code } from '../../types/Code';
import CodeCard from '../CodeCard';

function CodeCards() {
    const { datas } = useLang();
    if(!datas) return null;
    const codes: Code[]= datas.code;
    if(!codes) return null;

    return (
        <ul className={styles.codeCards}>
            {codes.map(code => (
                <li key={code.id}>
                    <CodeCard code={code}/>
                </li>    
            ))}
        </ul>
    )
}

export default CodeCards;