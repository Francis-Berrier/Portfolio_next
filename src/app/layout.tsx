import type { Metadata } from "next";
import '@/styles/globals.scss'
import Header from "@/components/Header";
import { LangProvider } from "@/context/LangContext";
import { getLangDataServe } from "@/utils/getDataServe";
import type { AllDatasType } from "@/types/AllDatasType";

export const metadata: Metadata = {
  title: "Francis Berrier, web developer",
  description: "Portfolio de présentation De Francis Berrier, développeur web full-stack junior",
};

export default async function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    const lang = 'fr';
    const datas: AllDatasType = await getLangDataServe({lang: lang, key:'all_datas'});


  return (
    <html lang="fr">
      <body>
        <LangProvider initialData={datas} initialLang={lang}>
          <Header/>
          <main>
            {children}
          </main>
        </LangProvider> 
      </body>
    </html>
  );
}
