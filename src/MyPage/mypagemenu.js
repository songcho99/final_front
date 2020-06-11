import React,{Component} from'react';
import {Link} from 'react-router-dom';

class MyPageMenu extends Component{
    render(){
        return(
            <div>
                <Link to="/mypageupdate">
                    <button>정보 수정</button>
                </Link> &nbsp;&nbsp;
                {/* 일반 회원만 */}
                <Link to="/signup">
                    <button>수강신청 현황</button>
                </Link>  &nbsp;&nbsp;

                {/* 매니저만 */}
                <Link to="/signupmanage">
                    <button>수강신청 관리</button>
                </Link> &nbsp;&nbsp;
                {/* 관리자만 */}
                <Link to="/memberlist">
                    <button>회원관리</button>
                </Link> &nbsp;&nbsp;
                <Link to="/graph">
                    <button>통계</button>
                </Link> &nbsp;&nbsp;
                {/* 수강생만 */}
                <Link to="/mystudymain">
                    <button>마이 스터디</button>
                </Link> &nbsp;&nbsp;
                <Link to="/myclass">
                <button type="button">내 학습공간</button>
                </Link> &nbsp;&nbsp;
                 {/*강사만 */}
                 <Link to="">
                     <button>수업 관리</button>
                 </Link>
            </div>
        )
    }
}
export default MyPageMenu;