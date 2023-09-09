import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className='mb-10'>it works!</p>
      <Link href='/hi/bryce'>GO</Link>
    </main>
  )
}
