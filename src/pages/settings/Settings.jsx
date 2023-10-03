import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import pxl from '../../assets/pxl.png';


export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">  
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img 
                src={pxl} 
                alt="pxl"
              />
              <label htmlFor="fileInput">
                <i class="settingsPPIcon fa-solid fa-users"></i>  
              </label>
              <input type="file" id="fileInput" style={{display: "none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="fahmidanial9091@gmail.com"/>
            <label>Email</label>
            <input type="text" placeholder="fahmidanial9091@gmail.com"/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
