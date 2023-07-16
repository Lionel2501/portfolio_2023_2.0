import es from "../../public/static/language/es";
import en from "../../public/static/language/en";
import fr from "../../public/static/language/fr";

const useLanguages = () => {
    const map = {
        es: es,
        en: en,
        fr: fr,
    }

    const getLang = (value) => {
        return map[value];
    }

  return {getLang};
  
}

export default useLanguages;