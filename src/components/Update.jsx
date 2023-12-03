import { useLoaderData, Link } from "react-router-dom";
const Update = () => {
  let loadedUser = useLoaderData();
  let submitBtnHandler = (event) => {
    event.preventDefault();
    let form = event.target;
    let name = form.name.value;
    let email = form.email.value;
    let user = { name, email };
    console.log(user);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User Updated");
        } else {
          alert("User Not Updated!!!!!!");
        }
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <div>
      <form onSubmit={submitBtnHandler}>
        <input type="text" name="name" defaultValue={loadedUser.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedUser.email}
          id=""
        />{" "}
        <br />
        <input type="submit" value="Submit" />
        <br />
        <br />
        <br />
        <br />
        <Link to={"/users"}>
          <button>See All Users</button>
        </Link>
      </form>
    </div>
  );
};

export default Update;
