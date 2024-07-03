import {Link} from "react-router-dom";
import "../style.css";

const NavBar=()=>{
return<><div className="topnav">
<Link to="avgmonth">גרף שערי המרה</Link>
<Link to="selectmonth">בחר חודש</Link>
<Link to="tableminandmax">טבלת שערי המרה</Link>
<Link to="Forecast">תחזית משוערת</Link>
<p id="usd">USD</p>
</div>
</>
 }
 export default NavBar;