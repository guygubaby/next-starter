'use client'

import { useParams } from 'next/navigation'

export default function MyComponent() {
  const params = useParams()
  const nameParam = params.name

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      Hi {nameParam}
    </div>
  )
}
