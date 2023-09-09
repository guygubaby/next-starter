import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const url = req.url
  return NextResponse.json({ url, msg: 'It works' })
}
