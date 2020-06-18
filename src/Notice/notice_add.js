import React,{Component} from'react';
import {Link} from 'react-router-dom';

class Notice_Add extends Component{
    render(){
        return(
            <div>
                <h2>공지사항 작성입니다</h2>

                <hr/>
                <Link to="/noticelist">
                    공지사항 작성
                </Link>
                <br></br><br></br>
                
                <Link to="/noticelist">
                    목록으로
                </Link>
            </div>
        )
    }
}
export default Notice_Add;