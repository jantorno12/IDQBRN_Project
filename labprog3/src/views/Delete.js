import React, {useState} from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";

const axios = require('axios').default;

function Delete(history){

  
    const [name, setName] = useState('');

    const cadastro = {name}

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({nome:data.get("name")})
        console.log(cadastro)
        //Envia para o backend
        axios.post('http://localhost:5000/admin/delete',cadastro)
        .then((response)=>{
        history.push('/dashboard')
        })
        .catch(function (error) {
        console.log(error);
        });
    };

    // Envia para o backend
    function enter(){
        axios.post('http://localhost:5000/admin/', {
        usuario: name
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    return(
        <div className="content">
            <Row>
                <Col md="12">
                    <Card className="card-user">
                        <CardHeader>
                            <CardTitle tag="h5">Remover Doença</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <form onSubmit={handleSubmit}>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Nome da doenca</label>
                                        <Input
                                        placeholder="doenca"
                                        type="text"
                                        value = {name}
                                        onChange={(e)=>setName(e.target.value)}
                                        />
                                        {/* <option value="esquistossomose">Esquistossomose</option>
                                        <option value="doença de chagas">Doença de Chagas</option>
                                        <option value="malaria">Malária</option>
                                        <option value="leptospirose">Leptospirose</option>
                                        <option default value="dengue">Dengue</option>
                                        <option value="febre amarela">Febre Amarela</option>
                                        <option value="tuberculose">Tuberculose</option> */}
                                    </FormGroup>
                                </Col>
                                <Row>
                                    <div className="update ml-auto mr-auto">
                                        <Button
                                            className="btn-round"
                                            color="danger"
                                            type="submit"

                                        >
                                            Remover Doença
                                        </Button>
                                    </div>
                                </Row>
                            </form>
                        </CardBody>    
                    </Card>    
                </Col>
            </Row>    
        </div>
    );

}

export default Delete;