import AboutNav from "@/components/AboutNav";
import styles from './AboutLayout.module.scss'

function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.aboutContainer}>
            <aside className={styles.aboutNav}>
                <AboutNav/> 
            </aside>
            <main className={styles.aboutMain}>
                { children }
            </main>
        </div>
    )
}

export default AboutLayout;