'use client'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface ComplaintOverviewProps {
  complaints: { category: string; count: number }[]
}

const ComplaintOverview: React.FC<ComplaintOverviewProps> = ({ complaints }) => {
  const data = {
    labels: complaints.map(c => c.category),
    datasets: [
      {
        data: complaints.map(c => c.count),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Complaint Overview</h2>
      <div className="w-full h-64">
        <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  )
}

export default ComplaintOverview

