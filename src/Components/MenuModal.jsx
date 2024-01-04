import React from 'react'
import CloseBtn from "./MenuModal/CloseBtn"

const MenuModal = ({setOpenModal}) => {

    const closeModal = () => {
        setOpenModal(false)
    }
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#00000070] flex flex-col items-center justify-center'>
      <div className='mt-4 bg-white rounded-xl w-3/5'>
        <ul className='p-2'>
            <li className='px-2 py-2 border-b-solid border-b-black border-b-[1px] font-bold text-center lg:hover:cursor-pointer'>Copy Link</li>
            <li className='px-2 py-2 border-b-solid border-b-black border-b-[1px] font-bold text-center lg:hover:cursor-pointer'>Unfollow</li>
            <li className='px-2 py-2 border-b-solid border-b-black border-b-[1px] font-bold text-center lg:hover:cursor-pointer'>Mute</li>
            <li className='px-2 py-2 border-b-solid border-b-black border-b-[1px] font-bold text-center lg:hover:cursor-pointer text-[#ff0000]'>Block</li>
            <li className='px-2 py-2 border-b-solid border-b-black border-b-[1px] font-bold text-center lg:hover:cursor-pointer text-[#ff0000]'>Report</li>
            <li className='px-2 py-2 border-b-solid border-b-black border-b-[1px] text-center lg:hover:cursor-pointer text-[#ff0000]' onClick={closeModal}>Close</li>
        </ul>
      </div>
    </div>
  )
}

export default MenuModal
