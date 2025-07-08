import styles from './Formation.module.scss'
import Logo from '../Logo';
import type { FormationType } from '../../types/FormationType';
import FormationInfos from '../FormationInfos';
import Capacities from '../Capacities';

function Formation (
    {formationDatas}: {formationDatas: FormationType}
    ) {
        
    return (
        <article className= {styles.cardContainer}>
            <div className= {styles.entete}>
                <div className={styles.logo}>
                    <Logo logoUrl= {formationDatas.logoUrl}/>
                </div>
               
               <FormationInfos 
                    formationInfosDatas={formationDatas.formationInfo}
                />
            </div>
            <div className= {styles.text}>{formationDatas.description}</div>
            <Capacities capacities={formationDatas.capacities}/>
            
        </article>
    )

}

export default Formation