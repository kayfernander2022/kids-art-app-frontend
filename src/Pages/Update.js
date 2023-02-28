import { useLoaderData, Form, Link} from "react-router-dom";
//import Post from "../components/Post";
import { useState } from "react";
import { IKContext, IKUpload } from 'imagekitio-react'
import { authUrl } from '../url';


const Update = (props) => {

  const post = useLoaderData();
  const [currImg, setCurrImg] = useState(post.image_url);
   
  function onError(err){
    console.log(err);
  }

  function onSuccess(response){
    setCurrImg(response.url)
    console.log(response.url)
  }

  //style
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
//update entry
  return <div style={div}>
    <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <img src={post.image_url} alt='artwork'></img>
      <div>

        <h1>Edit Artwork </h1>
        <Form action={`/update/${post.id}`} method='post'>
      <input type="text" 
      name="title" 
      placeholder="Title" 
      defaultValue={post.title}
      />
      <input type="text" 
      name="description" 
      placeholder="Tell us about your artwork..." 
      defaultValue={post.description}
      />
      <IKContext publicKey="public_33FjszinEBzlgrIz8+HbC3JVASM=" urlEndpoint="https://ik.imagekit.io/jfpi8d5c5/kidsart" authenticationEndpoint={authUrl}>
        <IKUpload
          folder={'/kidsart'}
          onError={onError}
          onSuccess={onSuccess}
        />
      </IKContext>
      <input type="hidden" name="image_url" value={currImg} />
      <button style={buttonDiv}>Submit</button>
      </Form>

      <Form action={`/delete/${post.id}`} method="post">
        <button style={buttonDiv}>Delete</button>
      </Form>
      </div>

      <Link to="/">
        <button style={buttonDiv}>Back</button>
      </Link>
      
    </div>
};


export default Update;
