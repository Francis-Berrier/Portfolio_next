import { AllDatasType } from "@/types/AllDatasType";
import { readFileSync } from 'fs';
import path from 'path';

export async function getLangDataServe({key, lang}: {key: string, lang: string}): Promise<AllDatasType> {
    
    const filePath = path.join(process.cwd(), 'public', 'translations', lang, `${key}.json`);
    const fileContent = readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);      
}