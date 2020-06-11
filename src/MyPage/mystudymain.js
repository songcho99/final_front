import React,{Component} from'react';
import MyPageMenu from './mypagemenu';
import {Link} from 'react-router-dom';

class MyStudy extends Component{
    render(){
        return(
            <div>
                 <br></br>
                <MyPageMenu/>
                <h2>마이 스터디 공간입니다!</h2>

                <Link to="/mystudyteam">
                    <a href="#">인트라넷6</a>
                </Link>
                
                <Link to="">
                    <button>탈퇴하기</button>
                </Link>

                <hr/>
                <Link to="/">
                    <button>홈으로</button>
                </Link>
            </div>
        )
    }
}
export default MyStudy;