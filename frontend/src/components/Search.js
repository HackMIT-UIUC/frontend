import React,{useState} from 'react';

const Search = () => {
  const [keyword, setKeyword] = useState("Search Posts");
  const BarStyling = {width:"80%",background:"#F2F1F9", border:"none", padding:"0.5rem", marginTop:"0.25rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search Posts"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default Search