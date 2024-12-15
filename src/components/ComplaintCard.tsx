import Link from 'next/link'

interface Complaint {
  id: string
  title: string
  priority: string
  department: string
  date: string
}

interface ComplaintCardProps {
  complaint: Complaint
}

const ComplaintCard: React.FC<ComplaintCardProps> = ({ complaint }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{complaint.title}</h3>
      <p className="text-sm text-gray-600 mb-2">ID: {complaint.id}</p>
      <p className="text-sm mb-1">Priority: <span className={`font-semibold ${getPriorityColor(complaint.priority)}`}>{complaint.priority}</span></p>
      <p className="text-sm mb-1">Department: {complaint.department}</p>
      <p className="text-sm mb-4">Date: {complaint.date}</p>
      <Link href={`/complaints/${complaint.id}`} className="text-blue-600 hover:underline">
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

export default ComplaintCard

