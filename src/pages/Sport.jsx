import { Navbar } from "../components/Navbar/Navbar"
import Styles from "./Nature.module.css";
import LazyImage from "../components/LazyImage/LazyImage";
import Pic31 from "./images/img31.jpg"
import Pic32 from "./images/img32.jpg"
import Pic33 from "./images/img33.jpg"
import Pic34 from "./images/img34.jpg"
import Pic35 from "./images/img35.jpg"
import Pic36 from "./images/img36.jpg"
import Pic37 from "./images/img37.jpg"
import Pic38 from "./images/img38.jpg"
import Pic39 from "./images/img39.jpg"
import Pic40 from "./images/img40.jpg"
import Pic41 from "./images/img41.jpg"
import Pic42 from "./images/img42.jpg"
import Pic43 from "./images/img43.jpg"
import Pic44 from "./images/img44.jpg"
import Pic45 from "./images/img45.jpg"


export const Sport = () => {
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
      <div className={Styles.Sport}></div>


      <div className={Styles.griddy}>
            <div><LazyImage src={Pic31} alt="Image 16" /></div>
            <div><LazyImage src={Pic32} alt="Image 17" /></div>
            <div><LazyImage src={Pic33} alt="Image 18" /></div>
            <div><LazyImage src={Pic34} alt="Image 19" /></div>
            <div><LazyImage src={Pic35} alt="Image 20" /></div>
            <div><LazyImage src={Pic36} alt="Image 21" /></div>
            <div><LazyImage src={Pic37} alt="Image 22" /></div>   
            <div><LazyImage src={Pic38} alt="Image 23" /></div>  
            <div><LazyImage src={Pic39} alt="Image 24" /></div>  
            <div><LazyImage src={Pic40} alt="Image 25" /></div>
            <div><LazyImage src={Pic41} alt="Image 26" /></div>  
            <div><LazyImage src={Pic42} alt="Image 27" /></div> 
            <div><LazyImage src={Pic43} alt="Image 28" /></div>  
            <div><LazyImage src={Pic44} alt="Image 29" /></div>  
            <div><LazyImage src={Pic45} alt="Image 30" /></div>  
    </div>
      <footer>
        <div className="border-t p-3 flex items-center justify-center bottom-0 w-full">
          Boladev &copy; 2024
        </div>
      </footer>
    </>
  )
}
