


function Desc(props) {

    const found=props.moviedata.find(el=>el.id==props.match.params.id)
    console.log(props.match.params.id)
    return(
        

        <div>

<h1>Description and Trailer</h1>
<div>

{found.description}
<iframe width="560" height="315" src={found.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br/>
<button onClick={()=> props.history.goBack()}>Go back</button> 
</div>
        </div>
    )

    
}
export default Desc