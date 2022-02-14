import Navbar from './components/Navbar'

export default function about() {
    return (
        <>
            <div className="w-full h-full bg-[#2B138A] flex flex-col overflow-auto">
                <Navbar />
                <div className="w-[80%] mt-[2%] self-center">
                    <div className="w-full h-[700px] bg-white rounded-[25px]">
                        <div className="text-center font-bold text-[24px] p-[5%]">
                            <h1>안녕하세요 한세사이버보안고등학교 포렌식 동아리 입니다!</h1>
                            <h1>저희는 교내 사이버망의 위협을 수집하고 감시하며,</h1>
                            <h1>교내 사이버안전을 책임지고 있습니다.</h1>
                        </div>
                        <div>
                        </div>
                        <div className="text-[24px] font-bold text-center">
                            <h1>부장: 류정원</h1>
                            <h1>부원: 안재민, 민웅기, 김재우</h1>    
                        </div>  
                    </div> 
                </div>
            </div>
        </>
    )
}