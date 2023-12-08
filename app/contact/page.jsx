import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="mb-4 bg-gray-000 p-4 m-4 rounded-xl justify-center">
      <div className="text-4xl font-bold mb-5 justify-center">
        Contact
        <div className="w-[80%] my-[1%] border-[2px] border-black/30"></div>
      </div>

      <h2 className="text-2xl font-bold mb-5 justify-center">Blog</h2>
      <li className="text-xl mb-4 text-black rounded-lg hover:text-blue-300 mr-4">
        <Link
          href="https://github.com/thdwlgus"
          className="mb-5 justify-center"
        >
          Go to <b>GitHub</b>
        </Link>
      </li>
      <li className="text-xl mb-10 text-black rounded-lg hover:text-blue-300 mr-4">
        <Link
          href="https://thdwlgus.tistory.com/"
          className="mb-10 justify-center"
        >
          Go to <b>Tistory</b>
        </Link>
      </li>
      <h2 className="text-2xl font-bold mb-5">Study</h2>
      <li className="text-xl mb-4 text-black rounded-lg hover:text-blue-300 mr-4">
        <Link
          href="https://yellow-fuel-a77.notion.site/Profile-d27055b2190b4cbb991bd2b4bcad3f43?pvs=4"
          className="mb-5 justify-center"
        >
          Go to <b>SONG's Notion</b>
        </Link>
      </li>
      <h2 className="text-2xl font-bold mb-5 mt-10">Mail</h2>
      <li className="text-xl mb-5 ml-7 list-none">jiniluce7@naver.com</li>
    </div>
  )
}
export default ContactPage
