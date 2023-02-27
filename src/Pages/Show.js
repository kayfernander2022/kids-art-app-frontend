import { Link, useLoaderData, Form } from "react-router-dom";


const Show = (props) => {
  const post = useLoaderData()

  //style
  const div ={
    //textAlign: "center",
    //border: "3px solid",
    fontSize: "50px",
    margin: "10px auto",
    width: "80%",
    color: "blue",
    backgroundColor: "yellow"
  }

//show
  return <div style={div}>
    <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <h2>{post.image_url}</h2>
      <div>
        <h2>Edit artwork here</h2>
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
      <input type="file" 
      name="url" 
      //placeholder="enter url here" 
      //defaultValue={post.image_url}
      />
      <button>Submit</button>
      </Form>
      <Form action={`/delete/${post.id}`} method="post">
        <button>Delete</button>
      </Form>
      </div>
      <Link to="/">
        <button>Back to gallery</button>
      </Link>
    </div>
};

export default Show;