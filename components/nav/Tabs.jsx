import React,{useContext} from 'react'
import Link from './NavLink'
import {useAtom} from 'jotai'
import MouseContext, {MouseStateJot} from '../cursor/MouseContext'


const Tabs = () => {
   const [type, setType] = useAtom(MouseStateJot)
   const MouseEnterNav = (e) => {
      setType("figure")
   }   
   const MouseLeaveNav = (e) => {
      setType("none")
   }   
   return(
      <div className="Tabs">
      <Link activeClassName="selected" href="/">
         <div className="link_container " onMouseEnter={MouseEnterNav} onMouseLeave={MouseLeaveNav}>
            <div className="icon_container">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
               <div className="link" >Home</div>
            </div>
      </Link>
      <Link activeClassName="selected" href="/about">
         <div className="link_container " onMouseEnter={MouseEnterNav} onMouseLeave={MouseLeaveNav}>
            <div className="icon_container">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
               <div className="link" >About</div>
            </div>
      </Link>
      <Link activeClassName="selected" href="/skill">
         <div className="link_container " onMouseEnter={MouseEnterNav} onMouseLeave={MouseLeaveNav}>
            <div className="icon_container">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> 
            </div>
               <div className="link" >skill</div>
            </div>
      </Link>
      <Link activeClassName="selected" href="/work">
         <div className="link_container " onMouseEnter={MouseEnterNav} onMouseLeave={MouseLeaveNav}>
            <div className="icon_container">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
               <div className="link" >work</div>
            </div>
      </Link>
      <Link activeClassName="selected" href="/contact">
         <div className="link_container " onMouseEnter={MouseEnterNav} onMouseLeave={MouseLeaveNav}>
            <div className="icon_container">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </div>
               <div className="link" >contact</div>
            </div>
      </Link>
      </div>

   )
}

export default Tabs
