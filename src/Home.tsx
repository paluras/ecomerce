import Card from "./Card";

function Home({allProducts}:{allProducts:any ,count:string,handleSidebar:any}){
   
    return(
        <div className="App">
            
            <div className="home-list">
        {allProducts.map((season : any) => (
          
            <li key={season.id} 
                id={season.id}>
                
                <Card 
                id={season.id}
                name={season.name}
                price={season.price}
                photo={season.photo}
                category={season.category}
                 />
                  
            </li>
                
        ))}
        
        </div>
        
        </div>
        
    )
}

export default Home

