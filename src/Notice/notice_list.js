import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Notice_List extends Component {
    constructor() {
        super();
        this.state = {
            listData: [],
            num: 0,
            noti: "",
            member_name: localStorage.name
        }
    }
    componentWillMount() {
        this.list();
        if (this.state.member_name === '관리자' || this.state.member_name === '매니저') {
            this.setState({
                admin: <span>
                    <Link to="/noticeadd">NoticeAdd</Link>
                </span>
            })
        }
    }
    list = () => {
        let url = "http://localhost:8000/project/notice/noticelist";
        Axios.get(url)
            .then(res => {
                this.setState({
                    listData: res.data,
                    no: res.data.notice_type
                })

            }).catch(err => {
                console.log("noticelist error=" + err);
            })
    }
    render() {
        return (
            <div>
                <div style={{ paddingTop: '100px' }}></div>
                <h2>Notice List</h2>
                {this.state.admin}
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listData.map((item, idx) => (
                            < tr key={idx} >
                                <td>{idx + 1}</td>
                                <td><Link to={{ pathname: "/noticedetail", state: { num: item.notice_num } }} style={{ color: 'black', textDecoration: 'none' }}><b style={{ color: "red" }}>{item.noti_type}</b>{item.notice_subject}</Link></td>
                                <td>{item.notice_writeday}</td>
                                <td>{item.notice_readcount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Notice_List;