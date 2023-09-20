import { getUser, getUserProjects } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import ClientMenuBar from "./components/ClientMenuBar";
import ServerMenuBar from "./components/ServerMenuBar";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();

  if (!user) return redirect("/auth");
  const userProjects = await getUserProjects(user?.id);

  return (
    <div>
      This layout gets User data from getUser() and passes it to ClientMenuBar
      and ServerMenuBar.
      <ClientMenuBar user={user} />
      <ServerMenuBar user={user} />
      {children}
    </div>
  );
};

export default ProtectedLayout;
