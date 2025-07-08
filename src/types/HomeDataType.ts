export type HomeDataType= {
    title: string;
    subtitle: string;
    introText: string;
    buttonContact: string;
    buttonGit: string;
    buttonCV: string;
}
export type SkillsPresentationCardType= {
    title: string;
    logoUrl: string;
    text: string;
}
export type SkillsPresentationDatas= {
    entete: string;
    title: string;
    cards : SkillsPresentationCardType[];
    linkButton: string;
}
export type ContactPresentationType= {
    entete: string;
    title: string;
    subtitle: string; 
    text: string;
    linkButton: string;
}