import { useState } from "react";
import { Form } from "react-bootstrap";
import{Modal,Button} from "react-bootstrap"

  
import ReactStars from "react-rating-stars-component";


  function Add({setMoviedata,moviedata}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [photo,setPhoto]=useState("");
  const [rate, setRate]=useState(0)
  const addmovie=()=>{setMoviedata( [...moviedata,{title,description,photo, rate}] )}

  return (
    <>

    
    
      <Button variant="primary" onClick={handleShow}>
       Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Title <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)} value={title} /></Modal.Body>
        <Modal.Body>Description <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)} value={description}/></Modal.Body>
        <Modal.Body>  Photo <Form.Control type="text" placeholder="Enter the path" onChange={(e)=>setPhoto(e.target.value)} value={photo}/></Modal.Body>
        <Modal.Body>
    <ReactStars
    count={5}
   onChange={(x) => {  setRate(x)}  }
  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=>{addmovie();handleClose()}} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}




export default Add