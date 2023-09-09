'use client'

import { useParams } from 'next/navigation'

const Name = () => {
  const { name } = useParams()

  return (
    <div>
      <h1>Hi, {name}!</h1>
    </div>
  )
}

export default Name
