'use client'

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { getLangData } from "@/utils/getStoreDatas";
import { AllDatasType } from "@/types/AllDatasType";

type Lang=  "fr" | "en";

type LangContextType= {
    lang: Lang;
    setLang: (newLang: Lang) => void;
    datas: AllDatasType | null;
};

const LangContext= createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({
  initialLang = 'fr',
  initialData,
  children,
}: {
  initialLang: Lang;
  initialData: AllDatasType;
  children: ReactNode;
})  => {
    const [lang, setLang] = useState<Lang>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('lang');
            if (stored === 'fr' || stored === 'en') return stored;
        }
        return initialLang;
    });
    const [datas, setDatas] = useState<AllDatasType>(initialData);

    useEffect(()=> {

        async function loadDatas() {
        const newData: AllDatasType= await getLangData({ lang, key: 'all_datas' });
        setDatas(newData);
        }

        loadDatas();
    }, [lang]);

    return (
        <LangContext.Provider value={{lang, setLang, datas}}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => {
    const context= useContext(LangContext);
    if(!context) throw new Error("useLang must be used within a LangProvider")
    return context;
}