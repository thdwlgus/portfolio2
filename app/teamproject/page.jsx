import Image from 'next/image'
import React from 'react'

const Teamprojectpage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Team Project</h1>
      <div className="mb-4 bg-gray-000 p-4 m-4 rounded-lg">
        <Image src="/ppt1.png" width={700} height={100} alt="PPT1" />
        <Image src="/ppt2.png" width={700} height={100} alt="PPT2" />
        <Image src="/ppt3.png" width={700} height={100} alt="PPT3" />
        <Image src="/ppt4.png" width={700} height={100} alt="PPT4" />
        <Image src="/ppt5.png" width={700} height={100} alt="PPT5" />
      </div>
    </div>
  )
}

export default Teamprojectpage
