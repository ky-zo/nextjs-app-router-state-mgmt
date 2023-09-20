import React from "react";

const ClientComponentChild = ({ user }: { user: any }) => {
  return <div>This Client Component Child uses {user.name}</div>;
};

export default ClientComponentChild;
