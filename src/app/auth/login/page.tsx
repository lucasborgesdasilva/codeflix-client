export default function Login() {
  return (
    <div style={{ backgroundImage: 'url(/background.jpg)' }}
      className="bg-cover bg-center bg-no-repeat text-white opacity-80"
    >
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <form action="" className="flex w-full flex-col space-y-4 bg-[#141414]/90 px-4 py-8 shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-sm text-gray-500">
              New to the app ? {' '}
              <a href="#" className="text-red-500 hover:underline">
                Register
              </a>
            </p>
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </form>
      </div>
    </div>
  )
}