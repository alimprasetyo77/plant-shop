import Button from "../../Button"

const GiftCard = () => {
    return (
        <div className="w-screen h-[500px] md:h-[600px] p-4 md:p-8 bg-[url('./assets/angele-kamp-OSRpN1D52EM-unsplash.jpg')] bg-no-repeat bg-cover bg-center text-white bg-black/50 bg-blend-multiply font-Roboto relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className='w-screen flex flex-col text-center items-center gap-y-8 px-8'>
                    <h3 className='font-bold uppercase tracking-[2px]'>GIFT CARD</h3>
                    <h1 className='capitalize  font-bold text-5xl md:text-6xl xl:text-7xl break-words'>Give the Gift of Greenery</h1>
                    <p className="font-semibold">
                        Pretium tortor risus enim neque quis pellentesque maecenas proin odio eget arcu
                    </p>
                    <Button className={'bg-white'}>Purchase A Gift Card</Button>
                </div>
            </div>
        </div>
    )
}

export default GiftCard