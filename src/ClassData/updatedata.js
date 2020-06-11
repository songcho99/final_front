import React,{Component} from'react';
import {Link} from 'react-router-dom';

class UpdateData extends Component{
    render(){
        return(
            <div>
                <h2>수정폼입니다!</h2>

                <Link to="/classdata">
                   <button>목록으로</button>
               </Link>
            </div>
        )
    }
}
export default UpdateData;