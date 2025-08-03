import { Link } from "react-router-dom";
import ThemeDropdown from "./ThemeDropdown";

const Header = () => {
  return (
     <header className="flex items-center justify-between p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <h1 className="text-xl font-bold w-3/5 ">🌈 ThemedApp</h1>
      <nav className="flex justify-between items-center gap-4 w-2/6 pr-4">
        <Link to="/" className="!mr-2">Home</Link>
        <Link to="/about" className="!mr-2" >About</Link>
        <Link to="/contact" className="!mr-2" >Contact</Link>
        <div className="!pr-2">
            <ThemeDropdown />
        </div>
        
      </nav>
    </header>
  )
}

export default Header