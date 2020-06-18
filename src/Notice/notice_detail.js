import React,{Component} from'react';
import {Link} from 'react-router-dom';

class Notice_Detail extends Component{
    render(){
        return(
            <div>
                <h2>공지사항 상세보기입니다</h2>

                <hr/>
                <Link to="/noticeupdate">
                    공지사항 수정
                </Link>
                <br></br><br></br>
                <h2>오전에 수업을 빠져??</h2>
                
                <Link to="/noticelist">
                    목록으로
                </Link>
            </div>
        )
    }
}
export default Notice_Detail;