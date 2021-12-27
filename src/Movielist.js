import Moviecard from "./Moviecard"



function Movielist({moviedata,title,rate}){

    
    return(<div>

   

   
    <div className="chan">
    {moviedata.filter(el=>el.title.toLowerCase().includes(title.toLowerCase())  && el.rate>=rate  ).map((el,i)=><Moviecard el={el} key={i}/>)}
  
    </div>
    
</div>

    )
}

export default Movielist