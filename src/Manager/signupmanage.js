import React,{Component} from'react';
import MyPageMenu from '../MyPage/mypagemenu';
import {Link} from 'react-router-dom';

class SignUpManage extends Component{
    render(){
        return(
            <div>
                <br></br>
                <MyPageMenu/>
                <h2>수강신청 관리 페이지입니다</h2>

                <Link to="/">
                    <button>홈으로</button>
                </Link>
            </div>
        )
    }
}
export default SignUpManage;