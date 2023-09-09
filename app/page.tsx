import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>it works!</p>
      <span className="i-carbon-threshold my-10"></span>
      <button className="animate-bounce delay-150 duration-300 ">
        Button A
      </button>
      <Link className="mt-10 text-slate-500" href="/hi/bryce">
        GO
      </Link>
    </main>
  )
}
