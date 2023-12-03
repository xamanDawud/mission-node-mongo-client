import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

const Users = () => {
  let receivingData = useLoaderData();
  let [users, setUser] = useState(receivingData);

  let deleteHandler = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("User Delete Successfully");
        } else {
          alert("Not Deleted");
        }

        let remaining = users.filter((user) => user._id !== _id);
        setUser(remaining);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      Hello Users All <Link to={"/"}>Home</Link>
      {users.map((user) => (
        <p key={user._id}>
          Name: {user.name} Id:- {user._id}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => deleteHandler(user._id)}> X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
