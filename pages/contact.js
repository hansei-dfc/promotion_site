import Navbar from './components/Navbar'

export default function contact() {
    return (
        <>
            <div className="w-full h-full bg-[#2B138A] flex flex-col">
                <Navbar />
                <div className="w-[50%] h-[500px] bg-white self-center rounded-[25px] mt-[10%] text-center p-[5%] font-bold text-[24px]">
                   <h1>장난으로 연락하지 마세영</h1>
                   <h1 className="mt-[10%]">류정원: <a className="text-blue-500 underline">badaim1009@gmail.com</a></h1>
                   <h1 className="mt-[10%]">동아리에 들어오고 싶다면?</h1>
                   <a href="https://forms.gle/NGdDr9SBfgZJQZmu5" className="text-blue-500 underline mt-[2%]">https://forms.gle/NGdDr9SBfgZJQZmu5</a>
                </div>
            </div>
        </>
    )
}