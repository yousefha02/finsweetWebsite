export default function Growing()
{
    return(
        <div className=" relative overflow-hidden">
            <div className="contianer max-auto px-6 py-[80px] text-center">
                <h2 className="text-[32px] leading-[34px] md:text-[48px] font-semibold text-btn md:leading-[50px] mb-4 lg:mb-8">Are you ready to grow your business with us?</h2>
                <p className="text-btn text-[16px] leading-6 mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                <button className=" bg-btn text-white w-[171px] rounded-xl text-[16px] h-[56px] hover:bg-[#313852] duration-300">View Pricing</button>
            </div>
            <div className="content -z-40 absolute w-[1977px] h-[1154px] top-[-117px] left-[0] max-w-full" ></div>
        </div>
    )
}