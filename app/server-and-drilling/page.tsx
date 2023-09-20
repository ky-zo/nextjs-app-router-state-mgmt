import { getUser } from "@/lib/supabase-server";

const Page = async () => {
  const user = await getUser();

  return (
    <div>
      This page does not need the User Data
      <ClientComponent user={user} />
    </div>
  );
};

export default Page;
