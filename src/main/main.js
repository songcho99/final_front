import React,{Component} from'react';
import {Link} from 'react-router-dom';

class main extends Component{
    render(){
        return(
                
                <div>

                <div>
                <header>
                    
                    <Link to="/classnote">
                <button type="button">강의노트</button>
                </Link> &nbsp;&nbsp;
                <Link to="/classdata">
                <button type="button">수업자료</button>
                </Link> &nbsp;&nbsp;
                <Link to="/studylist">
                    <button type="button">스터디</button>
                </Link> &nbsp;&nbsp;
                <Link to="/schedule">
                <button type="button">스케쥴</button>
                </Link> &nbsp;&nbsp;
                <Link to="/myclass">
                <button type="button">내 학습공간</button>
                </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/mypageupdate">
                    <button>MyPage</button>
                </Link>
                </header>
                </div>
               
                    </div>
        )
    }
}
export default main;