import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const InfiniteScrollCarousel = () => {
  const data = [
    {
      label: "$HOSKY",
      icon: "/Logo.png",
      text: "show now",
      navigate: "/",
      color: "bg-Mariner",
    },
    {
      label: "BitFins",
      icon: "/Bitfins.png",
      text: "show now",
      navigate: "/",
      color: "bg-Firefly",
    },
    {
      label: "Future Fest",
      icon: "/Future_Fest.png",
      text: "show now",
      navigate: "/",
      color: "bg-black",
    },
    {
      label: "CryptoRaggies",
      icon: "/cryptoraggies.png",
      text: "show now",
      navigate: "/",
      color: "bg-VividTangerine",
    },
    {
      label: "Vudu Brigada",
      icon: "/meSG3lth.png",
      text: "show now",
      navigate: "/",
      color: "bg-black",
    },
    {
      label: "Pendulum",
      icon: "/pendulum.png",
      text: "show now",
      navigate: "/",
      color: "bg-black",
    },    ];

    return (
      <div className='w-full mt-12 flex items-center justify-between whitespace-nowrap  animate-infiniteScroll h-[150px] flex-none flex-shrink-0 '>
        {
          data.map((el: any, key: any) => (
            <Link href={el?.navigate} className={`flex  justify-center  cursor-pointer h-[150px] ml-24  rounded-r-lg  ${el?.color}`} key={`BrandCard${key}`}>
              <Image src={el?.icon} alt={el?.label} height={160} width={160} className='mr-20 mix-blend-normal w-40 h-[150px] rounded-full object-center' />
              <div className='flex flex-col mr-20 relative '>
                <h4 className='text-right font- mt-6 mr-2  mb-2 not-italic text-white font-semibold text-xl lowercase'>{el?.label}</h4>
                <span className='text-white text-lg absolute right-6 bottom-6 underline underline-offset-2'>{el?.text}</span>
              </div>
            </Link>
          )
          )
        }
        {
          data.map((el: any, key: any) => (
            <Link href={el?.navigate} className={`flex  justify-center  cursor-pointer h-[150px] ml-24  rounded-r-lg  ${el?.color}`} key={`BrandCard${key}`}>
              <Image src={el?.icon} alt={el?.label} height={160} width={160} className='mr-20 mix-blend-normal w-40 h-[150px] rounded-full object-center' />
              <div className='flex flex-col mr-20 relative '>
                <h4 className='text-right font- mt-6 mr-2  mb-2 not-italic text-white font-semibold text-xl lowercase'>{el?.label}</h4>
                <span className='text-white text-lg absolute right-6 bottom-6 underline underline-offset-2'>{el?.text}</span>
              </div>
            </Link>
          )
          )
        }
      </div>
    )
  }
  
  export default InfiniteScrollCarousel

