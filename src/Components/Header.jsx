import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo1 from "../logo2.png";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hover,setHover]=useState(false)
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

 

  return (
   <div className='fixed top-0 left-0 w-full z-50 bg-gray-900  shadow-md flex items-center justify-between h-16 px-4 md:px-8'>
      <div className='flex'>
        <Link to="/">
          <img className='w-86  md:w-92' src={logo1} alt='Intelli Tek' />
        </Link>
        <Link to="/">
        <h1 className=' mt-12 md:mt-16 p-0 sm:hidden text-xs  text-white   font-semibold  md:text-xl md:font-bold'>Intelli Tek IT Solutions</h1>
        </Link>
      </div>

      {/* Menu Toggle Button */}
      <div className='md:hidden z-50'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className='m-1 text-white' size={40} /> : <Menu className='text-white m-auto' size={40} />}
        </button>
      </div>
      <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex z-40 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
      <ul className='flex flex-col md:flex-row md:items-center md:space-x-6  p-4 md:p-14 text-white text-sm font-calibri font-semibold'>
        <li key={1} onClick={()=>setIsOpen(false)}  className={`py-2 px-4 hover:text-black hover:bg-sky-400 rounded-md transition  }` } ><Link to="/home">Home</Link></li>
        <li
  key={2}
  
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  //onClick={() => setHover((prev) => !prev)}
 
  className="py-2 px-4  hover:text-black hover:bg-sky-400  rounded-md md:transition"
>
  <Link to="/services">Services <span className='ml-2 text-sm'>▼</span></Link>
  {hover && (
    <ul  className="mt-2 bg-gray-900 md:shadow-md rounded-md p-2 relative md:absolute z-10">
      <li onClick={()=>setIsOpen(false)} className="py-1 px-2 rounded-md hover:text-black hover:bg-sky-400  text-white"><Link to="/cyber">►   Cybersecurity Services </Link> </li>
      <li onClick={()=>setIsOpen(false)} className="py-1 px-2 rounded-md hover:text-black hover:bg-sky-400  text-white "> <Link to="/bussiness">►    Business Intelligence (BI)</Link> </li>
       <li onClick={()=>setIsOpen(false)} className="py-1 px-2 rounded-md hover:text-black hover:bg-sky-400  text-white "><Link to="/.net">►   .NET Development</Link> </li>
        <li onClick={()=>setIsOpen(false)} className="py-1 px-2 rounded-md hover:text-black hover:bg-sky-400  text-white "><Link to="/salesforce">►    Salesforce Consulting </Link></li>
         <li onClick={()=>setIsOpen(false)} className="py-1 px-2 rounded-md hover:text-black hover:bg-sky-400  text-white "><Link to="/java">►   Java Development</Link></li>
          <li onClick={()=>setIsOpen(false)} className="py-1 px-2 rounded-md hover:text-black hover:bg-sky-400  text-white "> <Link to="/aws">►    AWS Consulting</Link></li>
           <li onClick={()=>setIsOpen(false)} className="py-1 px-2 rounded-md hover:text-black hover:bg-sky-400  text-white "><Link to="/ai">►    AI Consulting</Link></li>
    </ul>
  )}
</li>

        <li key={3} onClick={()=>setIsOpen(false)} className='py-2 px-4  hover:text-black hover:bg-sky-400  rounded-md transition'><Link to={"/carrers"}>Careers</Link></li>
        <li key={4} onClick={()=>setIsOpen(false)} className='py-2 px-4  hover:text-black hover:bg-sky-400  rounded-md transition'><Link to={"/contact"}>Contact Us</Link></li>
</ul>

      </div>
    </div>
  );
}