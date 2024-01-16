import React from 'react'
import Cards from './Cards'

function App(){
  
  // const ref = useRef (null);

  const data = [
    {
    desc: "Background colour of the card will be displayed.",
    filesize: ".9mb",
    close: true,
    tag:{isOpen: true, tagTitle: "Download", tagColor:"green"},
    },
    {
      desc: "Background colour of the card will be displayed.",
      filesize: ".9mb",
      close: true,
      tag:{isOpen: true, tagTitle: "Download", tagColor:"blue"},
    },
    {
      desc: "Background colour of the card will be displayed.",
      filesize: ".9mb",
      close: true,
      tag:{isOpen: true, tagTitle: "Download now", tagColor:"green"},
    },
  ]
  return(
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
          <Cards data={item} />
        ))}
    </div>
  )
}

export default App