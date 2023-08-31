import { createContext, useEffect, useState } from 'react';
import {fetchData} from '../../utility/apiService.ts';
import { PhotoContextType, PhotoType } from '../typescontainer/types.ts';

type PhotoProviderProps = {
  children?: React.ReactNode;
};

export const PhotoContext = createContext<PhotoContextType | null>(null);

const PhotoProvider = ({ children }: PhotoProviderProps) => {
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [photoId, setPhotoId] = useState<string>('beng');
    useEffect(() => {
      const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${photoId}&api_key=`;
      console.log('url =+=>',url)
      const result = fetchData(url, setPhotos);
    },[photoId]);
  console.log('url =+=>', photoId);
  console.log('result===>', photos);
  //
  return (
    <PhotoContext.Provider value={{ photos, setPhotos, photoId, setPhotoId }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
