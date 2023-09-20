import { getUser } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import ClientMenuBar from "./components/ClientMenuBar";
import ServerMenuBar from "./components/ServerMenuBar";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();

  if (!user) return redirect("/auth");

  return (
    <div>
      This Layout uses two components that rely on User data, so it fetches it
      from getUser() and passes it to both components.
      <ClientMenuBar user={user} />
      <ServerMenuBar user={user} />
    </div>
  );
};

export default ProtectedLayout;
