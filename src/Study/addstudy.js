import React,{Component} from'react';
import {Link} from 'react-router-dom';

class AddStudy extends Component{
    render(){
        return(
            <div>
                <h2>스터디 작성 페이지입니다!</h2>
                <Link to="/studylist">
                    <button>개설하기</button>
                </Link>
                <Link to="/studylist">
                    <button>목록</button>
                </Link>
            </div>
        )
    }
}
export default AddStudy;