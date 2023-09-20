"use client";

import ClientComponentChild from "./ClientComponentChild";

const ClientComponent = () => {
  return (
    <div>
      Client component that does not need User data
      <ClientComponentChild />
    </div>
  );
};

export default ClientComponent;
