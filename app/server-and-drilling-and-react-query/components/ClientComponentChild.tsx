import { useUser, useUserProjects } from "@/states/user-state";

const ClientComponentChild = () => {
  const { data: user } = useUser();
  const { data: userProjects } = useUserProjects(); //React-Query Hook

  return (
    <div>
      This Client Component Child uses {user?.email} and lists all the{" "}
      {JSON.stringify(userProjects)}
    </div>
  );
};

export default ClientComponentChild;
