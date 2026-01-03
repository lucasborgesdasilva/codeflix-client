import { getAppSettings } from "../api/settings";
import BuggyButton from "../components/buggy-button";


export default async function Settings() {
  const { theme, language } = await getAppSettings();

  return (
    <div>
      <h1>Settings Page</h1>

      <div className="border border-dashed border-red-500 p-4">
        <p>Theme: {theme}</p>
        <p>Language: {language}</p>
      </div>

      <BuggyButton />
    </div>
  )
}