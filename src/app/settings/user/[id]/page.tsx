import { getUserById } from "@/app/lib/settings";
import { notFound } from "next/navigation";

async function User({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const {
    name,
    username,
    email,
    phone,
    website,
  } = await getUserById(id);

  if (!name) {
    notFound();
  }

  return (
    <div>
      <h1>User {id}</h1>

      <div className="border border-dashed border-red-500 p-4">
        <p>Name: {name}</p>
        <p>ID: {id}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </div>
    </div>
  );
}

export default User;