import { MdLocationOn } from 'react-icons/md'
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import Button from '../Button'

const ContactContent = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center max-w-[1700px] gap-y-12 lg:gap-y-0 mx-auto py-16 font-Roboto overflow-hidden">
      {/* left Component */}
      <div className="w-full lg:w-1/2 flex flex-col gap-y-6 md:gap-y-10 border-r border-black/10 px-10 md:px-16">
        <h1 className='text-4xl md:text-7xl font-bold tracking-tighter'>Get In Touch</h1>
        <p>Sit vulputate faucibus eget eget scelerisque faucibus malesuada nullam mollis ut montes, dui scelerisque ornare.</p>
        <div className="flex items-start gap-x-4">
          <MdLocationOn className='text-2xl text-[#FF5100]' />
          <div className='space-y-2'>
            <span className='uppercase tracking-wider font-bold text-lg'>Visit us</span>
            <p className='font-semibold text-black/75'>123 Demo St, San Francisco, CA 45678, United States</p>
          </div>
        </div>
        <div className='flex items-start gap-x-4'>
          <BsFillTelephoneFill className='text-xl -rotate-90 text-[#FF5100]' />
          <div className='space-y-2'>
            <span className='uppercase tracking-wider font-bold text-lg'>call us</span>
            <p className='font-semibold text-black/75'>+1 123-456-7890</p>
          </div>
        </div>
        <div className='flex items-start gap-x-4 '>
          <GrMail className='text-xl text-[#FF5100]' />
          <div className='space-y-2'>
            <span className='uppercase tracking-wider font-bold text-lg'>email us</span>
            <p className='font-semibold text-black/75'>mail@example.com</p>
          </div>
        </div>
        <div className='w-[550px] mx-auto h-px bg-black/10 '></div>
        <div className='flex flex-col gap-y-4'>
          <span className='uppercase tracking-widest font-bold text-lg'>follow us</span>
          <div className='flex items-center gap-x-6 text-2xl '>
            <BsInstagram />
            <BsFacebook />
            <BsYoutube />
            <BsWhatsapp />
          </div>
        </div>
      </div>

      {/* Right Component */}
      <div className='w-full lg:w-1/2 flex flex-col gap-y-8 px-10 lg:px-24 py-8'>
        <h3 className='text-4xl font-bold tracking-tighter'>Drop us a line or two</h3>
        <div className='flex flex-col gap-y-2'>
          <label className='font-semibold'>Name</label>
          <input type="text" className='p-3 border border-black/20 text-black/70 bg-white/50 rounded focus:bg-transparent outline-none ' placeholder='Full name' />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label className='font-semibold'>Email</label>
          <input type="Email" className='p-3 border border-black/20 text-black/70 bg-white/50 rounded focus:bg-transparent outline-none ' placeholder='Email address' />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label className='font-semibold '>Comment or Message</label>
          <textarea name="comment" id="comment" cols="30" rows="5" className='p-3 border border-black/20 text-black/70 bg-white/50 rounded focus:bg-transparent outline-none resize-none' placeholder='Your message'></textarea>
        </div>
        <Button className={'bg-[#FF5100] text-white rounded w-32'}>Submit</Button>
      </div>
    </div>
  )
}

export default ContactContent