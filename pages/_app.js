import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
// import LanguageProvider from '../src/context/LanguageProvider'
import { createContext } from "react";
import useLanguages from "../src/hooks/useLanguages"

export const LanguageContext = createContext();

export default function App({ Component, pageProps }) {

  const {getLang} = useLanguages();

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(false);
  const [lenguage, setLanguage] = useState();

  useEffect(() => {
    let l = getLang('es')
    setLanguage(l)
  }, []);

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
