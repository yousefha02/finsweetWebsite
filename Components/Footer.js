import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Footer()
{
    return(
        <footer className="bg-btn">
            <div className="contianer mx-auto px-6 pt-[60px] text-white grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div>
                    <h3 className="text-[18px] mb-1">Company</h3>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">About Us</p>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">Why Choose us</p>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">Pricing</p>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">Testimonial</p>
                </div>
                <div>
                    <h3 className="text-[18px]">Resources</h3>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">Privacy Policy</p>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">Why Choose us</p>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">Blog</p>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">Contact Us</p>
                </div>
                <div>
                    <h3 className="text-[18px] mb-1">Product</h3>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">Project managment</p>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">Time tracker</p>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">Time schedule</p>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">Lead generate</p>
                    <p className=" text-[#fff] opacity-50 text-[16px] mb-1">Remote Collaboration</p>
                </div>
                <div>
                    <h2 className=" text-2xl font-bold mb-4">Finsweet</h2>
                    <h3 className="mb-5">Subscribe to our Newsletter</h3>
                    <div className='w-[250px] sm:w-[410px] ml-0 bg-[#2B2E3C] h-[50px] mb-12 rounded-[20px] max-w-full flex-wrap flex items-center justify-between'>
                    <input
                    type="email"
                    placeholder="Enter Your Email"
                    className='rounded-[20px] bg-[#2B2E3C] flex items-center h-[50px] p-2 w-[60%]'
                    />
                    <button className=" bg-white text-btn w-[40%] rounded-xl p-1 text-[16px] h-[50px] duration-300">Subscribe</button>
            </div>
                </div>
            </div>
            <div className="contianer mx-auto px-6 text-[#fff] opacity-50 pb-16 flex items-center gap-5">
                <span className=' h-[1px] bg-[#fff] opacity-50 flex-grow'></span>
                <div className='flex gap-5 m-auto items-center'>
                    <span className='text-[12px] w-fit'>© Copyright Finsweet 2022</span>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaLinkedin/>
                    <FaTwitter/>
                </div>
                <span className=' h-[1px] bg-[#fff] flex-grow opacity-50'></span>
            </div>
        </footer>
    )
}