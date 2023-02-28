import { Link } from "react-router-dom";//link to another route

const Post = (props) => {
  const post = props.post

  //style
  const div ={
    //textAlign: "center",
    //border: "3px solid",
    margin: "10px auto",
    width: "75%",
    color: "blue",
    backgroundColor: "yellow"
  }
  return(
  <div style={div}>
    <Link to={`/kidsart/${post.id}`}>
      <h1>{post.title}</h1>
    </Link>
    <h2>{post.description}</h2>
    <img src={post.image_url} alt='kid'/>
  </div>
  );
};

export default Post;