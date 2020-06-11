import React,{Component} from'react';
import {Link} from 'react-router-dom';

class StudyList extends Component{
    render(){
        return(
            <div>
                <h2>스터디 리스트 페이지입니다!</h2> &nbsp;&nbsp;
                <Link to="/mystudyteam">
                    <button>마이 스터디</button>
                </Link>
                <br></br><br></br>
                <Link to="/studydetail">
                    <a href="#">같이 인트라넷6 하실분~~~?</a>
                </Link>
                
                <hr/>
                <Link to="/addstudy">
                    <button>스터디 만들기</button>
                </Link>
            </div>
        )
    }
}
export default StudyList;