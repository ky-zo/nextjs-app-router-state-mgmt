"use client";

import { useUser } from "../states/user-state";

const ClientMenuBar = () => {
  const { data: user } = useUser();

  return <div>User data on Client Component: {user?.email}</div>;
};

export default ClientMenuBar;
