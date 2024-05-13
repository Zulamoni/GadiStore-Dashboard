import Dashimage from '../images/menu.png'
import Productimage from '../images/box.png'
import Orderimage from '../images/receipt-text.png'
import Customerimage from '../images/people.png'
import Transactionimage from '../images/receipt-2.png'
import Marketingimage from '../images/presention-chart.png'
import Reportimage from '../images/notification-circle.png'
import Settingimage from '../images/setting-2.png'
import Helpcenterimage from '../images/message-question.png'
import Logoutimage from '../images/logout.png'
function Sidebar() {
    return (
        <>
            <div id="viewport">
                <div id="sidebar">
                    <ul className="nav">
                        <h1 className='GadiStore'>GadiStore</h1>

                    <li>
                        <a href="#" className="selected" > <img src={Dashimage} alt="" />Dashboard</a>
                        
                    </li>

                        <li>
                            <a href="#" className="selected" > <img src={Productimage} alt=""/>Products</a>
                        </li>
                        <li>
                            <a href="#" className="selected" > <img src={Orderimage} alt=""/>Orders</a>
                        </li>
                        <li>
                            <a href="#"className="selected" > <img src={Customerimage} alt=""/>Customers</a>
                        </li>
                        <li>
                            <a href="#"className="selected" > <img src={Transactionimage} alt=""/>Transactions</a>
                        </li>
                        <li>
                            <a href="#"className="selected" > <img src={Marketingimage} alt=""/>Marketing</a>
                        </li>
                        <li>
                            <a href="#"className="selected" > <img src={Reportimage} alt=""/>Reports </a>
                        </li>
                        <li>
                            <a href="#"className="selected" > <img src={Settingimage} alt=""/>Settings</a>
                        </li>
                        <li>
                            <a href="#"className="selected" > <img src={Helpcenterimage} alt=""/>Help Center</a>
                        </li>
                        <li>
                            <a href="#"className="selected" > <img src={Logoutimage} alt=""/>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>     
        </>
    )
}
export default Sidebar;
