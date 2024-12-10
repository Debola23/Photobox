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
          <div className="border-b shadow lg:w-[540px] md:w-[400px] w-[320px] rounded-full lg:p-[3px] flex items-center justify-center">
              <span className="text-xl p-5 ml-20">
                <button type="submit">
                  <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor">
                      </path>
                    </svg>
                </button>
              </span>
              <label>
                <input type="search" className="lg:w-[580px] md:w-[400px] w-[272px] h-[30px] outline-none text-black search" required placeholder="Search photos."></input>
              </label>
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
