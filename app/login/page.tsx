'use client'

import { Button, Card, Input, Spacer } from '@nextui-org/react'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
  }

  return (
    <Card className='flex justify-center items-center w-screen h-screen'>
      <h1>Login</h1>
      <Spacer y={1} />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Spacer y={0.5} />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Spacer y={1} />
      <Button onClick={handleLogin}>Login</Button>
    </Card>
  )
}
