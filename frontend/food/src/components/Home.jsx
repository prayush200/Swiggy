import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchIcon from '@mui/icons-material/Search';
import '../styles/home.css'
import axios from 'axios'

export default function Home() {

  const [search,setSearch]=useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let response = await fetch("http://localhost:7000/api/foodData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    response = await response.json();

    // console.log([response[0],response[1]])
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  // const loadData=async()=>{
  //   let response="http://localhost:7000/api/foodData"
  //   axios.post(response,{
  //     headers:{
  //       Accept:"application/json",
  //       "Content-Type":"application/json"
  //     },
  //   })
  //   response=await response.json();
  //   setFoodItem(response[0]);
  //   setFoodCat(response[1])
  // };

  return (
    <div className="div1" >
      <div className="search1">
      <li className='search' style={{"listStyle":"none"}}>
              <label for="site-search" placeholder='search'></label>
              <input type="search" id="site-search" name="q" placeholder='search' style={{"textAlign":'center'}} value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
              <button><SearchIcon /></button>
            </li>
      </div>
      <div className="container" >
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
             <div className="row mb-3" >
              <div key={data._id}>
                <div className="fs-4 m-3" >{data.CategoryName}</div>
                <hr />
               </div>
                {foodItem !== [] ? (
                  foodItem
                    .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())) )
                    .map((filterItems) => {
                      return (
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3" style={{ "marginTop": "3rem"}}>
                          <Card foodItem={filterItems} options={filterItems.options[0]}
                            >
                            
                          
                          </Card>
                        </div>
                      );
                    })
                ) : (
                  <div>No such data found</div>
                )}
              </div>  
              
            );
          })
        ) : (
          <div>Errrorrrrr</div>
        )}
      </div>

      <div>Card</div>
    </div>
  );
}
