import StatCard from '@/components/StatCard'
import ComplaintOverview from '@/components/ComplaintOverview'

export default function Home() {
  // Mock data for demonstration
  const stats = [
    { title: 'Total Complaints', value: 150 },
    { title: 'Resolved Complaints', value: 100 },
    { title: 'Pending Complaints', value: 50 },
  ]

  const complaints = [
    { category: 'Urgent', count: 10 },
    { category: 'Important', count: 30 },
    { category: 'Regular', count: 110 },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
      <ComplaintOverview complaints={complaints} />
    </div>
  )
}

