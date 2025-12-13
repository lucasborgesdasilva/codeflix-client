export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">layout wrapper</h1>
      <div className="border border-red-500 border-dashed p-4">
        {children}
      </div>
    </div>
  )
}