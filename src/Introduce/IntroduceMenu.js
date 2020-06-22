import React,{Component} from'react';
import {Link} from 'react-router-dom';

class IntroduceMenu extends Component{
    render(){
        return(
            <div>
                <Link to="academyintro">
                <button>학원소개</button>
            </Link> &nbsp;&nbsp;
            <Link to="academyfacility">
                <button>학원시설</button>
            </Link> &nbsp;&nbsp;
            <Link to="academymap">
                <button>오시는길</button>
            </Link> &nbsp;&nbsp;
            <Link to="academylink">
                <button>더 보기</button>
            </Link> &nbsp;&nbsp;
            </div>
        )
    }
}
export default IntroduceMenu;