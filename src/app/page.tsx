import styles from './page.module.scss'
import Landing from '@/components/Landing'
import SkillsPresentation from '@/components/SkillsPresentation'
import ContactPresentation from '@/components/ContactPresentation'

function Home() {

    return (
        <div className={styles.homeContainer}>
            <Landing/>
            <SkillsPresentation/>
            <ContactPresentation/>
        </div>

    )
}
export default Home