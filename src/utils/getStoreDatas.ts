import { config } from "../assets/config";


export function storeDataWithExpiry <T>({key, data}: {key: string, data: T }): void {
    const cacheDuration = config.CACHE_DURATION;
    const expiry= Date.now() + cacheDuration;
    const dataWithExpiry = { data, expiry };
    localStorage.setItem( key, JSON.stringify(dataWithExpiry));
}

export function getDataWithExpiry <T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (!item) return null;

    const parsed = JSON.parse(item);
    if (!parsed || typeof parsed !== 'object' || !('data' in parsed) || !('expiry' in parsed)) {
        localStorage.removeItem(key);
        return null; 
    }
    const { data, expiry } = parsed;
    if (Date.now() > expiry) {
        localStorage.removeItem(key);
        return null; 
    }
    return data as T;
}

export async function getLangData<T>({key, lang}: {key: string, lang: string}): Promise<T> {
    
        const langKey= `${lang}${key}`;

        if( typeof window !=='undefined'){
            const storedDatas: T | null= getDataWithExpiry(langKey);
            if(storedDatas !== null) return storedDatas;
        }
        const response= await fetch(`/translations/${lang}/${key}.json`);
        const newDatas: T = await response.json();
        if( typeof window !=='undefined'){
            storeDataWithExpiry({key: langKey, data: newDatas});
        }
        return newDatas;
}
