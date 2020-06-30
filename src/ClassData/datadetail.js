import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


class DataDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classdata: [],
            classdatafile: [],
            num: this.props.location.state.num,
            member_type: localStorage.type
        }
    }

    detailList = (num) => {
        let url = "http://localhost:8000/project/classdata/classdatadetail?num=" + num;
        axios.get(url)
            .then((res) => {
                console.log("classdatafile=" + this.state.classdatafile);
                this.setState({
                    classdata: res.data
                });
                if (this.state.member_type === "강사") {

                    this.setState({
                        admin: (
                            <span>
                                <Link
                                    to={{
                                        pathname: "/updatedata",
                                        state: {
                                            classdata: this.state.classdata,
                                            classdatafile: this.state.classdatafile
                                        },
                                    }}
                                    style={{ color: "black", textDecoration: "none" }}
                                >
                                    <button
                                        type="button"
                                        style={{
                                            fontSize: "16px",
                                            backgroundColor: "white",
                                            width: "110px",
                                            height: "40px",
                                            borderRadius: "25px",
                                            cursor: "pointer",
                                            border: "1px solid gray",
                                        }}
                                    >
                                        <i className="fas fa-pencil-alt"></i>&nbsp;&nbsp; 수정
                                        </button>
                                </Link>
                                &nbsp;&nbsp;
                                <button
                                    type="button"
                                    style={{
                                        fontSize: "16px",
                                        backgroundColor: "white",
                                        width: "110px",
                                        height: "40px",
                                        borderRadius: "25px",
                                        cursor: "pointer",
                                        border: "1px solid gray",
                                    }}
                                    onClick={this.onDelete.bind(this, this.state.num)}
                                >
                                    <i className="far fa-trash-alt"></i>&nbsp;&nbsp; 삭제
                                 </button>
                            </span>
                        )
                    })
                }
            }).catch((err) => {
                console.log("상세 에러:" + err);
            });
        let url2 = "http://localhost:8000/project/classdatafiles/classdatafilesdetail?num=" + num;
        axios.get(url2)
            .then((res) => {
                this.setState({
                    classdatafile: res.data,
                });
                console.log("classdatafile=" + this.state.classdatafile);
            })
            .catch((err) => {
                console.log("classdatafiles 에러=" + err);
            });
    };
    downloadFile = (clip) => {
        let url = "http://localhost:8000/project/download.do?clip=" + clip;
        axios.get(url)
            .then((res) => {
                console.log("download");
            })
            .catch((err) => {
                console.log("notice download error=" + err);
            });
    };

    onDelete = (num) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                let url = "http://localhost:8000/project/classdata/classdatadelete?num=" + num;
                axios.get(url)
                    .then((res) => {
                        window.location.href = "/classdata";
                    })
                    .catch((err) => {
                        console.log("notice delete error=" + err);
                    });
            }

        })

    };

    componentWillMount() {
        this.detailList(this.state.num);
    }
    componentDidMount() {
        console.log(this.state.classdatafile.length);

    }
    render() {
        return (
            <div>
                <div style={{ paddingTop: "100px" }}></div>
                <span style={{ fontSize: "40px" }}>수업자료</span>
                <br />
                <div style={{ paddingTop: "100px" }}></div>
                <table Align="center">
                    <tbody>
                        <tr>
                            <td style={{ width: "100px" }}>제목</td>
                            <td style={{ width: "800px" }} Align="left">
                                {this.state.classdata.classdata_subject}
                            </td>
                            <td style={{ width: "200px" }}>
                                작성일&nbsp;&nbsp;{this.state.classdata.classdata_writeday}
                            </td>
                        </tr>
                        <tr >
                            <td colSpan="3" Align="left">
                                <pre style={{ marginLeft: "40px" }}>
                                    {this.state.classdata.classdata_content}
                                </pre>
                            </td>
                        </tr>
                        <tr >
                            <td>첨부파일</td>
                            <td
                                colSpan="2"
                                Align="left"
                                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                            >
                                {this.state.classdatafile.map((item, idx) => (
                                    <span key={idx}>
                                        <span
                                            style={{ cursor: "pointer" }}
                                            onClick={this.downloadFile.bind(this, item)}
                                        >
                                            {item}
                                        </span>
                                        <br />
                                    </span>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ paddingBottom: "20px" }}></div>
                {this.state.admin}&nbsp;&nbsp;
                <Link
                    to={{
                        pathname: "/classdata",

                    }}
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <button type="button">
                        <i className="fas fa-bars"></i>&nbsp;&nbsp; 목록
          </button>
                </Link>
                <div style={{ paddingBottom: "100px" }}></div>
            </div>
        )
    }
}
export default DataDetail;