import "./App.css";
import { Link } from "react-router-dom";

function App() {
  let submitHandler = (e) => {
    e.preventDefault();
    let form = e.target;
    let name = form.name.value;
    let email = form.email.value;
    let user = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("User Added");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <h1>
        Mission Mongo Crud <Link to={"/users"}>Users</Link>
      </h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
