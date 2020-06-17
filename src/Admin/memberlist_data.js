import React from'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
class MemberList_Data extends React.Component{
    

    render(){
        return(
                //회원들의 정보를 담아주는 컴포넌트
                <TableRow>
                    <TableCell style={{textAlign:"center"}}>{this.props.member_type}</TableCell>
                    <TableCell style={{textAlign:"center"}}>{this.props.member_name}</TableCell>
                    <TableCell style={{textAlign:"center"}}>{this.props.member_phone}</TableCell>
                    <TableCell style={{textAlign:"center"}}>{this.props.member_email}</TableCell>
                    <TableCell style={{textAlign:"center"}}>{this.props.member_address+" "+this.props.member_detailaddr}</TableCell>
                    <TableCell style={{textAlign:"center"}}><Button variant="contained" color="secondary" onClick={this.props.onBoardDelete.bind(this,this.props.member_num)}>삭제</Button></TableCell>
                    
                </TableRow>
            
        )
    }
}
export default MemberList_Data;