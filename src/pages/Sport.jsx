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
