import styles from '../styles/Section.module.css'
import { Link } from 'react-router-dom'

export default function Section({title, tool, description, icon, section, link}){
    return(
        <>
            <div className={styles.container} id={section}>
                <div className={styles.content}>
                    <div className={styles.titleContainer} >
                        <img className={styles.titleIcon} src={icon}/>
                        <p className={styles.title}>{title}</p>
                    </div>

                    <div className={styles.toolContainer}>
                        {tool.map((option, index) => (
                            <Link to={link || "#"}>
                            <div key={index} className={styles.optionsContainer}>
                                <p className={styles.toolTitle}>{option}</p>
                                <p className={styles.toolDesc}>{description[index]}</p>
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}