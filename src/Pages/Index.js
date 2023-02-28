import { useLoaderData, Link } from "react-router-dom";
import Post from "../components/Post";


const Index = (props) => {
  const kidsart = useLoaderData();
  
  
  const buttonDiv={
    backgroundColor: "red"
  }

    return (<>
    <div style={{textAlign: "center"}}>
    <Link to={`/create`}>
      <button style={buttonDiv}>Add new</button>
    </Link>
    {kidsart.map((post) => <Post key={post.id} post={post} />)};
    </div>
    </>);
};

export default Index;


