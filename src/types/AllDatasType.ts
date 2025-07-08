import { PageDataType } from "./PageDataType";
import { AbilityType } from "./AbilitiesType";
import { Code } from "./Code";
import { Film } from "./Film";
import { FormationType } from "./FormationType";

export type AllDatasType= {
    abilities: AbilityType[];
    code: Code[];
    datas: PageDataType;
    films: Film[];
    formation: FormationType[];
}
