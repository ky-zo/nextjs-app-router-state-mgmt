import { getUser, getUserProjects } from "@/lib/supabase-server";
import ClientComponent from "./components/ClientComponent";

const Page = async () => {
  const user = await getUser();
  const userProjects = await getUserProjects(user?.id);

  return (
    <div>
      This page does not need any User data, but it fetches it from getUser() to
      pass it to Client component. It uses getUser() even though the layout also
      uses getUser().
      <ClientComponent user={user} userProjects={userProjects} />
    </div>
  );
};

export default Page;
