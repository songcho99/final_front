import React,{Component} from'react';
import MyPageMenu from '../MyPage/mypagemenu';
import { Link } from 'react-router-dom';

class MyPageUpdate extends Component{
    render(){
        return(
            <div>
                <br></br>
                <MyPageMenu/>
               <h2>마이 페이지_정보 수정</h2>
               <form action="" method="post">
                    <table style={{border:'1px solid gray', width:'600px'}}>
                        <tr>
                            <th>이름</th>
                            <td><input type='text' name="member_name" readOnly='readOnly'/></td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td><input type='text' name="member_id" readOnly='readOnly'/></td>
                        </tr>
                        <tr>
                            <th>과정</th>
                            <td><input type='text' name="member_process" readOnly='readOnly'/></td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td>
                                <input type='text' name="member_birthyear"/>-
                                <input type='text' name="member_birthmonth"/>-
                                <input type='text' name="member_birthdate"/>
                            </td>
                        </tr>
                        <tr>
                            <th>핸드폰</th>
                            <td>
                                <input type='text' name="member_hp1"/>-
                                <input type='text' name="member_hp2"/>-
                                <input type='text' name="member_hp3"/>
                            </td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>
                                <input type="text" name="member_addr1"/><button type="button">검색</button>
                                <br/>
                                <input type="text" name="member_addr2"/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2' align='center'>
                                <button type="submit">전송</button>
                            </td>
                        </tr>
                    </table>
                </form>
                <br></br>
                <hr/>
               <Link to="/mypageupdate">
                   <button>수정</button>
               </Link>
            </div>
        )
    }
}
export default MyPageUpdate;