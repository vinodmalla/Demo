import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo1 from "../logo2.png";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
   <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between h-16 px-4 md:px-8'>
      <div className='flex'>
        <Link to="/">
          <img className='w-46 md:w-64' src={logo1} alt='Intelli Tek' />
        </Link>
        <h1 className=' mt-10 md:mt-14 p-0  text-sm text-black font-semibold  md:text-2xl md:font-bold'>Intelli Tek IT Solutions</h1>
      </div>

      {/* Menu Toggle Button */}
      <div className='md:hidden z-50'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className='m-1 text-black' size={40} /> : <Menu className='text-black m-auto' size={40} />}
        </button>
      </div>
      <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex z-40 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
      <ul className='flex flex-col md:flex-row md:items-center md:space-x-6  p-4 md:p-14 text-black text-xl font-calibri font-semibold'>
        <li key={1} onClick={()=>setIsOpen(false)}  className={`py-2 px-4 hover:text-white hover:bg-black rounded-md transition  }` } ><Link to="/home">Home</Link></li>
        <li key={2} onClick={()=>setIsOpen(false)} className={`py-2 px-4 hover:text-white hover:bg-black rounded-md transition }` }><Link to="/services">Services</Link></li>
        <li key={3} onClick={()=>setIsOpen(false)} className='py-2 px-4 hover:text-white hover:bg-black rounded-md transition'><Link to={"/carrers"}>Careers</Link></li>
        <li key={4} onClick={()=>setIsOpen(false)} className='py-2 px-4 hover:text-white hover:bg-black rounded-md transition'><Link to={"/contact"}>Contact Us</Link></li>
</ul>

      </div>
    </div>
  );
}