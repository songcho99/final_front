import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Notice_List extends Component {
    constructor() {
        super();
        this.state = {
            listData: [],
            num: 0,
        }
    }
    componentWillMount() {
        this.list();
    }
    list = () => {
        let url = "http://localhost:8000/project/notice/noticelist";
        Axios.get(url)
            .then(res => {
                this.setState({
                    listData: res.data
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
                <Link to="/noticeadd">NoticeAdd</Link>
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
                                <td><Link to={{ pathname: "/noticedetail", state: { num: item.notice_num } }} style={{ color: 'black', textDecoration: 'none' }}>{item.notice_subject}</Link></td>
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