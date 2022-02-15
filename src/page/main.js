import "./css/main.css"
import "./css/reset.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";


function main() {
    return (
        <div className="main_container">
            <div className="first_line line"></div>
            <div className="left_box">

            </div>
            <div className="line"></div>
            <div className="mid_box">
                <div className="main_name">
                    DFC
                </div>
                <div className="main_fullname">
                    Digital Forensic
                </div>
                <a className="application" href="">동아리 신청</a>

            </div>
            <div className="small_line"></div>
            <div className="right_box">
                <FontAwesomeIcon  className="lock_icon" icon={faLock}/>
                <div className="guide_box">
                    <FontAwesomeIcon  className="angleup_icon" icon={faAngleUp}/>
                    <a className="guide_text" href="">hanseiDFC 워게임으로 이동</a>
                </div>
            </div>

        </div>
    );
  }
  
  export default main;