import { Link, useLoaderData, Form } from "react-router-dom";


const Show = (props) => {
  const post = useLoaderData()

  //style
  const div ={
    //textAlign: "center",
    //border: "3px solid",
    fontSize: "50px",
    margin: "10px auto",
    width: "90%",
    color: "blue",
    backgroundColor: "yellow",
    borderRadius: "25px"
  }

  const buttonDiv={
    backgroundColor: "red"
  }

//Show each
  return <div style={div}>
    <div>
      <Link to={`/update/${post.id} `} >
              <button style={buttonDiv}>Update</button>
      </Link>
      </div>
      <div>
      <span style={{"text-shadow": "2px 2px 5px grey"}}>{post.title}</span> <br/>
      <span style={{'fontSize':'26px'}}>{post.description}</span><br/>
      <img src={post.image_url} alt="artwork"></img>
      </div>
      <div>
      <Form action={`/delete/${post.id}`} method="post">
              <button style={buttonDiv}>Delete</button>
            </Form>
            <Link to="/">
              <button style={buttonDiv}>Back</button>
            </Link>
      </div>
    </div>
};

export default Show;
