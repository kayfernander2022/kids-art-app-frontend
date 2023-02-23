import { useLoaderData, Form} from "react-router-dom";
import Post from "../components/Post";


const Index = (props) => {
  const kidsart = useLoaderData();

    return <>
    <div style={{textAlign: "center"}}>
      <h2>Create a art</h2>
      <Form action='/create' method='post'>
      <input type="text" name="title" placeholder="enter a title here"/>
      <input type="text" name="description" placeholder="tell us about your work of art..."/>
      <input type="text" name="url" placeholder="enter a link here"/>
      <button>Submit</button>
      </Form>
    
    </div>
    {kidsart.map((post) => <Post key={post.id} post={post} />)};
    </>;
};

export default Index;