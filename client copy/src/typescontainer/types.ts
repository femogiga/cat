interface IWeight {
    imperial: string
    metric: string
}

interface IImage {
    id: string
    width: number
    height: number
    url: string
}
interface CatType {
    adaptability: number
    affection_level: number
    alt_names: string
    cfa_url: string
    child_friendly: number
    country_code: string
    country_codes: string
    description: string
    dog_friendly: number
    energy_level: number
    experimental: number
    grooming: number
    hairless: number
    id: string
    image: IImage
    indoor: number
    intelligence: number
    lap: number
    life_span: string
    name: string
    natural: number
    origin: string
    rare: number
    reference_image_id: string
    rex: number
    shedding_level: number
    short_legs: number
    social_needs: number
    stranger_friendly: number
    suppressed_tail: number
    temperament: string
    vcahospitals_url: string
    vetstreet_url: string
    vocalisation: number
    weight: IWeight
    wikipedia_url: string
}
export type PhotoType = {
    id: string
    url: string
    width: number
    height: number
    breeds: IImage[]
}
export type CatContextType = {
    data: CatType[]
    setData: (data: CatType[]) => void
}


export type PhotoContextType = {
    photos: PhotoType[]
     photoId:string
    setPhotos: (photos: PhotoType[]) => void
     setPhotoId:(id:string)=>void
}
