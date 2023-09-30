import "./sidebar.css";
import turtle3 from '../../assets/turtle3.jpg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={turtle3}
          alt="turtle3"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">games ads</li>
          <li className="sidebarListItem">sym ebonus 110</li>
          <li className="sidebarListItem">home server</li>
          <li className="sidebarListItem">pixel art</li>
          <li className="sidebarListItem">react native</li>
          <li className="sidebarListItem">unity</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-github"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>   
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        </div>
      </div>

    </div>
  );
}
