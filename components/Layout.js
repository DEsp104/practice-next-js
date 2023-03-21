// Bring in the nav bar into the layout component so it can be on every page
import Nav from "./Nav";
// Bring in Header
import Header from "./Header"
import styles from '../styles/Layout.module.css';

const Layout = ({children}) => {
  return (
    // We need to keep this Layout component as a one single parent element
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {/* The page is output here thus bring the Header component here */}
          <Header />
          {children}
        </main>
      </div>
    </>
    
  )
}

export default Layout;