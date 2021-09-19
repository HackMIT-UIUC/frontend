import { Dropdown, Anchor,Div } from "atomize";
import React,{useState, useEffect} from 'react'
const SmallSizeDropdown = ()=> {
    
    const [showDropdown, toggleDropdown] = useState(false)
    const [currentCategory,changeCategory] = useState("General Issues")
    const menuList = (
        <Div p={{ x: "1rem", y: "0.5rem" }}>
          {["Senior Health", "Child Health", "Injury and Accidents", "Women's Health", "Mental Health","General Issues"].map((name, index) => (
            <Anchor onClick = {(name)=>{changeCategory(name)}} d="block" p={{ y: "0.25rem" }}>
              {name}
            </Anchor>
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