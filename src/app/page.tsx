import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='mt-8 max-w-xl mx-auto'>
      <Button variant='destructive'>Delete</Button>
      <Button variant='default'>Mark as Paid</Button>
      <Button variant='secondary'>+ add new item </Button>
      <Button variant='accent'>Save as draft</Button>
    </main>
  )
}
