import React from "react";

const ClientComponentChild = ({
  user,
  userProjects,
}: {
  user: any;
  userProjects: any;
}) => {
  return (
    <div>
      This Client Component Child uses {user.email} and lists all the{" "}
      {JSON.stringify(userProjects)}
    </div>
  );
};

export default ClientComponentChild;
