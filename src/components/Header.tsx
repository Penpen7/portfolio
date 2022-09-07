import styles from '../styles/Header.module.css'
const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1>Uehara Naoki</h1>
      <ul>
        <li>Profile</li>
        <li>Work</li>
      </ul>
    </header>
  )
}
export default Header
