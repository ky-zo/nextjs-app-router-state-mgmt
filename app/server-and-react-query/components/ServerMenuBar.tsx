import { getUser } from "@/lib/supabase-server";

const ServerMenuBar = async () => {
  const user = await getUser();

  return <div>User data on Server Component: {user?.email}</div>;
};

export default ServerMenuBar;
