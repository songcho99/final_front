import React,{Component} from'react';
import MyPageMenu from '../MyPage/mypagemenu';
import { Link } from 'react-router-dom';

class MyPageUpdate extends Component{
    render(){
        return(
            <div>
                <br></br>
                <MyPageMenu/>
               <h2>마이 페이지 정보 수정창입니다!</h2>
                <br></br>
                <hr/>
               <Link to="/mypageupdate">
                   <button>수정</button>
               </Link>
            </div>
        )
    }
}
export default MyPageUpdate;