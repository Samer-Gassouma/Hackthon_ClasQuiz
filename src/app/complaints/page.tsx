'use client'

import { useState, useEffect } from 'react'
import ComplaintCard from '@/components/ComplaintCard'
import SearchBar from '@/components/SearchBar'
import FilterDropdown from '@/components/FilterDropdown'

interface Complaint {
  id: string
  title: string
  priority: string
  department: string
  date: string
  description: string
}

// Mock data for demonstration
const mockComplaints: Complaint[] = [
  { id: '1', title: 'Payment not processed', priority: 'Important', department: '', date: '2023-05-01', description: 'My payment has not been processed for 48 hours.' },
  { id: '2', title: 'Login issues', priority: 'Urgent', department: '', date: '2023-05-02', description: 'I cannot log in to my account.' },
  { id: '3', title: 'Refund request', priority: 'Regular', department: '', date: '2023-05-03', description: 'I would like to request a refund for my recent purchase.' },
]

const assignDepartment = (complaint: Complaint): string => {
  const keywords = {
    Technical: ['login', 'password', 'account', 'website', 'app'],
    Billing: ['payment', 'refund', 'charge', 'invoice', 'bill'],
    'Customer Service': ['service', 'support', 'help', 'assistance', 'inquiry']
  }

  for (const [dept, words] of Object.entries(keywords)) {
    if (words.some(word => complaint.title.toLowerCase().includes(word) || complaint.description.toLowerCase().includes(word))) {
      return dept
    }
  }

  return 'General'
}

export default function Complaints() {
  const [complaints, setComplaints] = useState<Complaint[]>([])
  const [filteredComplaints, setFilteredComplaints] = useState<Complaint[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState({ priority: '', department: '' })

  useEffect(() => {
    // Simulate API call and assign departments
    const assignedComplaints = mockComplaints.map(complaint => ({
      ...complaint,
      department: assignDepartment(complaint)
    }))
    setComplaints(assignedComplaints)
    setFilteredComplaints(assignedComplaints)
  }, [])

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterComplaints(term, filter)
  }

  const handleFilter = (type: string, value: string) => {
    const newFilter = { ...filter, [type]: value }
    setFilter(newFilter)
    filterComplaints(searchTerm, newFilter)
  }

  const filterComplaints = (search: string, filters: typeof filter) => {
    let result = complaints

    if (search) {
      result = result.filter(complaint => complaint.id.includes(search))
    }

    if (filters.priority) {
      result = result.filter(complaint => complaint.priority === filters.priority)
    }

    if (filters.department) {
      result = result.filter(complaint => complaint.department === filters.department)
    }

    setFilteredComplaints(result)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Complaints</h1>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <SearchBar onSearch={handleSearch} />
        <div className="flex space-x-4">
          <FilterDropdown
            options={['Urgent', 'Important', 'Regular']}
            onSelect={(value) => handleFilter('priority', value)}
            placeholder="Priority"
          />
          <FilterDropdown
            options={['Technical', 'Customer Service', 'Billing', 'General']}
            onSelect={(value) => handleFilter('department', value)}
            placeholder="Department"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredComplaints.map((complaint) => (
          <ComplaintCard key={complaint.id} complaint={complaint} />
        ))}
      </div>
    </div>
  )
}

