import React, {useEffect} from 'react';
import MemberList_Data from './memberlist_data'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core'
import axios from 'axios'
import Swal from 'sweetalert2'



  export default function MemberList_Form(){

    

    // 검색 필터 값 받는 변수
    const [field, setField] = React.useState('');

    //선택값에 따라 필터값 바뀌는 이벤트
    const handleChange = (event) => {
        setField(event.target.value);
        console.log(event.target.value);
      };

    // 검색어 값 받는 변수
    const [search, setSearch] = React.useState('');

    //입력할때마다 검색어 바뀌는 이벤트
    const handleSearch = (event) =>{
        setSearch(event.target.value);
        console.log(event.target.value);
    }


      //테이블 TH부분
      const header=(()=>
        (<TableRow>
        <TableCell style={{textAlign:"center"},{width:60}}>회원유형</TableCell>
        <TableCell style={{textAlign:"center",width:100}}>이름</TableCell>
        <TableCell style={{textAlign:"center",width:100}}>전화번호</TableCell>
        <TableCell style={{textAlign:"center",width:120}}>이메일</TableCell>
        <TableCell style={{textAlign:"center",width:200}}>주소</TableCell>
        <TableCell style={{textAlign:"center",width:60}}>회원 삭제</TableCell>
       </TableRow>));

//멤버 목록 담는 변수
let memberList = [];

//멤버 목록 출력시 담는 변수
const [asd,setAsd] = React.useState([]);

//전체 목록 출력
const list=()=>{
    let url="http://localhost:8000/project/member/memberlist";
    axios.get(url)
          .then((res)=>{
            memberList = res.data;
            
            setAsd(memberList);

              console.log(memberList);
          }).catch(err=>{
              console.log("list 에러:"+err)
          })
};
//검색 멤버 출력
const searchMember=()=>{
    let url="http://localhost:8000/project/member/memberlist?field="+field+"&search="+search;
    axios.get(url)
    .then((res)=>{
        memberList=res.data;

        setAsd(memberList);
        console.log(memberList);
    }).catch(err=>{
        console.log("search 에러:"+err)
    })
}
//멤버 삭제

const onBoardDelete=(member_num)=>{
    
    let url="http://localhost:8000/project/member/memberdelete?member_num="+member_num;
    axios.delete(url)
    .then((res)=>{
        list();
    }).catch(err=>{
        console.log(member_num);
        console.log("삭제 오류:"+err);
    })
}


//라이프싸이클
useEffect(()=>{
    list();
},[])
 return(
    
    <div>
    <br></br><br></br><br></br><br></br>
    <h1>회원정보 목록</h1>
    <br></br>

        {/* 검색 유형 선택 창 */}
    <div style={{marginLeft:'500px'}}>
    <InputLabel id="demo-simple-select-label">검색 유형</InputLabel>
        <Select style={{width:100}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={field}
          onChange={handleChange}>
            <MenuItem value="member_name" >이름</MenuItem>
            <MenuItem value="member_address">주소</MenuItem>
        </Select> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* 검색어 입력 창 */}
    <TextField required id="outlined-basic" label="검색어 입력" onChange={handleSearch} value={search} variant="outlined" style={{bottom:'20px',width:'400px'}} />
    <Button variant="contained" color="default" onClick={searchMember}
        style={{width:100,bottom:10,marginLeft:30}}>검색
    </Button>
    </div>
    <br></br><br></br>

        {/* 테이블 반복 출력 부분 */}
        {asd.map((item,idx)=>(
        <div style={{width:1000,marginLeft:300}}>
            <h3>{item.member_type}</h3>
        <Paper>
        <Table style={{width:900}}>
                <TableHead>
                    {header()}
                </TableHead>
                <TableBody>
                    <MemberList_Data key={idx} member_num={item.member_num} member_type={item.member_type}
                    member_name={item.member_name} member_phone={item.member_phone}
                    member_email={item.member_email} member_address={item.member_address}
                    member_detailaddr={item.member_detailaddr} onBoardDelete={onBoardDelete}/>
                </TableBody>
        </Table>
        </Paper>
        <br></br><br></br>
        </div>
        
        ))}
    <br></br><br></br>
    <Button variant="contained" color="default" href="/"
    style={{width:100,marginLeft:1150}}>홈으로
    </Button>
    </div>
      )
    }