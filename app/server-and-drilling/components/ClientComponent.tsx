"use client";

import ClientComponentChild from "./ClientComponentChild";

const ClientComponent = ({
  user,
  userProjects,
}: {
  user: any;
  userProjects: any;
}) => {
  return (
    <div>
      This component does not need any user data, but it calls{" "}
      <ClientComponentChild user={user} userProjects={userProjects} />{" "}
    </div>
  );
};

export default ClientComponent;
