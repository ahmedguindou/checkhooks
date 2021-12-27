import Start from "./start"
import{Navbar,Form,Modal,Container} from "react-bootstrap"
import Add from "./Add"


function Navv({moviedata,setMoviedata,title,setTitle,rate,setrate}){
    

    

    return(
        <div>


<Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
    <Add moviedata={moviedata} setMoviedata={setMoviedata}></Add>
      <Navbar.Brand href="#"> <Modal.Body>Title<Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)} value={title}/></Modal.Body></Navbar.Brand>
      
    
      <Start setrate={setrate}></Start> 
    </Container>
  </Navbar>
</Container>

        </div>
    )
}
export default Navv