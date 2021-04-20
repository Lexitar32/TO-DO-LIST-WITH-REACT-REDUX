import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/Test/testAction";

const TestFile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const [myUser, setmyUser] = useState(user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (!user) {
    return <h2>Page not found</h2>;
  }

  return (
    <div>
      <p>Get All Users</p>
      <h1>{myUser.title}</h1>
    </div>
  );
};

export default TestFile;
