import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
import { RiTimerFill, RiCoupon3Fill } from "react-icons/ri";
import { FaChartBar, FaChartPie, FaChartLine, FaGamepad } from "react-icons/fa"; 

const AdminContainer = () => {
    const location = useLocation();  
    return (
        <aside>
            <h2>Logo.</h2>
            <div>
                <h5>DASHBOARD</h5>
                <ul>
                    {/* Dashboard */}
                    <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} />
                    {/* Products */}
                    <Li url="/admin/products" text="Products" Icon={RiShoppingBag3Fill} location={location} />
                    {/* Customer */}
                    <Li url="/admin/customers" text="Customer" Icon={IoIosPeople} location={location} />
                    {/* Transaction */}
                    <Li url="/admin/transaction" text="Transactions" Icon={AiFillFileText} location={location} />
                </ul>
            </div>
            <div>
                <h5>CHARTS</h5>
                <ul>
                    {/* Bar Chart */}
                    <Li url="/admin/charts/bar" text="Bar" Icon={FaChartBar} location={location} />
                    {/* Pie Chart */}
                    <Li url="/admin/charts/pie" text="Pie" Icon={FaChartPie} location={location} />
                    {/* Line Chart */}
                    <Li url="/admin/charts/line" text="Line" Icon={FaChartLine} location={location} />
                </ul>
            </div>
            <div>
                <h5>APPS</h5>
                <ul>
                    {/* Stopwatch */}
                    <Li url="/apps/stopwatch" text="Stopwatch" Icon={RiTimerFill} location={location} />
                    {/* Coupons */}
                    <Li url="/apps/coupons" text="Coupon" Icon={RiCoupon3Fill} location={location} />
                    {/* Toss */}
                    <Li url="/apps/toss" text="Toss" Icon={FaGamepad} location={location} />
                </ul>
            </div>
        </aside>
    );
};

interface LiProps {
    url: string;
    text: string;
    Icon: IconType;
    location: Location;
}

const Li = ({ url, text, Icon, location }: LiProps) => {
    return (
        <li style={{
            backgroundColor: location.pathname.includes(url) ? "rgba(0,115,255,0.1)" : "white",
        }}>
            <Link to={url}>
                <Icon />
                {text}
            </Link>
        </li>
    );
}

export default AdminContainer;
