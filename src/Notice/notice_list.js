import React,{Component} from'react';
import {Link} from 'react-router-dom';

class Notice_List extends Component{
    render(){
        return(
            <div>
                <h2>공지사항 리스트입니다</h2>

                <hr/>
                <Link to="noticeadd">
                    공지사항 작성
                </Link>
                <br></br><br></br>
                <a href="/noticedetail">혜지가 무리한걸 요구한다</a>
                <br></br><br></br>
                <Link to="/">
                    홈으로
                </Link>
            </div>
        )
    }
}
export default Notice_List;