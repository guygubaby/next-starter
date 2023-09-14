'use client'

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
    <main className="flex min-h-screen flex-col items-center p-24 ring [&>p]:text-2xl">
      <p className="flex items-center gap-2">
        <span className="text-red">It works!</span>
        <span className="i-carbon-favorite-filled text-red-500"></span>
      </p>

      <div className="my-8">
        a
      </div>

    </main>
  )
}
