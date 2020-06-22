import React,{Component} from'react';
import {Link} from 'react-router-dom'
import IntroduceMenu from '../Introduce/IntroduceMenu';

class AcademyIntro extends Component{
    render(){
        return(
            <div>
                <br></br><br></br><br></br><br></br><br></br>
                <IntroduceMenu/>
                <h2>학원소개 페이지입니다</h2>

            <hr/>
            </div>
        )
    }
}
export default AcademyIntro;