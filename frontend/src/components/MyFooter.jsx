
import { Container, Header, Content, Footer, Sidebar, Panel } from 'rsuite';



var style = {
    position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
//   background-color: red;
  color: "white",
  textAlign: "center"
}

const MyFooter = () => {
  return (

    <div style={style}>
        <footer className="bg-dark text-center text-white">
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            Designed by Team <span>Zero_Motivation</span>
         </div>
        </footer>
        
    </div>


        // <div className="show-container" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        // <Container>
        //     <Footer>Designed by <span>Zero_Motivation</span></Footer>
        // </Container>
        // </div>
    
      
    );
}

export default MyFooter;
