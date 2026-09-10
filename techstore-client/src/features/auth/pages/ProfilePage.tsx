import { useAuthStore } from "../store/auth-store";

export const ProfilePage = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-10 text-white">
      <h1 className="mb-4 text-3xl font-bold">Mi perfil</h1>

      <p>Nombre: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Rol: {user?.role}</p>
    </div>
  );
};
