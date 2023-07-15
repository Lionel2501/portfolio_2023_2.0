import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
// import LanguageProvider from '../src/context/LanguageProvider'
import { createContext } from "react";

export const LanguageContext = createContext();

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(false);
  const [lenguage, setLanguage] = useState('es');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setTimeout(() => {
      setContent(true);
    }, 1000);
  }, []);

  return (
    <LanguageContext.Provider value={[lenguage, setLanguage]}>
      <Fragment>
        {loading && <Preloader />}
        {content && <Component {...pageProps} />}
      </Fragment>
    </LanguageContext.Provider>
  );
}
