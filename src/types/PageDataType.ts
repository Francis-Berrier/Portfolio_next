import type { AboutDatasType, ExperiencesCinemaDatasType, ExperiencesDatasType, AboutBioType, ExperiencesCodeDatasType } from "./AboutTypes";
import type { HeaderDataType } from "./HeaderDataType";
import type { HomeDataType, SkillsPresentationDatas, ContactPresentationType} from "./HomeDataType";
import type { ContactDatasType } from "./ContactType";
import type { FilmCardDataType } from "./Film";

export type PageDataType= {
    home: HomeDataType;
    homeSkills: SkillsPresentationDatas;
    homeContact: ContactPresentationType;
    header: HeaderDataType;
    aboutNav: AboutDatasType;
    aboutBio: AboutBioType;
    aboutExperience: ExperiencesDatasType;
    aboutExperienceCinema: ExperiencesCinemaDatasType;
    aboutExperienceCode: ExperiencesCodeDatasType;
    aboutFormation: string;
    filmCardData: FilmCardDataType;
    contact: ContactDatasType;
}