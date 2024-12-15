'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import ReplyForm from '@/components/ReplyForm'

// Mock data for demonstration
const mockComplaintDetails = {
  id: '1',
  title: 'Payment not processed',
  priority: 'Important',
  department: 'Billing',
  date: '2023-05-01',
  userInfo: {
    name: 'John Doe',
    email: 'johndoe@example.com',
  },
  complaintText: "I made a payment 48 hours ago, but it still hasn't been processed. This is causing delays in my service. Please resolve this issue as soon as possible.",
  status: 'Pending',
  replies: [
    {
      id: '1',
      adminName: 'Admin User',
      date: '2023-05-02',
      text: "Thank you for bringing this to our attention. We're looking into the issue and will get back to you shortly.",
      attachments: [],
    },
  ],
}

interface ComplaintDetails {
  id: string
  title: string
  priority: string
  department: string
  date: string
  userInfo: {
    name: string
    email: string
  }
  complaintText: string
  status: string
  replies: Array<{
    id: string
    adminName: string
    date: string
    text: string
    attachments: string[]
  }>
}

export default function ComplaintDetails() {
  const params = useParams()
  const [complaint, setComplaint] = useState<ComplaintDetails | null>(null)

  useEffect(() => {
    // In a real application, you would fetch the complaint details from an API
    // For this example, we'll use the mock data
    setComplaint(mockComplaintDetails)
  }, [params.id])

  const handleReply = (text: string, attachments: File[]) => {
    // In a real application, you would send this data to your API
    console.log('Reply:', text)
    console.log('Attachments:', attachments)

    // Update the local state with the new reply
    if (complaint) {
      const newReply = {
        id: (complaint.replies.length + 1).toString(),
        adminName: 'Admin User',
        date: new Date().toISOString().split('T')[0],
        text: text,
        attachments: attachments.map(file => file.name),
      }
      setComplaint({
        ...complaint,
        replies: [...complaint.replies, newReply],
      })
    }
  }

  if (!complaint) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Complaint Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{complaint.title}</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <p><strong>ID:</strong> {complaint.id}</p>
          <p><strong>Priority:</strong> <span className={`font-semibold ${getPriorityColor(complaint.priority)}`}>{complaint.priority}</span></p>
          <p><strong>Department:</strong> {complaint.department}</p>
          <p><strong>Date:</strong> {complaint.date}</p>
          <p><strong>Status:</strong> {complaint.status}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">User Information</h3>
          <p><strong>Name:</strong> {complaint.userInfo.name}</p>
          <p><strong>Email:</strong> {complaint.userInfo.email}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Complaint Text</h3>
          <p className="whitespace-pre-wrap">{complaint.complaintText}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Replies</h3>
          {complaint.replies.map((reply) => (
            <div key={reply.id} className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold">{reply.adminName} - {reply.date}</p>
              <p className="mt-2">{reply.text}</p>
              {reply.attachments.length > 0 && (
                <div className="mt-2">
                  <p className="font-semibold">Attachments:</p>
                  <ul className="list-disc list-inside">
                    {reply.attachments.map((attachment, index) => (
                      <li key={index}>{attachment}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <ReplyForm onSubmit={handleReply} />
      </div>
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

