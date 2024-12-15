import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Admin Interface</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">Dashboard</Link>
          <Link href="/complaints" className="hover:text-gray-300">Complaints</Link>
          <Link href="/requests" className="hover:text-gray-300">User Requests</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

