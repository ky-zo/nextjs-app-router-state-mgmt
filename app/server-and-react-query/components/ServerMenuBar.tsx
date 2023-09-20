import { getUser, getUserProjects } from "@/lib/supabase-server";

const ServerMenuBar = async () => {
  const user = await getUser();
  const userProjects = await getUserProjects(user?.id);

  return (
    <div>
      User data on Server Component: {user?.email} and lists all the{" "}
      {JSON.stringify(userProjects)}
    </div>
  );
};

export default ServerMenuBar;
