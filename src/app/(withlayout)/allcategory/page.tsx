import React from 'react';
import Image1 from "../../../../public/img-1.jpeg";
import Image2 from "../../../../public/img-2.jpg";
import Image from 'next/image'

const CategoryAll = () => {
    return (
        <div>
            <div>
                <div className='grid grid-cols-3  gap-4 m-2'>
                    {/* first colum */}
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
                        <div className='bg-slate-300 h-96 w-64  rounded-lg text-center text-white items-center justify-items-center flex p-8 m-8	'>
                            <div>
                                <h3>Advertisement</h3>
                                <h4 className='font-bold text-2xl '>You can place add </h4>
                                <h3>750*1200</h3>
                            </div>
                        </div>
                    </div>
                    {/* last part */}
                    <div className="col-span-2 ">
                        {/* technology part */}
                        <div className='m-4'>
                            <div className='my-4'>

                                <Image className='w-full rounded-md' src={Image1} alt="" />
                            </div>
                            {/* card layout */}
                            <div className='grid grid-cols-2 gap-4'>
                                <div className="card w-96 glass">
                                    <figure><Image className='w-full' src={Image1} alt="Image!" /></figure>
                                    <div className="card-body">
                                        <div className="card-actions justify-start">
                                            <button className="btn btn-primary btn-sm">Classic</button>
                                        </div>
                                        <h2 className="card-title text-2xl">How to market your Business to grow faster</h2>
                                        {/* avatar */}
                                        <div className='flex justify-between items-center'>
                                            <div className="avatar">
                                                <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <Image alt='' src={Image2} />
                                                </div>
                                            </div>
                                            <h2 className="text-xl">Metablog</h2>
                                            <h2 className="text-xl">Dec 27, 2023</h2>

                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 glass">
                                    <figure><Image className='w-full' src={Image1} alt="Image!" /></figure>
                                    <div className="card-body">
                                        <div className="card-actions justify-start">
                                            <button className="btn btn-primary btn-sm">Classic</button>
                                        </div>
                                        <h2 className="card-title text-2xl">How to market your Business to grow faster</h2>
                                        {/* avatar */}
                                        <div className='flex justify-between items-center'>
                                            <div className="avatar">
                                                <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <Image alt='' src={Image2} />
                                                </div>
                                            </div>
                                            <h2 className="text-xl">Metablog</h2>
                                            <h2 className="text-xl">Dec 27, 2023</h2>

                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 glass">
                                    <figure><Image className='w-full' src={Image1} alt="Image!" /></figure>
                                    <div className="card-body">
                                        <div className="card-actions justify-start">
                                            <button className="btn btn-primary btn-sm">Classic</button>
                                        </div>
                                        <h2 className="card-title text-2xl">How to market your Business to grow faster</h2>
                                        {/* avatar */}
                                        <div className='flex justify-between items-center'>
                                            <div className="avatar">
                                                <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <Image alt=' al' src={Image2} />
                                                </div>
                                            </div>
                                            <h2 className="text-xl">Metablog</h2>
                                            <h2 className="text-xl">Dec 27, 2023</h2>

                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 glass">
                                    <figure><Image className='w-full' src={Image1} alt="Image!" /></figure>
                                    <div className="card-body">
                                        <div className="card-actions justify-start">
                                            <button className="btn btn-primary btn-sm">Classic</button>
                                        </div>
                                        <h2 className="card-title text-2xl">How to market your Business to grow faster</h2>
                                        {/* avatar */}
                                        <div className='flex justify-between items-center'>
                                            <div className="avatar">
                                                <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <Image alt='' src={Image2} />
                                                </div>
                                            </div>
                                            <h2 className="text-xl">Metablog</h2>
                                            <h2 className="text-xl">Dec 27, 2023</h2>

                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 glass">
                                    <figure><Image className='w-full' src={Image1} alt="Image!" /></figure>
                                    <div className="card-body">
                                        <div className="card-actions justify-start">
                                            <button className="btn btn-primary btn-sm">Classic</button>
                                        </div>
                                        <h2 className="card-title text-2xl">How to market your Business to grow faster</h2>
                                        {/* avatar */}
                                        <div className='flex justify-between items-center'>
                                            <div className="avatar">
                                                <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <Image alt='' src={Image2} />
                                                </div>
                                            </div>
                                            <h2 className="text-xl">Metablog</h2>
                                            <h2 className="text-xl">Dec 27, 2023</h2>

                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 glass">
                                    <figure><Image className='w-full' src={Image1} alt="Image!" /></figure>
                                    <div className="card-body">
                                        <div className="card-actions justify-start">
                                            <button className="btn btn-primary btn-sm">Classic</button>
                                        </div>
                                        <h2 className="card-title text-2xl">How to market your Business to grow faster</h2>
                                        {/* avatar */}
                                        <div className='flex justify-between items-center'>
                                            <div className="avatar">
                                                <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <Image alt='' src={Image2} />
                                                </div>
                                            </div>
                                            <h2 className="text-xl">Metablog</h2>
                                            <h2 className="text-xl">Dec 27, 2023</h2>

                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 glass">
                                    <figure><Image className='w-full' src={Image1} alt="Image!" /></figure>
                                    <div className="card-body">
                                        <div className="card-actions justify-start">
                                            <button className="btn btn-primary btn-sm">Classic</button>
                                        </div>
                                        <h2 className="card-title text-2xl">How to market your Business to grow faster</h2>
                                        {/* avatar */}
                                        <div className='flex justify-between items-center'>
                                            <div className="avatar">
                                                <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <Image alt='' src={Image2} />
                                                </div>
                                            </div>
                                            <h2 className="text-xl">Metablog</h2>
                                            <h2 className="text-xl">Dec 27, 2023</h2>

                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 glass">
                                    <figure><Image className='w-full' src={Image1} alt="Image!" /></figure>
                                    <div className="card-body">
                                        <div className="card-actions justify-start">
                                            <button className="btn btn-primary btn-sm">Classic</button>
                                        </div>
                                        <h2 className="card-title text-2xl">How to market your Business to grow faster</h2>
                                        {/* avatar */}
                                        <div className='flex justify-between items-center'>
                                            <div className="avatar">
                                                <div className="w-8 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <Image alt='' src={Image2} />
                                                </div>
                                            </div>
                                            <h2 className="text-xl">Metablog</h2>
                                            <h2 className="text-xl">Dec 27, 2023</h2>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-center my-5'>

                            <button className="btn btn-outline btn-lg">View All Post</button>
                        </div>

                    </div>




                </div>
                {/*  add */}
                <div className='bg-slate-300  h-32 m-12 p-8 rounded-lg text-center text-white'>
                    <p>Advertisement</p>
                    <h4 className='font-bold text-2xl '>You can place add </h4>
                    <p>750*1200</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryAll;