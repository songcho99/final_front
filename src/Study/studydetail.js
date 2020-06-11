import React,{Component} from'react';
import {Link} from 'react-router-dom';

class StudyDetail extends Component{
    render(){
        return(
            <div>
                <h2>스터디 모집 상세 페이지입니다!</h2>

                <hr/>
                <Link to="/updatestudy">
                    <button>수정하기</button>
                </Link>&nbsp;&nbsp;
                <Link to="/studylist">
                    <button>목록</button>
                </Link>
            </div>
        )
    }
}
export default StudyDetail;