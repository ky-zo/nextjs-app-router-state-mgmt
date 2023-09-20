import ClientMenuBar from "./components/ClientMenuBar";
import ServerMenuBar from "./components/ServerMenuBar";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClientMenuBar />
      <ServerMenuBar />
    </div>
  );
};

export default ProtectedLayout;
