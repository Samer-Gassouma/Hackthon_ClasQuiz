'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

interface ReplyFormProps {
  onSubmit: (text: string, attachments: File[]) => void
}

const ReplyForm: React.FC<ReplyFormProps> = ({ onSubmit }) => {
  const [replyText, setReplyText] = useState('')
  const [attachments, setAttachments] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(replyText, attachments)
    setReplyText('')
    setAttachments([])
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="reply" className="block text-sm font-medium text-gray-700 mb-2">
          Your Reply
        </label>
        <Textarea
          id="reply"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          rows={4}
          placeholder="Type your reply here..."
          required
        />
      </div>
      <div>
        <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-2">
          Attachments
        </label>
        <Input
          id="attachments"
          type="file"
          onChange={handleFileChange}
          multiple
          ref={fileInputRef}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
      <Button type="submit">Send Reply</Button>
    </form>
  )
}

export default ReplyForm

