export type NavButton= {
    id: number;
    name: string;
    page: string;
};
export type AboutDatasType= {
    title: string;
    buttonCV: string;
    buttons: NavButton[]
};
export type ExperiencesCinemaDatasType= {
    buttonName: string;
    link: string;
    title: string;
    introText: string;
    textFilmo: string;
    urlFilmo: string;
};
export type ExperiencesCodeDatasType= {
    buttonName: string;
    link: string;
    title: string;
    introText: string;
};
export type ExpEachDatasType={
    title: string;
    text: string;
    link: string;
    buttonName: string;
};
export type ExperiencesDatasType= { 
    cinema: ExpEachDatasType;
    code: ExpEachDatasType;
};
export type BioInfosType= {
    photoUrl: string;
    name: string;
    age: string;
    occupation: string;
};
export type BioTextType= {
    bioTitle: string;
    bioContent: {
        paragraphe1: string;
        paragraphe2: string;
        paragraphe3: string;
    }
};
export type AboutBioType= {
    bioInfos: BioInfosType;
    bioText: BioTextType;
}