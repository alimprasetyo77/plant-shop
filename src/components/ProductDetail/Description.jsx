/* eslint-disable react/prop-types */

const Description = ({image}) => {
  return (
    <div className="flex flex-col gap-4 py-10 px-4 border-b border-gray-900/20">
        <h1 className="text-4xl font-bold text-black/90">Maecenas efficitur ornare massa.</h1>
        <span className="text-xl font-semibold">Duis auctor nisl vitae purus interdum, quis congue lacus rutrum.</span>
        <p className="text-black/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac massa eget urna tempor vehicula vel id nisi. Pellentesque sed felis auctor, molestie lectus vitae, elementum orci. In et nunc consequat, semper tellus eget, euismod quam.</p>
        <div className="flex items-center bg-gray-900/10 ">
            <div className="w-1/2">
                <img src={image} alt="image" className="w-full h-auto object-center object-cover" />
            </div>
            <div className="w-1/2 px-16 font-medium space-y-4">
                <h4 className="text-base">Nunc tempus</h4>
                <h2 className="text-3xl">Duis vel ipsum vitae est semper varius.</h2>
                <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div> 
        <div className="flex items-start p-8">
            <div className="w-1/2">
                <h1 className="text-3xl font-bold">Sad Plants Signs</h1>
            </div>
            <div className="w-1/2 flex flex-col font-normal text-black/70">
                <span className="w-full px-2 py-4 border bg-slate-50">Duis vel ipsum vitae est semper varius in id</span>
                <span className="w-full px-2 py-4 border bg-slate-50">Class aptent taciti sociosqu</span>
                <span className="w-full px-2 py-4 border bg-slate-50">Litora torquent per conubia nostra per</span>
                <span className="w-full px-2 py-4 border bg-slate-50">Inceptos himenaeos praesent</span>
                <span className="w-full px-2 py-4 border bg-slate-50">Fermentum elit eget</span>
            </div>
        </div>
    </div>
  )
}

export default Description