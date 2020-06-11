import React,{Component} from'react';
import {Link} from 'react-router-dom';


class DataDetail extends Component{
    render(){
        return(
            <div>
               <h2>상세 페이지입니다!</h2> 
               <hr/>

               <Link to="/updatedata">
                    <button>수정하기</button>
                </Link>
               <Link to="/classdata">
                   <button>목록으로</button>
               </Link>
            </div>
        )
    }
}
export default DataDetail;