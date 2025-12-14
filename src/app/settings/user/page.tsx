import BuggyButton from "@/app/components/BuggyButton";
import { getUserInfo } from "@/app/lib/settings";

export default async function User() {
  const { name, email, age } = await getUserInfo();

  return (
    <div>
      <h1>User Page</h1>

      <div className="border border-dashed border-red-500 p-4">
        <p>Name: {name}</p>
        <p>email: {email}</p>
        <p>age: {age}</p>
      </div>

      <BuggyButton />
    </div>
  )
}