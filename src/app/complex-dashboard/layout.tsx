export default function DasboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  //Parallel Routes
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="w-1/3">{users}</div>
        <div className="w-1/3">{revenue}</div>
        <div className="w-1/3">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
