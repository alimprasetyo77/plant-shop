/* eslint-disable react/prop-types */
import { FaRegDotCircle } from 'react-icons/fa'
const Description = ({ image }) => {
  return (
    <div className="flex flex-col flex-wrap gap-4 py-10 px-4 border-b border-gray-900/20 font-Roboto">
      <h1 className="text-xl md:text-4xl font-bold text-black/90">Maecenas efficitur ornare massa.</h1>
      <span className="text-lg md:text-xl font-semibold">Duis auctor nisl vitae purus interdum, quis congue lacus rutrum.</span>
      <p className="text-sm md:text-base text-black/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac massa eget urna tempor vehicula vel id nisi. Pellentesque sed felis auctor, molestie lectus vitae, elementum orci. In et nunc consequat, semper tellus eget, euismod quam.</p>
      <div className="flex items-center bg-gray-900/10 overflow-hidden relative md:static">
        <div className="w-full md:w-1/2 md:mx-0 ">
          <img src={image} alt="image" className="w-full h-96 object-center object-cover " />
        </div>
        <div className="absolute md:static inset-0 flex flex-col items-start w-full md:w-1/2 px-8 md:px-16 py-6 font-medium space-y-4 justify-center bg-black/20 text-white md:text-black shadow-lg md:shadow-none md:bg-transparent rounded-sm">
          <h4 className="text-xs lg:text-base">Nunc tempus</h4>
          <h2 className="text-xl md:text-2xl lg:text-3xl">Duis vel ipsum vitae est semper varius.</h2>
          <p className="text-base md:text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start py-8 ">
        <div className="w-full md:w-1/2">
          <h1 className="text-xl md:text-3xl font-bold">Sad Plants Signs</h1>
        </div>
        <div className="w-full md:w-1/2 flex flex-col font-normal text-black/70">
          <span className="w-full py-4 border-b flex items-center gap-x-2 md:gap-x-5"><FaRegDotCircle />Duis vel ipsum vitae est semper varius in id</span>
          <span className="w-full py-4 border-b flex items-center gap-x-2 md:gap-x-5"><FaRegDotCircle /> Class aptent taciti sociosqu</span>
          <span className="w-full py-4 border-b flex items-center gap-x-2 md:gap-x-5"><FaRegDotCircle /> Litora torquent per conubia nostra per</span>
          <span className="w-full py-4 border-b flex items-center gap-x-2 md:gap-x-5"><FaRegDotCircle /> Inceptos himenaeos praesent</span>
          <span className="w-full py-4 border-b flex items-center gap-x-2 md:gap-x-5"><FaRegDotCircle /> Fermentum elit eget</span>
        </div>
      </div>
    </div>
  )
}

export default Description