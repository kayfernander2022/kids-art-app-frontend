import { Form, Link} from "react-router-dom"
import { useState } from "react";
import { IKContext, IKUpload } from 'imagekitio-react'
import { authUrl } from '../url';

const CreateArt = (props) => {
  const [currImg, setCurrImg] = useState();
   
  function onError(err){
    console.log(err);
  }

  function onSuccess(response){
    setCurrImg(response.url)
    console.log(response.url)
  }

  const div ={
    //textAlign: "center",
    //border: "3px solid",
    fontSize: "50px",
    margin: "10px auto",
    width: "90%",
    color: "blue",
    backgroundColor: "yellow"
  }
  const buttonDiv={
    backgroundColor: "red"
  }
//style={{textAlign: "center"}}
 //
  return(<>
  <div style={div}>
  <h2>Add your Masterpiece</h2>
      {currImg && <img src={currImg} alt='thumbnail'/>}
      <Form action='/create' method='post' encType="multipart/form-data">
      <input type="text" name="title" placeholder="Title"/>
      <input type="text" name="description" placeholder="Description"/>
      <input type="hidden" name="image_url" value={currImg} />
      <IKContext publicKey="public_33FjszinEBzlgrIz8+HbC3JVASM=" urlEndpoint="https://ik.imagekit.io/jfpi8d5c5/kidsart" authenticationEndpoint={authUrl}>
        <IKUpload
          folder={'/kidsart'}
          onError={onError}
          onSuccess={onSuccess}
        />
      </IKContext>
      <button style={buttonDiv}>Submit</button>

      <Link to="/">
        <button style={buttonDiv}>Back</button>
      </Link>
      
      </Form>
  </div>
  </>)
  
      
}

export default CreateArt

