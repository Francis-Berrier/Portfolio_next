export type FormationInfosType= {
    title: string,
    school: string, 
    period: string, 
    graduation: string, 
    location: string 
}
export type FormationType= {
    id: number,
    logoUrl: string,
    formationInfo: FormationInfosType,
    capacities: string[],
    description: string

}