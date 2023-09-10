import process from 'node:process'
import OpenAI from 'openai'
import type { Message } from 'ai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const API_KEY = process.env.API_KEY
const RESOURCE_ID = process.env.RESOURCE_ID
const API_VERSION = process.env.API_VERSION || '2023-07-01-preview'
const MODEL = 'gpt4'

const openai = new OpenAI({
  apiKey: API_KEY,
  baseURL: `https://${RESOURCE_ID}.openai.azure.com/openai/deployments/${MODEL}`,
  defaultQuery: { 'api-version': API_VERSION },
  defaultHeaders: { 'api-key': API_KEY, 'Content-Type': 'application/json' },
})

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json() as { messages: Message[] }

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: MODEL,
    stream: true,
    messages,
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}
