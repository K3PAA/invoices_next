import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      src='/logo.svg'
      width={40}
      height={40}
      alt='logo'
      className='relative z-[100]'
    />
  )
}
