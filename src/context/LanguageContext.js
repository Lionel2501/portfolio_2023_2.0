import { createContext } from 'react';

const LanguageContext = createContext({
  lenguage: null, 
  setLenguage: () => {},
}
); 

export default LanguageContext;