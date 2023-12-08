import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { userId } = auth()
  console.log(userId)
  return (
    <>
      <nav className=" bg-blue-200 py-3 px-30">
        <div className="mb-4 p-2 m-4">
          <div className="flex items-center justify-between container">
            <div className="flex items-center font-bold">
              <Link href="/">
                <div className="text-3xl text-black">
                  <b>SONG</b>'s Portfolio
                </div>
              </Link>
            </div>

            <div className="flex items-center">
              <>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-white mr-4"
                >
                  About
                </Link>

                <Link
                  href="/skills"
                  className="text-gray-500 hover:text-white mr-4"
                >
                  Skills
                </Link>

                <Link
                  href="/teamproject"
                  className="text-gray-500 hover:text-white mr-4"
                >
                  Team Project
                </Link>

                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-white mr-4"
                >
                  Contact
                </Link>
              </>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
