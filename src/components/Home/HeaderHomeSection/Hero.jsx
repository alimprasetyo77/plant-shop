import Button from '../../Button'

const Hero = () => {
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
      <div className='max-w-4xl w-screen flex flex-col text-center items-center gap-y-8 px-8 font-Roboto'>
        <h3 className='font-bold uppercase tracking-[2px] text-lg'>welcome to greenstore</h3>
        <h1 className='capitalize  font-bold text-5xl md:text-6xl xl:text-7xl break-words'>Let’s Bring the Spring to Your Home</h1>
        <Button className={'bg-white'}>Shop now</Button>
      </div>
    </div>
  )
}

export default Hero