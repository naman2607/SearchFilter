import React,{useState,useEffect} from 'react'
import './HomePage.css'
const Homepage = () => {
    
      const [value, setvalue] = useState([]);
      const [loading, setloading] = useState(true)
      const [search, setsearch] = useState('')
      const [filteredValue, setfilteredValue] = useState([])
      useEffect(() => {
       async function fetchData(){
       
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`)
        
          res
            .json()
            .then(res=>setvalue(res))
            .then(res=>setloading(false))
            .catch(e=>console.log(e))
      }
      fetchData();
      },[search]);
    
    
      useEffect(() => {
        
        setfilteredValue(value.drinks && value.drinks.filter(v=>{
          return v.strDrink.toLowerCase().includes(search.toLowerCase())
        }))
    
      }, [search,value.drinks])
    
    
      
    
      const handleChange = (e)=>setsearch(e.target.value);
    
      
    
    return (
            <div className="x">

                        <h4 className="text-white">DRINK WELL WITH OTHERS</h4>
                            <div class="input-group">
                                <div class="input-group-btn search-panel">
                                    <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">
                                        <span id="search_concept">Filter by</span> <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu " role="menu" style={{backgroundColor:"darkslategray"}}>
                                    
                                    <li><a href="/id" style={{color:"wheat"}}>Id</a></li>
                                    <li><a href="/name" style={{color:"wheat"}}>Name</a></li>
                                    <li><a href="/category" style={{color:"wheat"}}>Category</a></li>
                                    <li><a href="/ingre" style={{color:"wheat"}}>Ingredient</a></li>
                                    
                                    
                                    </ul>
                                </div>    
                                <input type="text" className="z" name="x"  placeholder="Search term... " onChange={handleChange} />

                                <div className="row">
      
      {
           filteredValue&&filteredValue.map(v=>(
            <div className="col-4 text-center">
               <div class="card">
                  <img class="card-img" src={v.strDrinkThumb} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">{v.strDrink}e</h5>
                    <p class="card-text">

                      Alcoholic : {v.strAlcoholic}
                      <br></br>
                      Glass     : {v.strGlass}
                      <br></br>
                      Ingredient : {v.strIngredient1}
                      <br></br>
                      Category   : {v.strCategory}

                    </p>
                    
                  </div>
                </div>
              </div>
            ))
      } 
      </div>
                               
                            </div>
                        </div>
            


    )
}

export default Homepage
