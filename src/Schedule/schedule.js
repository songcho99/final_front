import React,{Component} from'react';
import {Link} from 'react-router-dom';

class schedule extends Component{
    render(){
        return(
            <div>
                <h2>스케쥴입니다</h2>
                <Link to="/">
                    <button>홈으로</button>
                </Link>
            </div>
        )
    }
}
export default schedule;