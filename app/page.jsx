import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* <h1 className="text-2xl mb-4 font-bold">Home</h1> */}
      <div className="flex items-center justify-between container">
        <Image src="/uni_logo.png" width={250} height={200} alf="logo" />
        <p className="text-2xl ml-20">
          안녕하세요. 중부대학교 정보보호학전공 <b>송지현</b>입니다.
        </p>
      </div>
    </>
  )
}
