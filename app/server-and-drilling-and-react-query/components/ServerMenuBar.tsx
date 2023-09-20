import { getUserProjects } from "@/lib/supabase-server";

const ServerMenuBar = ({ user }: { user: any }) => {
  const userProjects = getUserProjects(user?.id);

  return (
    <div>
      User data on Server Component: {user.email} and lists all the{" "}
      {JSON.stringify(userProjects)}
    </div>
  );
};

export default ServerMenuBar;
