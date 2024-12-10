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
