import React, { Component } from 'react'
import './Locations.css'
import {Col,Row,Form} from 'react-bootstrap'

export default class DivingLocations extends Component {

    state={
        Loc:"21.599033,39.064878",
        Name:"Desert Sea Divers",
        Data:""
        
    }
    handelEventSelect=(Address,Name)=>{
       this.setState({Loc:Address, Name:Name})

    }
    render() {
       
        return (
            <div  >
       <Row >
       <Col style ={{margin:"30px"}}>  <div style ={{width:"80%",paddingTop : "200px"}}>
       <Form>
       <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label><h4 >Select Locations</h4> </Form.Label>
    <Form.Control as="select">
      <option onClick={()=> this.handelEventSelect("21.599033,39.064878","Desert Sea Divers")}>
         First Address 
       </option>
      <option onClick={()=> this.handelEventSelect("21.493797,39.075631","Saati Adventures")}>
          Second Address 
      </option>
      <option onClick={()=> this.handelEventSelect("21.541623,38.956837","Orca Divers SA")}>
           Third Address 
        </option>
        </Form.Control>
    </Form.Group>

  </Form>
        </div>
        {/* <div className="namebox" onClick={()=> this.handelEventSelect("21.599033,39.064878","Desert Sea Divers")}>
          <h5 className="coror"> First Address </h5>
        </div>  */}

        {/* <div className="namebox" onClick={()=> this.handelEventSelect("21.493797,39.075631","Saati Adventures")}>
          <h5 className="coror"> Second Address </h5>
        </div> */}

        {/* <div className="namebox" onClick={()=> this.handelEventSelect("21.541623,38.956837","Orca Divers SA")}>
          <h5 className="coror"> Third Address </h5>
        </div> */}
        </Col>

       <Col style={{paddingTop : "150px"}}  sclassName="frame" xl > <h1>{this.state.Name}</h1>
      <iframe  sclassName="frame" title="DivingLocations" width="100%" height="500" frameBorder="0" style={{border:"0",marginRight:"900px"}}
        src={`https://www.google.com/maps/embed/v1/place?q=${this.state.Loc}&zoom=11&center=21.4858%2C39.1925&key=AIzaSyCi9DCG3wzcPg5zStmT1S87x4oYyEXmfLo` } allowFullScreen></iframe>  
        </Col>
       </Row>
            </div>

              

        )
    }
}
