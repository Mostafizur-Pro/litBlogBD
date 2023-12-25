import Image from 'next/image'

import React from 'react'
import Image1 from "../../../public/HeroSection/Img-1.jpeg";
import Advertisement from '../Advertisement/Advertisement';

/**
 * Our BannerCard is a reusable UI component used to display a top section of our website
 *
 * @property featured image, a heading, author name and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const EditorPick = () => {
    return (
        <div>
            <div className='flex justify-between m-2 '>
                <h2 className='font-bold text-4xl'>Editor Pick</h2>
                <button className="btn btn-outline">VIEW ALL POST</button>

            </div>
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-6 mt-5 p-2'>

                <div className='flex justify-between m-2 '>
                    <div>

                        <Image className='w-48 rounded-md ' src={Image1} alt=""></Image>

                    </div>
                    <div className='flex flex-col ps-2 '>
                        <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                        <h1>Dec 27, 3023</h1>
                    </div>
                </div>
                <div className='flex justify-between m-2 '>
                    <div>
                        <Image className='w-48 rounded-md ' src={Image1} alt=""></Image>
                    </div>
                    <div className='flex flex-col ps-2'>
                        <h4 className='font-bold text-2xl'>Editor Pick thisis the title</h4>
                        <h1>Dec 27, 2023</h1>
                    </div>
                </div>
                <div className='flex justify-between m-2 '>
                    <div>
                        <Image className='w-48 rounded-md ' src={Image1} alt=""></Image>
                    </div>
                    <div className='flex flex-col ps-2'>
                        <h4 className='font-bold text-2xl'>Editor Pick thisis the title</h4>
                        <h1>Dec 27, 2023</h1>
                    </div>
                </div>
                <div className='flex justify-between m-2 '>
                    <div>

                        <Image className='w-48 rounded-md ' src={Image1} alt=""></Image>

                    </div>
                    <div className='flex flex-col ps-2'>
                        <h4 className='font-bold text-2xl'>Editor Pick thisis the title</h4>
                        <h1>Dec 27, 2023</h1>
                    </div>
                </div>
                <div className='flex justify-between m-2 '>
                    <div>

                        <Image className='w-48 rounded-md ' src={Image1} alt=""></Image>

                    </div>
                    <div className='flex flex-col ps-2'>
                        <h4 className='font-bold text-2xl'>Editor Pick thisis the title</h4>
                        <h1>Dec 27, 2023</h1>
                    </div>
                </div>
                <div className='flex justify-between  m-2 '>
                    <div >

                        <Image className='w-48 rounded-md ' src={Image1} alt=""></Image>

                    </div>
                    <div className='flex flex-col  ps-2'>
                        <h4 className='font-bold text-2xl'>Editor Pick  thisis the title</h4>
                        <h1>Dec 27, 2023</h1>
                    </div>
                </div>

            </div>

            {/* weekly post */}
            <div className='m-2'>
                <div className='grid grid-cols-3  gap-4'>
                    {/* weekly post image*/}

                    <div className='col-span-2'>
                        <div className='flex justify-between m-2 '>
                            <h2 className='font-bold text-4xl'>Weekly Post</h2>
                            <button className="btn btn-outline">VIEW ALL POST</button>

                        </div>
                        <div className='m-2'>

                            <Image className='w-full rounded-md' src={Image1} alt="" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">

                            <div className='flex justify-between items-center m-2 '>
                                <div>
                                    <Image className='w-48 rounded-md ' src={Image1} alt="" />
                                </div>
                                <div className='flex flex-col ps-2 '>
                                    <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                    <h1>Dec 27, 2023</h1>
                                </div>
                            </div>

                            <div className='flex justify-between items-center m-2 '>
                                <div>
                                    <Image className='w-48 rounded-md ' src={Image1} alt="" />
                                </div>
                                <div className='flex flex-col ps-2 '>
                                    <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                    <h1>Dec 27, 2023</h1>
                                </div>
                            </div>

                            <div className='flex justify-between items-center m-2 '>
                                <div>
                                    <Image className='w-48 rounded-md ' src={Image1} alt="" />
                                </div>
                                <div className='flex flex-col ps-2 '>
                                    <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                    <h1>Dec 27, 2023</h1>
                                </div>
                            </div>

                            <div className='flex justify-between items-center m-2 '>
                                <div>
                                    <Image className='w-48 rounded-md ' src={Image1} alt="" />
                                </div>
                                <div className='flex flex-col ps-2 '>
                                    <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                    <h1>Dec 27, 2023</h1>
                                </div>
                            </div>

                            <div className='flex justify-between items-center m-2 '>
                                <div>
                                    <Image className='w-48 rounded-md ' src={Image1} alt="" />
                                </div>
                                <div className='flex flex-col ps-2 '>
                                    <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                    <h1>Dec 27, 2023</h1>
                                </div>
                            </div>

                            <div className='flex justify-between items-center m-2 '>
                                <div>
                                    <Image className='w-48 rounded-md ' src={Image1} alt="" />
                                </div>
                                <div className='flex flex-col ps-2 '>
                                    <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                    <h1>Dec 27, 2023</h1>
                                </div>
                            </div>
                        </div>
                        {/* add section */}
                        <div className='bg-slate-300 h-32 m-12 p-8 rounded-lg text-center text-white'>
                            <p>Advertisement</p>
                            <h4 className='font-bold text-2xl '>You can place add </h4>
                            <p>750*1200</p>
                        </div>
                        {/* another latest */}
                        <div className='flex justify-between m-2 '>
                            <h2 className='font-bold text-4xl'>Latest Post</h2>
                            <button className="btn btn-outline">VIEW ALL POST</button>

                        </div>
                        <div className="grid grid-cols-2 gap-4">

                            <div className='m-2'>

                                <Image className='w-full rounded-md' src={Image1} alt="" />
                            </div>
                            <div className='m-2'>

                                <Image className='w-full rounded-md' src={Image1} alt="" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            <div className='flex justify-between items-center m-2 '>
                                <div>
                                    <Image className='w-48 rounded-md ' src={Image1} alt="" />
                                </div>
                                <div className='flex flex-col ps-2 '>
                                    <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                    <h1>Dec 27, 2023</h1>
                                </div>
                            </div>

                            <div className='flex justify-between items-center m-2 '>
                                <div>
                                    <Image className='w-48 rounded-md ' src={Image1} alt="" />
                                </div>
                                <div className='flex flex-col ps-2 '>
                                    <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                    <h1>Dec 27, 2023</h1>
                                </div>
                            </div>

                            <div className='flex justify-between items-center m-2 '>
                                <div>
                                    <Image className='w-48 rounded-md ' src={Image1} alt="" />
                                </div>
                                <div className='flex flex-col ps-2 '>
                                    <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                    <h1>Dec 27, 2023</h1>
                                </div>
                            </div>

                            <div className='flex justify-between items-center m-2 '>
                                <div>
                                    <Image className='w-48 rounded-md ' src={Image1} alt="" />
                                </div>
                                <div className='flex flex-col ps-2 '>
                                    <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                    <h1>Dec 27, 2023</h1>
                                </div>
                            </div>

                            <div className='flex justify-between items-center m-2 '>
                                <div>
                                    <Image className='w-48 rounded-md ' src={Image1} alt="" />
                                </div>
                                <div className='flex flex-col ps-2 '>
                                    <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                    <h1>Dec 27, 2023</h1>
                                </div>
                            </div>

                            <div className='flex justify-between items-center m-2 '>
                                <div>
                                    <Image className='w-48 rounded-md ' src={Image1} alt="" />
                                </div>
                                <div className='flex flex-col ps-2 '>
                                    <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                    <h1>Dec 27, 2023</h1>
                                </div>
                            </div>
                        </div>
                        {/* another add */}
                        <div className='bg-slate-300 h-32 m-12 p-8 rounded-lg text-center text-white'>
                            <p>Advertisement</p>
                            <h4 className='font-bold text-2xl '>You can place add </h4>
                            <p>750*1200</p>
                        </div>

                    </div>


                    {/* latest post */}
                    <div className='col-span-1'>

                        <h2 className='font-bold text-4xl m-4'>latest Post</h2>

                        <div className='flex justify-between items-center m-2 '>
                            <div>
                                <Image className='w-48 rounded-md ' src={Image1} alt="" />
                            </div>
                            <div className='flex flex-col ps-2 '>
                                <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                <h1>Dec 27, 2023</h1>
                            </div>
                        </div>

                        <div className='flex justify-between items-center m-2 '>
                            <div>
                                <Image className='w-48 rounded-md ' src={Image1} alt="" />
                            </div>
                            <div className='flex flex-col ps-2 '>
                                <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                <h1>Dec 27, 2023</h1>
                            </div>
                        </div>

                        <div className='flex justify-between items-center m-2 '>
                            <div>
                                <Image className='w-48 rounded-md ' src={Image1} alt="" />
                            </div>
                            <div className='flex flex-col ps-2 '>
                                <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                <h1>Dec 27, 2023</h1>
                            </div>
                        </div>

                        <div className='flex justify-between items-center m-2 '>
                            <div>
                                <Image className='w-48 rounded-md ' src={Image1} alt="" />
                            </div>
                            <div className='flex flex-col ps-2 '>
                                <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                <h1>Dec 27, 2023</h1>
                            </div>
                        </div>

                        <div className='flex justify-between items-center m-2 '>
                            <div>
                                <Image className='w-48 rounded-md ' src={Image1} alt="" />
                            </div>
                            <div className='flex flex-col ps-2 '>
                                <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                <h1>Dec 27, 2023</h1>
                            </div>
                        </div>

                        <div className='flex justify-between items-center m-2 '>
                            <div>
                                <Image className='w-48 rounded-md ' src={Image1} alt="" />
                            </div>
                            <div className='flex flex-col ps-2 '>
                                <h4 className='font-bold text-2xl '>Editor Pick thisis the title</h4>
                                <h1>Dec 27, 2023</h1>
                            </div>
                        </div>
                        {/* category */}
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className='text-3xl font-bold'>Category</h2>
                                <div className='flex justify-between'>
                                    <h2 className='text-2xl'>Technology</h2>
                                    <h2 className=" bg-accent p-1 rounded rounded-lg text-white font-bold text-xl">32</h2>
                                </div>
                                <hr />
                                <div className='flex justify-between'>
                                    <h2 className='text-2xl'>Lifestyle</h2>
                                    <h2 className=" bg-accent p-1 rounded rounded-lg text-white font-bold text-xl">32</h2>
                                </div>
                                <hr />
                                <div className='flex justify-between'>
                                    <h2 className='text-2xl'>Photography</h2>
                                    <h2 className=" bg-accent p-1 rounded rounded-lg text-white font-bold text-xl">32</h2>
                                </div>
                                <hr />
                                <div className='flex justify-between'>
                                    <h2 className='text-2xl'>Health & Fitness</h2>
                                    <h2 className=" bg-accent p-1 rounded rounded-lg text-white font-bold text-xl">32</h2>
                                </div>
                                <hr />
                                <div className='flex justify-between'>
                                    <h2 className='text-2xl'>Business</h2>
                                    <h2 className=" bg-accent p-1 rounded rounded-lg text-white font-bold text-xl">32</h2>
                                </div>
                                <hr />
                                <div className='flex justify-between'>
                                    <h2 className='text-2xl'>Marketing</h2>
                                    <h2 className=" bg-accent p-1 rounded rounded-lg text-white font-bold text-xl">32</h2>
                                </div>

                            </div>
                        </div>

                        {/*  add */}
                        <div className='bg-slate-300 h-96   rounded-lg text-center text-white items-center flex p-8 m-12	'>
                            <div>
                                <h3>Advertisement</h3>
                                <h4 className='font-bold text-2xl '>You can place add </h4>
                                <h3>750*1200</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorPick
