import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
  return (
    <div className="settings">
        <div className="settingWrapper"></div>
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        
        <Sidebar/>
    </div>
  )
}
