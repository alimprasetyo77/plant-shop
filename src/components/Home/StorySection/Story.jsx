import Button from "../../Button"
import image from '../../../assets/okeykat-tgxqpsVG-0A-unsplash.jpg'
const Story = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row items-center relative lg:static">
            <div className="w-full lg:w-1/2">
                <img src={image} />
            </div>
            <div className="max-w-3xl sm:max-w-4xl lg:w-1/2 bottom-0 static md:absolute lg:static bg-white mx-4 lg:mx-0 lg:bg-none rounded  lg:rounded-none h-auto py-6 lg:py-28 px-8 lg:px-16 font-Roboto  flex justify-center  ">
                <div className="space-y-4 w-full">
                    <h3 className="font-bold text-base md:text-lg uppercase">Our Story</h3>
                    <h1 className="font-extrabold text-[30px] md:text-[40px] capitalize">For People Who Love Plants</h1>
                    <p className="text-base text-[#575250]">Vivamus quam sociis tristique diam at donec nisl, hendrerit leo nunc at velit lacinia porttitor a nulla tellus ultrices varius aliquet sed in placerat.</p>
                    <p className="text-base text-[#575250]">Facilisis eu faucibus diam cursus pulvinar consectetur purus sem felis, mauris consectetur nisl vitae gravida ultricies sem condimentum aliquet ut sed gravida amet vitae euismod pulvinar volutpat laoreet pharetra.</p>
                    <Button className={'bg-[#FF5100] text-white'} >Read More</Button>

                </div>
            </div>
        </div>
    )
}

export default Story