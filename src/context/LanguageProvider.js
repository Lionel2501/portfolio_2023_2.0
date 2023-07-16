import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LanguageContext from "./LanguageContext";
import useLanguages from "../hooks/useLanguages";

const LanguageProvider = ({ children }) => {
    const {getLang} = useLanguages();
    const router = useRouter();

    let language = getLang(router.locale ?? 'es')
    const [t, setT] = useState(language);
    
    useEffect(() => {
        const value = localStorage.getItem('locale');
        
        if (value) {
            router.push(router.asPath, router.asPath, {
                locale: value,
            });
            setT(getLang(value))
        }
         
    }, [])


    return (
        <LanguageContext.Provider value={{t, setT}}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;