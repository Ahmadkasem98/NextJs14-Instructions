// parallel Routes

export default function DashboardLayout({
  children,
  users,
  category,
  notifications,
  revenue,
  login,
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
  category: React.ReactNode;
}>) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </>
  ) : (
    <div>{login}</div>
  );
}
