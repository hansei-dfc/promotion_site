import "./css/about.css"
import "./css/reset.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from 'react-responsive';
import aboutimg from './img/mainimg.jpg';









function about() {
    return (
        <div className="about_container">
            <div className="about_box">
                <div className="about_box_in">
                    <img className="aboutimg" src={aboutimg}></img>
                    <span className="span_line"></span>
                    <div className="about_text_box">
                        <div className="about_name">            
                            Forensic 동아리
                        </div>
                        <div className="about_text">
                            한세사이버보안고등학교 포렌식 동아리입니다.
                        </div>
                        <div className="about_text">
                            저희는 교내 사이버 안전을 책임지고 로그를 분석하며
                        </div>
                        <div className="about_text">
                            교내에 발생하는 사이버위협을 방지합니다
                        </div>
                        <div className="about_text_end about_text">
                            또한 자유롭고 다양한 개발과 한세 워게임을 운영합니다. 
                        </div>
                        <div className="emoty">
                            <span className="smile"></span>
                        </div>
                        <img className="maxaboutimg" src={aboutimg}></img>
                    </div>


                </div>

            </div>
        </div>
    );
  }
  
  export default about;