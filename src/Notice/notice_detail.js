import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Notice_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noticedata: [],
            noticefile: [],
            num: this.props.location.state.num,
            member_name: localStorage.name

        }
    }
    componentWillMount() {
        this.detailList(this.state.num);
        // if (this.state.member_name === '관리자' || this.state.member_name === '매니저') {
        //     this.setState({
        //         admin: <span>
        //             <Link to={{ pathname: "/noticeupdate", state: { noticedata: this.state.noticedata, noticefile: this.state.noticefile } }} style={{ color: 'black', textDecoration: 'none' }}>수정</Link>
        //             <Link to='/noticelist' onClick={this.onDelete.bind(this, this.state.num)}>삭제</Link>
        //         </span>
        //     })
        // }
    }
    detailList = (num) => {
        let url = "http://localhost:8000/project/notice/noticedetail?num=" + num;
        Axios.get(url)
            .then(res => {
                this.setState({
                    noticedata: res.data
                })
            }).catch(err => {
                console.log("notice detail error=" + err);
            });
        let url2 = "http://localhost:8000/project/notice/noticefile?num=" + num;
        Axios.get(url2)
            .then(res => {
                this.setState({
                    noticefile: res.data
                })
            }).catch(err => {
                console.log("notice detail files error=" + err);
            })
    }
    downloadFile = (clip) => {
        let url = "http://localhost:8000/project/download.do?clip=" + clip;
        Axios.get(url)
            .then(res => {
                console.log("download");
            }).catch(err => {
                console.log("notice download error=" + err);
            })
    }
    onDelete = (num) => {
        let url = "http://localhost:8000/project/notice/noticedelete?num=" + num;
        Axios.get(url)
            .then(res => {
            }).catch(err => {
                console.log("notice delete error=" + err);
            })
    }
    render() {
        return (
            <div>
                <div style={{ paddingTop: '100px' }}></div>
                <h2>Notice Detail</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>번호</th>
                            <td>{this.state.noticedata.notice_num}</td>
                        </tr>
                        <tr>
                            <th>작성일</th>
                            <td>{this.state.noticedata.notice_writeday}</td>
                        </tr>
                        <tr>
                            <th>작성자</th>
                            <td>{this.state.noticedata.notice_member_num}</td>
                        </tr>
                        <tr>
                            <th>조회수</th>
                            <td>{this.state.noticedata.notice_readcount}</td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>{this.state.noticedata.notice_subject}</td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>{this.state.noticedata.notice_content}</td>
                        </tr>
                        <tr>
                            <th>첨부파일</th>
                            <td>{this.state.noticefile.map((item, idx) => (
                                <span key={idx}>
                                    <span style={{ cursor: 'pointer' }} onClick={this.downloadFile.bind(this, item)}>{item}</span><br />
                                </span>
                            ))}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                {this.state.admin}
                                <Link to={{ pathname: "/noticeupdate", state: { noticedata: this.state.noticedata, noticefile: this.state.noticefile } }} style={{ color: 'black', textDecoration: 'none' }}>수정</Link>
                                <Link to='/noticelist' onClick={this.onDelete.bind(this, this.state.num)}>삭제</Link>
                                <Link to="/noticelist">목록</Link><br />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Notice_Detail;