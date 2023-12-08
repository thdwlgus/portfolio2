import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SkillPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Skills</h1>
      <div className="mb-4 bg-gray-000 p-4 m-4 rounded-lg">
        {/* <div className="text-3xl font-bold mb-5">
          Web 개발
          <div className="w-[100%] my-[1%] border-[3px] border-black/30"></div>
        </div> */}
        <div className="flex mb-5">
          <Image src="/html.png" width={200} height={100} alt="HTML" />
          <Image src="/css.png" width={200} height={100} alt="CSS" />
          <Image src="/js.png" width={200} height={100} alt="JS" />
        </div>
        <div className="w-[100%] my-[10%] border-[1px] border-black/30"></div>
        <div className="flex mb-5 justify-center">
          <Image src="/c.png" width={200} height={400} alt="C" />
          <Image src="/py.png" width={200} height={0} alt="PY" />
        </div>
        <div className="w-[100%] my-[10%] border-[1px] border-black/30"></div>
        <div className="flex mb-5 justify-center">
          <Image src="/react.png" width={200} height={0} alt="REACT" />
        </div>
      </div>
    </div>
  )
}

export default SkillPage
