'use client'
import { useState } from 'react'

interface FilterDropdownProps {
  options: string[]
  onSelect: (value: string) => void
  placeholder: string
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ options, onSelect, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedValue(value)
    onSelect(value)
  }

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default FilterDropdown

