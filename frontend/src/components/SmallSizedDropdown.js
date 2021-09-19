import { Dropdown, Anchor,Div,Text,Button} from "atomize";
import React,{useState, useEffect} from 'react'
const SmallSizeDropdown = ()=> {
    const [currentCategory,setCurrentCategory] = useState("General Issues");
    const [showDropdown, toggleDropdown] = useState(false)
    const menuList = (
        <Div p={{ x: "1rem", y: "0.5rem" }}>
          {["Senior Health", "Child Health", "Injury and Accidents", "Women's Health", "Mental Health","General Issues"].map((name, index) => (
            <p onClick = {()=>{setCurrentCategory(name); toggleDropdown(false)}} d="block" p={{ y: "0.25rem" }}>
              {name}
            </p>
          ))}
        </Div>
      );
    return (
      <Dropdown
        w="fit-content"
        isOpen={showDropdown}
        onClick={() =>
          toggleDropdown(true)
        }
        menu={menuList}
      >
         {currentCategory}
      </Dropdown>
    );
  }
export default SmallSizeDropdown;