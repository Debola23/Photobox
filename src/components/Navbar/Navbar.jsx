import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav className="flex item-center justify-center mt-40 gap-5  [@media(max-width:1021px)]:mt-[14rem]" >
        <a href="" className="link hover:bg-sky-400 hover:text-white rounded-md transition-all"><Link to="/nature">Nature</Link></a>
        <a href="" className="link hover:bg-sky-400 hover:text-white rounded-md transition-all"><Link to="/architeture">Architeture</Link></a>
        <a href="" className="link hover:bg-sky-400 hover:text-white rounded-md transition-all"><Link to="/sport">Sport</Link></a>
    </nav>
  )
}



