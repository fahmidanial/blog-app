import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write"

function App() {
  return (
    <>
      <TopBar />
      <Login />
      <Settings />
      <Single />
      <Write />
    </>
  );
}

export default App;
