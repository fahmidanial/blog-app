import "./topbar.css"
import turtle5 from '../assets/turtle5.jpg';

export default function TopBar() {
  return (
    <div className = "top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-github"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>   
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
          <img
              className="topImg" 
              src={turtle5}
              alt="turtle5"
          />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        
        </div>
    </div>
  )
}
