import Styles from "./Gallery.module.css";
import LazyImage from "../LazyImage/LazyImage";
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
 

export const Gallery = () => {

  return (
    <>
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
    </>
  )
}
