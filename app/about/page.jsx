import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-000 rounded-xl TextBox">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <div className="flex items-center">
        <div className="box">
          <Image
            src="/v.png"
            width={300}
            height={200}
            alt="v"
            className="profile px-30 "
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-5 ml-10">
            소개
            <div className="w-[17%] my-[1%] border-[2px] border-black/30"></div>
          </h2>
          <li className="text-xl mb-5 ml-10">
            <b>이름 : </b> 송지현
          </li>
          <li className="text-xl mb-5 ml-10">
            <b>생년월일 : </b> 2003.10.17
          </li>
          <li className="text-xl mb-5 ml-10">
            <b>MBTI : </b> ESTJ
          </li>
          <li className="text-xl mb-10 ml-10">
            <b>거주지 : </b> 은평구 연신내
          </li>
          <h2 className="text-2xl font-bold mb-5 ml-10">
            활동 이력
            <div className="w-[34%] my-[1%] border-[2px] border-black/30"></div>
          </h2>
          <li className="text-xl mb-5 ml-10">
            2022.07 ~ 2022.09 <b>C언어 스터디 팀장</b>
          </li>
          <li className="text-xl mb-5 ml-10">
            2022.09 ~ 2023.09 <b>SCP 동아리 부원</b>
          </li>
          <li className="text-xl mb-5 ml-10">
            2023.09 ~ 2023.12 <b>웹 개발 스터디 팀장</b>
          </li>
          <li className="text-xl mb-5 ml-10">
            2023 <b>학생회 부원</b>
          </li>
          <li className="text-xl mb-5 ml-10">
            2024 <b>학생회 임원진</b>
          </li>
          <li className="text-xl mb-5 ml-10">
            2024 <b>멋쟁이 사자처럼 12기 본교 대표</b>
          </li>
          <h2 className="text-2xl font-bold mb-5 ml-10">
            Uni
            <div className="w-[20%] my-[1%] border-[2px] border-black/30"></div>
          </h2>
          <li className="text-xl mb-5 ml-10">
            2022.03 ~ 중부대학교 정보보호학전공 2학년 2학기 재학중
          </li>
        </div>
      </div>
    </div>
  )
}
