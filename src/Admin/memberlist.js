import React,{Component} from'react';
import MyPageMenu from '../MyPage/mypagemenu';
import {Link} from 'react-router-dom';
class MemberList extends Component{
    render(){
        return(
            <div>
                <MyPageMenu/>
                <h2>회원관리 페이지입니다!</h2>

                <Link to="/">
                    <button>홈으로</button>
                </Link>
            </div>
        )
    }
}
export default MemberList;