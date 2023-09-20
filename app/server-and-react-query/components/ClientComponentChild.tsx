import { useUser } from "../states/user-state";

const ClientComponentChild = () => {
  const { data: user } = useUser();

  return <div>This Client Component Child uses {user && user?.email}</div>;
};

export default ClientComponentChild;
