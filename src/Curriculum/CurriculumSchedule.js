import React,{Component} from'react';
import CurriculumMenu from "../Curriculum/CurriculumMenu";

class CurriculumSchedule extends Component{
    render(){
        return(
            <div>
                <br></br><br></br><br></br><br></br><br></br>
                <CurriculumMenu/>
                <h2>수강과정 일정입니다</h2>
            </div>
        )
    }
}
export default CurriculumSchedule;