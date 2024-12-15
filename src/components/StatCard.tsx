interface StatCardProps {
  title: string
  value: number
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
    </div>
  )
}

export default StatCard

