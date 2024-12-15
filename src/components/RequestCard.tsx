import Link from 'next/link'

interface Request {
  id: string
  title: string
  priority: string
  department: string
  date: string
}

interface RequestCardProps {
  request: Request
}

const RequestCard: React.FC<RequestCardProps> = ({ request }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{request.title}</h3>
      <p className="text-sm text-gray-600 mb-2">ID: {request.id}</p>
      <p className="text-sm mb-1">Priority: <span className={`font-semibold ${getPriorityColor(request.priority)}`}>{request.priority}</span></p>
      <p className="text-sm mb-1">Department: {request.department}</p>
      <p className="text-sm mb-4">Date: {request.date}</p>
      <Link href={`/requests/${request.id}`} className="text-blue-600 hover:underline">
        View Details
      </Link>
    </div>
  )
}

function getPriorityColor(priority: string): string {
  switch (priority.toLowerCase()) {
    case 'urgent':
      return 'text-red-600'
    case 'important':
      return 'text-yellow-600'
    default:
      return 'text-green-600'
  }
}

export default RequestCard

