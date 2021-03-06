import React, { useState } from "react";
import {Col, Form, Button} from "react-bootstrap";
import axios from 'axios';
function SignUp()
{
    const [details, setDetails] = useState({
      email: "",
      password: "",
      name: "",
      address: "",
      city: "",
      gender: "",
      birthday: "",
    });
    
    const register = (e) => {
      e.preventDefault();
      const {email, password, name, address, city, gender, birthday} = details; // destructuring object js
      // const form_data = {
      //   email: email,
      //   password: password,
      //   name: name,
      //   address: address,
      //   city: city,
      //   gender: gender,
      //   birthday: birthday,
      // }
      const form_data = {
        email,
        password,
        name,
        address,
        city,
        gender,
        birthday,
      }
      console.log(form_data);
      axios.post("http://127.0.0.1:8000/api/register", form_data).then(
        res => console.log(res.data.user)
        // tra ve ket qua duoi server
      ).catch(err => console.log(err))
    }
      

    return( 
      <center>
        <div className="col-md-5">
            <Form style={{fontSize:"20px", width:"500px"}} onSubmit={register}>
              <Form.Row >
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={details.email} onChange={(e) => setDetails({...details, email: e.target.value})} placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={details.password} onChange={(e) => setDetails({...details, password: e.target.value})} placeholder="Password" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={details.name} onChange={(e) => setDetails({...details, name: e.target.value})} placeholder="Your Name" />
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" value={details.address} onChange={(e) => setDetails({...details, address:e.target.value})} placeholder="1234 Main St" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control as="select" defaultValue="Choose..." value={details.city} onChange={(e) => setDetails({...details, city:e.target.value})} >
                    <option>Choose...</option>
                    <option value="An Giang">An Giang</option>
                    <option value="B?? R???a - V??ng T??u">B?? R???a - V??ng T??u</option>
                    <option value="B???c Giang">B???c Giang</option>
                    <option value="B???c K???n">B???c K???n</option>
                    <option value="B???c Li??u">B???c Li??u</option>
                    <option value="B???c Ninh">B???c Ninh</option>
                    <option value="B???n Tre">B???n Tre</option>
                    <option value="B??nh ?????nh">B??nh ?????nh</option>
                    <option value="B??nh D????ng">B??nh D????ng</option>
                    <option value="B??nh Ph?????c">B??nh Ph?????c</option>
                    <option value="B??nh Thu???n">B??nh Thu???n</option>
                    <option value="C?? Mau">C?? Mau</option>
                    <option value="Cao B???ng">Cao B???ng</option>
                    <option value="?????k L???k">?????k L???k</option>
                    <option value="?????k N??ng">?????k N??ng</option>
                    <option value="??i???n Bi??n">??i???n Bi??n</option>
                    <option value="?????ng Nai">?????ng Nai</option>
                    <option value="?????ng Th??p">?????ng Th??p</option>
                    <option value="Gia Lai">Gia Lai</option>
                    <option value="H?? Giang">H?? Giang</option>
                    <option value="H?? Nam">H?? Nam</option>
                    <option value="H?? T??nh">H?? T??nh</option>
                    <option value="H???i D????ng">H???i D????ng</option>
                    <option value="H???u Giang">H???u Giang</option>
                    <option value="H??a B??nh">H??a B??nh</option>
                    <option value="H??ng Y??n">H??ng Y??n</option>
                    <option value="Kh??nh H??a">Kh??nh H??a</option>
                    <option value="Ki??n Giang">Ki??n Giang</option>
                    <option value="Kon Tum">Kon Tum</option>
                    <option value="Lai Ch??u">Lai Ch??u</option>
                    <option value="L??m ?????ng">L??m ?????ng</option>
                    <option value="L???ng S??n">L???ng S??n</option>
                    <option value="L??o Cai">L??o Cai</option>
                    <option value="Long An">Long An</option>
                    <option value="Nam ?????nh">Nam ?????nh</option>
                    <option value="Ngh??? An">Ngh??? An</option>
                    <option value="Ninh B??nh">Ninh B??nh</option>
                    <option value="Ninh Thu???n">Ninh Thu???n</option>
                    <option value="Ph?? Th???">Ph?? Th???</option>
                    <option value="Qu???ng B??nh">Qu???ng B??nh</option>
                    <option value="Qu???ng Ng??i">Qu???ng Ng??i</option>
                    <option value="Qu???ng Ninh">Qu???ng Ninh</option>
                    <option value="Qu???ng Tr???">Qu???ng Tr???</option>
                    <option value="S??c Tr??ng">S??c Tr??ng</option>
                    <option value="S??n La">S??n La</option>
                    <option value="T??y Ninh">T??y Ninh</option>
                    <option value="Th??i B??nh">Th??i B??nh</option>
                    <option value="Th??i Nguy??n">Th??i Nguy??n</option>
                    <option value="Thanh H??a">Thanh H??a</option>
                    <option value="Th???a Thi??n Hu???">Th???a Thi??n Hu???</option>
                    <option value="Ti???n Giang">Ti???n Giang</option>
                    <option value="Tr?? Vinh">Tr?? Vinh</option>
                    <option value="Tuy??n Quang">Tuy??n Quang</option>
                    <option value="V??nh Long">V??nh Long</option>
                    <option value="Tp.C???n Th??">Tp.C???n Th??</option>
                    <option value="Tp.???? N???ng">Tp.???? N???ng</option>
                    <option value="Tp.H???i Ph??ng">Tp.H???i Ph??ng</option>
                    <option value="Tp.H?? N???i">Tp.H?? N???i</option>
                    <option value="TPHCM">TP HCM</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select"  defaultValue="Choose..." value={details.gender} onChange={(e) => setDetails({...details, gender:e.target.value})} >
                    <option>Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control type='date' value={details.birthday} onChange={(e) => setDetails({...details, birthday:e.target.value})}>
                  </Form.Control>
                  </Form.Group>
              </Form.Row>

              <input type="submit" name="Submit" value="Submit" />
            </Form>

        </div>
        </center>
    )
}
export default SignUp