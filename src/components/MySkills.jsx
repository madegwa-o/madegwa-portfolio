import styles from './Myskills.module.css'
import List from './List.jsx';
function Skills () {

    const frontend = ['HTML', 'CSS', 'Javascript', 'React'];
    const backend = ['SpringBoot','Nodejs', 'Laravel', 'Django'];
    const devops = ['Docker', 'Kubernetes', 'AWS'];
    const database = ['Postgres', 'MySQL', 'MongoDB'];

    return (
        <div className={styles.Skills}>
            <div className={styles.Lists}>
                <List className={styles.List} items={frontend} category="Frontend"/>
                <List className={styles.List} items={backend} category="Backend"/>
                <List className={styles.List} items={devops} category="DevOps"/>
                <List className={styles.List} items={database} category="Database"/>


            </div>
        </div>
    )
}


export default Skills;