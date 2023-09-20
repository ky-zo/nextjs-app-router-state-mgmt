const ServerMenuBar = ({
  user,
  userProjects,
}: {
  user: any;
  userProjects: any;
}) => {
  return (
    <div>
      User data on Server Component: {user.email} and lists all the{" "}
      {JSON.stringify(userProjects)}
    </div>
  );
};

export default ServerMenuBar;
