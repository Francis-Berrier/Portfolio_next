import styles from './FormationsInfos.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FormationInfosType } from '../../types/FormationType';
import { faSchool, faLocationDot, faScroll, faCalendar } from "@fortawesome/free-solid-svg-icons";

function FormationInfos ({formationInfosDatas}: { formationInfosDatas: FormationInfosType}) {

   return(
    <div className= { styles.formationInfos}> 
        <div className= {styles.titre}>{formationInfosDatas.title}</div>
        <div className= {styles.infosContainer}>
            <div className= {styles.infoPair}>
                <div className= {styles.infos}>
                    <span className= {styles.icon}><FontAwesomeIcon icon={faSchool} /></span>
                    <span className= {styles.infoName}>{formationInfosDatas.school}</span>
                </div>
                <div className= {styles.infos}>
                <span className= {styles.icon}><FontAwesomeIcon icon={faLocationDot} /></span>
                    <span className= {styles.infoName}>{formationInfosDatas.location}</span>
                </div>
            </div>
           
            <div className= {styles.infoPair}>
                <div className= {styles.infos}>
                    <span className= {styles.icon}><FontAwesomeIcon icon={faCalendar} /></span>
                    <span className= {styles.infoName}>{formationInfosDatas.period}</span>
                </div>
                <div className= {styles.infos}>
                    <span className= {styles.icon}><FontAwesomeIcon icon={faScroll} /></span>
                    <span className= {styles.infoName}>{formationInfosDatas.graduation}</span>
                </div>   
            </div> 
        </div>
    </div>
   )

}

export default FormationInfos