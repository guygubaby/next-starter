import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  return NextResponse.json({ hello: 'world' })
}
