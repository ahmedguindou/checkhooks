

import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function Moviecard({el}){

    
    return(
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.photo}alt="movies title" />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
      {el.description}
    </Card.Text>


    <ReactStars
    count={5}
    value={el.rate}
  />
    <Button variant="primary">Edit Movie</Button>

    <Link to={`/description/${el.id}`}><li>Description and Trailer</li></Link>
  </Card.Body>
</Card>
       
    </div>


    )
}

export default Moviecard