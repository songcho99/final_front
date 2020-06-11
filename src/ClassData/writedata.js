import React,{Component} from'react';
import {Link} from 'react-router-dom';

class WriteData extends Component{
    render(){
        return(
            <div>
                <h2>자료 작성 폼입니다!</h2>

                <Link to="/classdata">
                   <button>목록으로</button>
               </Link>
            </div>
        )
    }
}
export default WriteData;