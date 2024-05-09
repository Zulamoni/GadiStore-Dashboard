
import "./App.css"
// import Button1 from "./Components/Button"
// import SideButton from "./Components/SideButton"
import Sidebar from "./Components/Sidebar"
import Card from "./Components/Card"
import TopCountries from "./Components/Top Countries"
import RecentOrder from "./Components/Recent Order"
import SalesReport from "./Components/Sales Report"
import TopNavigation from "./Components/Top Navigation"
import Dashboard from "./Components/Dashboard"

function App( ) {
  return (
    <>
     <div>
      <div className="Sidebar"><Sidebar /> </div>
      <div className="TopNavigation"><TopNavigation/> </div>
      <div className="Card"> <Card/> </div>
      <div className="SalesReport"><SalesReport/> </div>
      <div className="TopCountries"><TopCountries/></div>
      <div className="RecentOrder"> <RecentOrder/></div>
      <div className="Content"> <Dashboard/></div>

     </div>
    </>
  )
}

export default App
