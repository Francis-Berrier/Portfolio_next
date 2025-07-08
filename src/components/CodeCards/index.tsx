'use client'
import styles from './CodeCards.module.scss'
import { getLangData } from '../../utils/getStoreDatas';
import { useLang } from '../../context/LangContext';
import { useEffect, useState } from 'react';
import type { Code } from '../../types/Code';
import CodeCard from '../CodeCard';

function CodeCards() {
    const { datas } = useLang();
    if(!datas) return null;
    const codes: Code[]= datas.code;
    if(!codes) return null;

    return (
        <div className={styles.codeCards}>
            {codes.map(code => (
                <CodeCard key={code.id} code={code} />
            ))}
        </div>
    )
}

export default CodeCards;