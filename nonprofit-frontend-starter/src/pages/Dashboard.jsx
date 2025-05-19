import { useAuth, logout } from '../auth';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-2xl">Welcome, {user?.email}</h1>
      <button onClick={logout} className="mt-4 bg-red-500 text-white px-4 py-2">Log Out</button>
    </div>
  );
}
