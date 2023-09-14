'use client'

import { Button, Input } from 'antd'
import { useRouter } from 'next/navigation'

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
    <main className="min-h-screen flex flex-col items-center p-24 ring [&>p]:text-xl">
      <p className="flex items-center gap-2">
        <span>It works!</span>
        <span className="i-carbon-favorite-filled text-red"></span>
      </p>

      <div className="my-8">
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Input your name"
        ></Input>
      </div>

      <Button type="primary" onClick={go}>
        Go
      </Button>
    </main>
  )
}
