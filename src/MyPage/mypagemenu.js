import React,{Component} from'react';
import {Link} from 'react-router-dom';

class MyPageMenu extends Component{
    render(){
        return(
            <div>
                <Link to="/mypageupdate">
                    <button>정보 수정</button>
                </Link> &nbsp;&nbsp;
                <Link to="/mystudymain">
                    <button>마이 스터디</button>
                </Link>
            </div>
        )
    }
}
export default MyPageMenu;