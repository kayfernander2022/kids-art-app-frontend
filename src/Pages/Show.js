import { Link, useLoaderData, Form } from "react-router-dom";


const Show = (props) => {
  const post = useLoaderData()

  //style
  const div ={
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
    color: "blue"
  }


  return <div style={div}>
    <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <h2>{post.image_url}</h2>
      <div>
        <h2>Update this piece of art</h2>
        <Form action={`/update/${post.id}`} method='post'>
      <input type="text" 
      name="title" 
      placeholder="enter a title here" 
      defaultValue={post.title}
      />
      <input type="text" 
      name="description" 
      placeholder="tell us about your work of art..." 
      defaultValue={post.description}
      />
      <input type="file" 
      name="url" 
      placeholder="enter url here" 
      //defaultValue={post.image_url}
      />
      <button>Submit</button>
      </Form>
      <Form action={`/delete/${post.id}`} method="post">
        <button>Delete</button>
      </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
};

export default Show;