import ClientComponent from "./components/ClientComponent";

const Page = async () => {
  return (
    <div>
      This Server Page does not need any User data, so it does not get it.
      <ClientComponent />
    </div>
  );
};

export default Page;
