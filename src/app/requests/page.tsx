'use client'

import { useState } from 'react'
import RequestCard from '@/components/RequestCard'
import SearchBar from '@/components/SearchBar'
import FilterDropdown from '@/components/FilterDropdown'

// Mock data for demonstration
const mockRequests = [
  { id: '1', title: 'Account upgrade', priority: 'Regular', department: 'Customer Service', date: '2023-05-01' },
  { id: '2', title: 'Password reset', priority: 'Important', department: 'Technical', date: '2023-05-02' },
  { id: '3', title: 'Billing inquiry', priority: 'Urgent', department: 'Billing', date: '2023-05-03' },
]

export default function Requests() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState({ priority: '', department: '', date: '' })

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    // Implement search logic here
  }

  const handleFilter = (type: string, value: string) => {
    setFilter({ ...filter, [type]: value })
    // Implement filter logic here
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">User Requests</h1>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <SearchBar onSearch={handleSearch} />
        <div className="flex space-x-4">
          <FilterDropdown
            options={['Urgent', 'Important', 'Regular']}
            onSelect={(value) => handleFilter('priority', value)}
            placeholder="Priority"
          />
          <FilterDropdown
            options={['Technical', 'Customer Service', 'Billing']}
            onSelect={(value) => handleFilter('department', value)}
            placeholder="Department"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {requests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>
    </div>
  )
}

