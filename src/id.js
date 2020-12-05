import React , {useState , useEffect} from 'react';
import './id.css'
const Id = ()=> {

  const [value, setvalue] = useState([]);
  const [loading, setloading] = useState(true)
  const [search, setsearch] = useState('')
  const [filteredValue, setfilteredValue] = useState([])

  useEffect(() => {
   async function fetchData(){
   
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${search}`)
    
      res
        .json()
        .then(res=>setvalue(res))
        .then(res=>setloading(false))
        .then(res=>console.log(value))
        .catch(e=>console.log(e))
  }
  fetchData();
  },[search]);


 useEffect(() => {
    
    setfilteredValue(value.drinks && value.drinks.filter(v=>{
      return v.idDrink.toLowerCase().includes(search.toLowerCase())
    }))

  }, [search,value.drinks])


  

  const handleChange = (e)=>setsearch(e.target.value);

  

  return (
    <div className="id">
        <h1 className="text-center">COCKTAILS</h1>
      <input type="text" className="inp" placeholder="search by id" onChange={handleChange} />

      <br></br> <br></br>
      <div className="row">
      
      {
           filteredValue&&filteredValue.map(v=>(
            <div className="col-12 text-center" style={{marginLeft:"35%"}}>
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
  );
}

export default Id;
