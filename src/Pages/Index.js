import { useLoaderData, Form} from "react-router-dom";
import Post from "../components/Post";
import { useState } from "react";
import { IKContext, IKUpload } from 'imagekitio-react'
import { authUrl } from '../url';

const Index = (props) => {
  const kidsart = useLoaderData();
  //console.log(authUrl);
  
  const [currImg, setCurrImg] = useState();
   
  function onError(err){
    console.log(err);
  }

  function onSuccess(response){
    setCurrImg(response.url)
    console.log(response.url)
  }

    return (<>
    <div style={{textAlign: "center"}}>
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
      <button>Submit</button>
      </Form>
       {kidsart.map((post) => <Post key={post.id} post={post} />)};
    </div>
    </>);
};

export default Index;
