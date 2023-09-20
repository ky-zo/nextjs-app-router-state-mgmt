"use client";

const ClientComponent = ({ user }: { user: any }) => {
  return (
    <div>
      This component does not need any user data, but it calls{" "}
      <ClientComponentChild user={user} />{" "}
    </div>
  );
};

export default ClientComponent;
