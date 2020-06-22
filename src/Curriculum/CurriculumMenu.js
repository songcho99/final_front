import React,{Component} from'react';
import {Link} from "react-router-dom";

class CurriculumMenu extends Component{
    render(){
        return(
            <div>
                <Link to="curriculumlist">
                   <button>수강과정 목록</button>
                </Link> &nbsp;&nbsp;
                <Link to="curriculumschedule">
                   <button>수강과정 일정</button>
                </Link> &nbsp;&nbsp;
            </div>
        )
    }
}
export default CurriculumMenu;