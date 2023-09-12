'use client'

import { useRouter } from 'next/navigation'
import { Button, Input } from '@nextui-org/react'
import { useRef, useState } from 'react'

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState('')
  const router = useRouter()

  const go = () => {
    if (!name) {
      inputRef.current?.focus()
      return
    }

    router.push(`/hi/${name}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 ring">
      <p className="flex items-center gap-2">
        <span>It works!</span>
        <span className="i-carbon-favorite-filled text-red-500"></span>
      </p>

      <div className="my-8">
        <Input
          className="w-full"
          ref={inputRef}
          value={name}
          onValueChange={val => setName(val)}
          placeholder="What is your name?"
        ></Input>
      </div>

      <Button onClick={() => go()}>Go</Button>
    </main>
  )
}
