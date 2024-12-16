import { Navbar } from "../components/Navbar/Navbar"
import Styles from "./Nature.module.css";
import LazyImage from "../components/LazyImage/LazyImage";
import Pic16 from "./images/img16.jpg"
import Pic17 from "./images/img17.jpg"
import Pic18 from "./images/img18.jpg"
import Pic19 from "./images/img19.jpg"
import Pic20 from "./images/img20.jpg"
import Pic21 from "./images/img21.jpg"
import Pic22 from "./images/img22.jpg"
import Pic23 from "./images/img23.jpg"
import Pic24 from "./images/img24.jpg"
import Pic25 from "./images/img25.jpg"
import Pic26 from "./images/img26.jpg"
import Pic27 from "./images/img27.jpg"
import Pic28 from "./images/img28.jpg"
import Pic29 from "./images/img29.jpg"
import Pic30 from "./images/img30.jpg"


export const Nature = () => {
  return (
    <>
      <div className="lg:flex grid gap-5 justify-between items-center p-5 top-0 w-full mx-auto fixed bg-white drop-shadow">
        <div className="lg:text-3xl text-2xl cursor-pointer logo">
          <a href="/">
            <img src="./images/photologo.png" alt="" className={Styles.logo1} />
          </a>
        </div>
        <form action="" method="get">
              <div className={Styles.searchContainer}>
                <input type="search" className={Styles.searchInput} placeholder="Search photos..."/>
                    <button className={Styles.searchButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={Styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                          <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                </div>
        </form>
      </div>
      <Navbar/>
      <div className={Styles.Nature}></div>
      <div className={Styles.griddy}>
            <div><LazyImage src={Pic16} alt="Image 16" /></div>
            <div><LazyImage src={Pic17} alt="Image 17" /></div>
            <div><LazyImage src={Pic18} alt="Image 18" /></div>
            <div><LazyImage src={Pic19} alt="Image 19" /></div>
            <div><LazyImage src={Pic20} alt="Image 20" /></div>
            <div><LazyImage src={Pic21} alt="Image 21" /></div>
            <div><LazyImage src={Pic22} alt="Image 22" /></div>   
            <div><LazyImage src={Pic23} alt="Image 23" /></div>  
            <div><LazyImage src={Pic24} alt="Image 24" /></div>  
            <div><LazyImage src={Pic25} alt="Image 25" /></div>
            <div><LazyImage src={Pic26} alt="Image 26" /></div>  
            <div><LazyImage src={Pic27} alt="Image 27" /></div> 
            <div><LazyImage src={Pic28} alt="Image 28" /></div>  
            <div><LazyImage src={Pic29} alt="Image 29" /></div>  
            <div><LazyImage src={Pic30} alt="Image 30" /></div>  
    </div>
      <footer>
        <div className="border-t p-3 flex items-center justify-center bottom-0 w-full">
          Boladev &copy; 2024
        </div>
      </footer>
    </>
  )
}
