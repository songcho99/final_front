import React,{Component} from'react';
import {Link} from 'react-router-dom';  

class MyStudyTeam extends Component{
    render(){
        return(
            <div>
                <h2>내 스터디 상세 페이지입니다!</h2>

                <Link to="/">
                    <button>홈으로</button>
                </Link>
            </div>
        )
    }
}
export default MyStudyTeam;