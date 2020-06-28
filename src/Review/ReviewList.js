import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import ReviewBack from './company.jpg';

const styles = (theme) => ({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
});

let planstot_value = 0;
let readytot_value = 0;
let commutot_value = 0;
let plansavg_value = 0;
let readyavg_value = 0;
let commuavg_value = 0;
let all_value = 0;


class ReviewList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviewList: [],
            path: "http://localhost:8000/project/uploadfile/",
            review_num: 0

        }
    }



    list() {
        let url = "http://localhost:8000/project/review/reviewlist";
        axios.get(url)
            .then((res) => {

                res.data.map(element => {
                    planstot_value += element.review_plans;
                    readytot_value += element.review_ready;
                    commutot_value += element.review_commu;
                });
                plansavg_value = Math.round(planstot_value / (res.data.length + 1))
                readyavg_value = Math.round(readytot_value / (res.data.length + 1))
                commuavg_value = Math.round(commutot_value / (res.data.length + 1))
                all_value = Math.round((plansavg_value + readyavg_value + commuavg_value) / 3)
                console.log("avg1=" + plansavg_value);
                console.log("avg2=" + readyavg_value);
                console.log("avg3=" + commuavg_value);
                console.log("allvalue=" + all_value)
                this.setState({
                    reviewList: res.data,

                });
            }).catch(error => {
                console.log("출력 오류:" + error)
            })
    }

    onDelete = (review_num) => {
        Swal.fire({
            title: '삭제하시겠습니까?',
            text: "삭제된 내용은 복원되지 않습니다",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '확인',
            cancelButtonText: '취소'
        }).then((result) => {
            if (result.value) {
                let url = "http://localhost:8000/project/review/deletereview?review_num=" + review_num;
                axios.get(url)
                    .then((res) => {
                        this.list();
                    }).catch(err => {
                        console.log("삭제 에러:" + err);
                    })
            }
        })


    }
    componentWillMount() {
        this.list();
    }
    render() {
        const backimage = {
            width: "100%",
            height: "400px",
            backgroundImage: `url(${ReviewBack})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        };
        const url = "http://localhost:8000/project/uploadfile/";
        return (
            <div style={{ textAlign: "center" }}>
                <div style={{ paddingTop: "100px" }}></div>
                <div style={backimage}>
                    <span style={{ fontSize: "70px", color: "#A6A6A6" }}>
                        수강 후기 및 리뷰
                    </span>
                    <br />
                    <span style={{ fontSize: "18px", color: "#A6A6A6" }}>
                        수강 후기 및 리뷰
                    </span>
                </div>
                <br></br><br></br>
                <div style={{ marginLeft: 300 }}>
                    <b>전체 만족도</b>
                    <Rating
                        name="All"
                        value={all_value}
                        readOnly
                    />
                </div>
                <br></br><br></br>
                <div style={{ marginLeft: 200 }}>
                    <b>커리큘럼</b>
                    <Rating
                        name="Curri"
                        value={plansavg_value}
                        readOnly
                    />
                    <b>전달력</b>
                    <Rating
                        name="Commu"
                        value={commuavg_value}
                        readOnly
                    />
                    <b>준비성</b>
                    <Rating
                        name="Ready"
                        value={readyavg_value}
                        readOnly
                    />
                    <br></br>
                    <Link to="/addreview">
                        <button style={{ marginLeft: 1000 }}>리뷰 작성</button>
                    </Link>

                    <br></br><br></br><br></br>
                </div>
                <table>
                    {this.state.reviewList.map((item, idx) => (
                        <tbody>
                            <tr key={idx}>
                                <td style={{ width: 200, heigth: 200 }}>
                                    <img src={url + item.member_profile} alt="" style={{ maxWidth: 100 }} />
                                </td>
                                <td style={{ width: 100 }}>
                                    {item.review_subject}
                                </td>
                                <td> <b>{item.review_process}</b></td>
                            </tr>
                            <tr>
                                <td>{item.review_member_name} {localStorage.name === item.review_member_name && (
                                    <Link to={{ pathname: "/updatereview", state: { reviewList: item } }} style={{ color: 'black', textDecoration: 'none' }}>
                                        <button>수정</button>
                                    </Link>
                                )}
                                    {localStorage.name === item.review_member_name && (
                                        <button onClick={this.onDelete.bind(this, item.review_num)}>삭제</button>
                                    )}</td>
                                <td colSpan="2" style={{ width: 200 }}>{item.review_content}</td>
                            </tr>
                            <br></br>
                        </tbody>
                    ))}

                </table>

            </div>
        )
    }
}
export default withStyles(styles)(ReviewList);