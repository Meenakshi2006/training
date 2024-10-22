import React from "react";

export default function Card(props) {
  return (
    <div className='card'>
      {/* <h1>{props.myCount}</h1> */}
      <a href='#' className='group w-full relative block bg-black'>
        <img
          alt=''
          src={props.imageUrl}
          className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
        />

        <div className='relative p-4 sm:p-6 lg:p-8'>
          <p className='text-sm font-medium uppercase tracking-widest text-pink-500'>
            Developer
          </p>

          <p className='text-xl font-bold text-white sm:text-2xl'>Tony Wayne</p>

          <div className='mt-32 sm:mt-48 lg:mt-64'>
            <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
              <p className='text-sm text-white'>{props.title}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
