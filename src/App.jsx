import { createBrowserRouter,Outlet } from 'react-router'
import Header from './Components/Header'
import './App.css'
import Home from './Components/Home'
import Services from './Components/Services'
import Cyber from './Components/Cyber'
import BIConsulting from './Components/BIConsulting'
import DotNetServices from './Components/DotNetServices'
import SalesforceServices from './Components/SalesforceServices'
import Java from './Components/Java'
import Aws from './Components/Aws'
import AI from './Components/AI'
import Carrers from './Components/Carrers'
import Contact from './Components/Contact'
import ScrollTop from './Components/ScrollTop'


function App() {
  

  return (
    <>
      <Header />
      <ScrollTop />
      <Outlet/>
      
        
    </>
  )
}

export default App

export const approuter=createBrowserRouter([
  {
    path:"",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/home",
        element:<Home />,
      },
       {
        path:"/services",
        element:<Services />,
      },{
        path:"/cyber",
        element:<Cyber />,
      },
      {
        path:"/bussiness",
        element:<BIConsulting />
      },
      {
        path:"/.net",
        element:<DotNetServices />
      },
      {
        path:"/salesforce",
        element:<SalesforceServices/>
      },
      {
        path:"/java",
        element:<Java/>
      },
      {
        path:"/aws",
        element:<Aws/>
      },
      {
        path:"/ai",
        element:<AI />
      },
      {
        path:"/carrers",
        element:<Carrers />
      },
      {
        path:"/contact",
        element:<Contact />
      }


    ]

  }
 
])
