import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>it works!</p>

      <Link href="/hi/bryce">
        <Button className="mt-10">Click me</Button>
      </Link>
    </main>
  )
}
