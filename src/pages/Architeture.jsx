import { Navbar } from "../components/Navbar/Navbar"
import Styles from "./Architeture.module.css";
import LazyImage from "../components/LazyImage/LazyImage";
import Pic1 from "./images/img1.jpg"
import Pic2 from "./images/img2.jpg"
import Pic3 from "./images/img3.jpg"
import Pic4 from "./images/img4.jpg"
import Pic5 from "./images/img5.jpg"
import Pic6 from "./images/img6.jpg"
import Pic7 from "./images/img7.jpg"
import Pic8 from "./images/img8.jpg"
import Pic9 from "./images/img9.jpg"
import Pic10 from "./images/img10.jpg"
import Pic11 from "./images/img11.jpg"
import Pic12 from "./images/img12.jpg"
import Pic13 from "./images/img13.jpg"
import Pic14 from "./images/img14.jpg"
import Pic15 from "./images/img15.jpg"



export const Architeture = () => {
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
      <div className={Styles.Architeture}>
      </div>
      <div className={Styles.griddy}>
            <div><LazyImage src={Pic1} alt="Image 1" /></div>
            <div><LazyImage src={Pic2} alt="Image 2" /></div>
            <div><LazyImage src={Pic3} alt="Image 3" /></div>
            <div><LazyImage src={Pic4} alt="Image 4" /></div>
            <div><LazyImage src={Pic5} alt="Image 5" /></div>
            <div><LazyImage src={Pic6} alt="Image 6" /></div>
            <div><LazyImage src={Pic7} alt="Image 7" /></div>   
            <div><LazyImage src={Pic8} alt="Image 8" /></div>  
            <div><LazyImage src={Pic9} alt="Image 9" /></div>  
            <div><LazyImage src={Pic10} alt="Image 10" /></div>
            <div><LazyImage src={Pic11} alt="Image 11" /></div>  
            <div><LazyImage src={Pic12} alt="Image 12" /></div> 
            <div><LazyImage src={Pic13} alt="Image 13" /></div>  
            <div><LazyImage src={Pic14} alt="Image 14" /></div>  
            <div><LazyImage src={Pic15} alt="Image 15" /></div>  
    </div>
      <footer>
        <div className="border-t p-3 flex items-center justify-center bottom-0 w-full">
          Boladev &copy; 2024
        </div>
      </footer>
    </>
  )
}
