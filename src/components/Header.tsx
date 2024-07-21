import Image from 'next/image'
import Logo from './Logo'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className='flex flex-col items-start bg-draft rounded-r-2xl overflow-hidden'>
      <div className='relative p-8  bg-primary-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-1/2 after:bg-primary-400 after:rounded-tl-2xl rounded-r-2xl overflow-hidden'>
        <Logo />
      </div>

      <div className='mt-auto mb-6 flex flex-col w-full items-center justify-center itmes-center  '>
        <div className=''>
          <Button variant='ghost' size='icon'>
            <Image src='/icon-moon.svg' width={20} height={20} alt='moon' />
          </Button>
        </div>

        <div className='h-[1px] w-full bg-[#494E6E] mt-8'></div>

        <div className='mt-6'>
          <Image
            src='/image-avatar.jpg'
            width={40}
            height={40}
            alt='avatar'
            className='rounded-full w-10 h-10 object-cover'
          />
        </div>
      </div>
    </header>
  )
}
