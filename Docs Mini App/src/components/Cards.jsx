import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"


function Cards({data, reference}){
    return(
        <motion.div drag className='relative flex-shrink-0 w-60 h-80 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full h-10/5 py-3 left-0'>
                <div className='flex item-center justify-between px-8 py-3 mb-3'>
                    <h5>.4mb</h5>
                    <span className='w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center'>
                        {data.close ? <IoMdClose /> : <LuDownload size=".7em" color='#fff'/>}                        
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default Cards