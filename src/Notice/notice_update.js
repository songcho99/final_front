import React,{Component} from'react';
import {Link} from 'react-router-dom';

class Notice_Update extends Component{
    render(){
        return(
            <div>
                <h2>공지사항 수정 페이지입니다</h2>

                <hr/>
                <Link to="/noticelist">
                    공지사항 수정
                </Link>
                <br></br><br></br>
                <h2>지각쟁이 송혜지</h2>
                
                <Link to="/noticelist">
                    목록으로
                </Link>
            </div>
        )
    }
}
export default Notice_Update;