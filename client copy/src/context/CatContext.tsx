import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { CatContextType, CatType } from '../typescontainer/types';

type CatProviderProps = {
  children?: React.ReactNode;
};
export const CatContext = createContext<CatContextType | null>(null);

const CatProvider = ({ children }: CatProviderProps) => {
  const [data, setData] = useState<CatType[]>([]);
const apikey =
    'live_iMUqJb7gjlT4vDMVIcb6qmUevcFeh246fAHXU0ijTVLgaXk1l4Eas68c9jsoaDhL';
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.thecatapi.com/v1/breeds?api_key=${apikey}`
      );
      const result = await response.json();
      setData(result);

      return result;
    };

    fetchData();

  }, []);
  console.log(data);
  return (
    <CatContext.Provider value={{ data, setData }}>
      {children}
    </CatContext.Provider>
  );
};

export default CatProvider;
