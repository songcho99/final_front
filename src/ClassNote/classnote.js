import React,{Component} from'react';
import {Link} from 'react-router-dom';

class classnote extends Component{
    render(){
        return(
            <div>
                <h2>강의노트입니다!</h2>
                <Link to="/">
                    <button>홈으로</button>
                </Link>
            </div>
        )
    }
}
export default classnote;