import React,{Component} from'react';
import {Link} from "react-router-dom";

class ClassPage extends Component{
    render(){
        return(
            <div>
                <br></br><br></br><br></br><br></br><br></br>
                <h2>학습 페이지</h2>
                <Link to="/classnote">
                    <button>강의 노트</button>
                </Link> &nbsp;&nbsp;
                <Link to="/classdata">
                    <button>수업 자료</button>
                </Link> &nbsp;&nbsp;
                <Link to="/mynote">
                    <button>내 일일노트</button>
                </Link> &nbsp;&nbsp;
                <Link to="/schedule">
                    <button>스케쥴</button>
                </Link> &nbsp;&nbsp;

            </div>
        )
    }
}
export default ClassPage;