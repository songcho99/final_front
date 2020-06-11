import React,{Component} from'react';
import {Route,BrowserRouter} from'react-router-dom';
import ClassNote from '../ClassNote/classnote';


import ClassData from '../ClassData/classdata';
import WriteData from '../ClassData/writedata';
import DataDetail from '../ClassData/datadetail';
import UpdateData from '../ClassData/updatedata';

import StudyList from '../Study/studylist';
import AddStudy from '../Study/addstudy';
import StudyDetail from '../Study/studydetail';
import MyStudy from '../MyPage/mystudymain';
import MyStudyTeam from '../MyPage/mystudyteam';


import Schedule from'../Schedule/schedule';

import MyClass from '../MyClass/myclass';

import Menu from './menu';
import MainInfo from './maininfo';
import Introduce from './introduce';
import Curriculum from './curriculum';
import MyPageUpdate from '../MyPage/mypageupdate';
import SignUpManage from '../Manager/signupmanage';
import SignUp from '../NonMember/signup';
import MemberList from '../Admin/memberlist';






import ClassData from '../ClassData/classdata';
import WriteData from '../ClassData/writedata';
import DataDetail from '../ClassData/datadetail';
import UpdateData from '../ClassData/updatedata';

import StudyList from '../Study/studylist';
import AddStudy from '../Study/addstudy';
import StudyDetail from '../Study/studydetail';
import MyStudy from '../MyPage/mystudymain';
import MyStudyTeam from '../MyPage/mystudyteam';


import Schedule from'../Schedule/schedule';

import MyClass from '../MyClass/myclass';

import Menu from './menu';
import MainInfo from './maininfo';
import MyPageUpdate from '../MyPage/mypageupdate';




class menu extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                        <Menu/>
                        {/* 홈으로 */}
                        <Route exact path="/" component={MainInfo}/>
                        {/* 메인 관련 메뉴 */}
                        <Route path="/introduce" component={Introduce}/>
                        <Route path="/curriculum" component={Curriculum}/>
                        {/* 강의노트 */}
                        <Route path="/classnote" component={ClassNote}/>
                        {/* 수업자료 */}
                        <Route path="/classdata" component={ClassData}/>
                        {/*스터디 */}
                        <Route path="/studylist" component={StudyList}/>
                        {/* 스케줄 */}
                        <Route path="/schedule" component={Schedule}/>
                        {/* 내 학습공간 */}
                        <Route path="/myclass" component={MyClass}/>
                        {/* 수업자료 관련 기능 */}
                        <Route path="/writedata" component={WriteData}/>
                        <Route path="/datadetail" component={DataDetail}/>
                        <Route path="/updatedata" component={UpdateData}/>

                        {/* 스터디 관련 기능 */}
                        <Route path="/addstudy" component={AddStudy}/>
                        <Route path="/studydetail" component={StudyDetail}/>
                        <Route path="/mystudymain" component={MyStudy}/>
                        <Route path="/mystudyteam" component={MyStudyTeam}/>

                        {/* 마이 페이지 관련 기능 */} 
                        <Route path="/mypageupdate" component={MyPageUpdate}/>
                        <Route path="/signupmanage" component={SignUpManage}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/memberlist" component={MemberList}/>
                </BrowserRouter>

               
            </div>
        )
    }
}
export default main;



