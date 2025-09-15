import Sidebar from "./components/sidebar";
import Homebg from "./components/homebg";
import Navbar from "./navbar";
import Main from "./main";
import Footer from "./footer";
function App() {
  return (
    <div className="webtemplate">
      <Navbar/>
      <Sidebar/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
