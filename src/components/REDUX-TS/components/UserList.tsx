import React from "react";

export const UserList = () => {
  const { users, error, loading } = useTypedSelector((state) => state);
  return <div>UserList</div>;
};
