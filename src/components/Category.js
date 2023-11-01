import {FaPizzaSlice,FaHamburger} from "react-icons/fa";
import {GiNoodles,GiChopsticks} from "react-icons/gi";
import { NavLink } from "react-router-dom";
import './components.css';


const Category = () => {
  return (
    <div className="List">
      <NavLink className={'Slinks'} to={"/cuisine/italian"}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </NavLink>
      <NavLink className={'Slinks'} to={"/cuisine/american"}>
        <FaHamburger/>
        <h4>American</h4>
      </NavLink>
      <NavLink  className={'Slinks'} to={"/cuisine/thai"}>
        <GiNoodles/>
        <h4>Thai</h4>
      </NavLink>
      <NavLink  className={'Slinks'} to={"/cuisine/japanese"}>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </NavLink>
    </div>
  )
}





export default Category
