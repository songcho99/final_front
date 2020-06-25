import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles, TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';
import Swal from 'sweetalert2';
// import SaveIcon from "@material-ui/icons/Save"

const styles = (theme) => ({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
      },
  input: {
    display: 'none'
  }
});


class UpdateReview extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviewList : this.props.location.state.reviewList,
            review_ready : this.props.location.state.reviewList.review_ready,
            review_plans : this.props.location.state.reviewList.review_plans,
            review_commu : this.props.location.state.reviewList.review_commu,
            review_content : this.props.location.state.reviewList.review_content,
            review_subject : this.props.location.state.reviewList.review_subject,
            review_num : this.props.location.state.reviewList.review_num
            

        
          }
    }
  
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  componentDidMount=()=>{
      console.log(this.state.reviewList);
      this.setState({
        
      })
  }

  handleSubjectChange = (e) => {
    e.preventDefault();
    this.setState({
      review_subject: e.target.value
    })
    console.log("제목: " + this.state.review_subject)
  }


  handleContChange = (e) => {
    e.preventDefault();
    this.setState({
      review_content: e.target.value
    })
    console.log("내용: " + this.state.review_content)

  }
isSetPlansValue=(e2)=>{
    this.setState({
        review_plans: e2.target.value
    })
    console.log("커리큘럼:"+this.state.review_plans)
}
isSetCommuValue=(e3)=>{
    this.setState({
        review_commu: e3.target.value
    })
    console.log("전달력:"+this.state.review_commu)
}
isSetReadyValue=(e4)=>{
    this.setState({
        review_ready: e4.target.value
    })
    console.log("준비성"+this.state.review_ready)
}

isSetHover=(event)=>{
    this.setState({
        hover : event.target.hover
    })
    console.log(this.state.hover)
}

  isUpdate = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('review_num',this.state.review_num)
    data.append('review_subject', this.state.review_subject)
    data.append('review_content', this.state.review_content)
    data.append('review_member_num', localStorage.num)
    data.append('review_member_name', localStorage.name)
    data.append('review_process', "교육과정")
    data.append('review_plans', this.state.review_plans)
    data.append('review_commu', this.state.review_commu)
    data.append('review_ready', this.state.review_ready)
    let url = "http://localhost:8000/project/review/updatereview"
    axios.post(url, data)
      .then((res) => {
        Swal.fire(
            '수정 완료',
            '수정이 완료되었습니다',
            'success'
          ).then((result)=>{
            if(result.value){
              window.location.href = "/reviewlist";
            }
          })
      }).catch(err => {
        console.log("리뷰수정 오류: " + err)
      })

    // FormData의 key 확인
    for (let key of data.keys()) {
      console.log(key);
    }

    // FormData의 value 확인
    for (let value of data.values()) {
      console.log(value);
    }
  }



  render() {
      const {classes} =this.props;
    return (
      <div style={{ width: 900 }}>
        <form className="reviewinsert" onSubmit={this.isUpdate.bind(this)}>
          <br></br><br></br><br></br><br></br>
          <h1>리뷰 수정</h1>
          <br></br>

          <div id="plans_review" className={classes.root}>
        <b>커리큘럼</b> &nbsp;     
        <Rating
        name="hover-feedback1"
        value={this.state.review_plans}
        precision={1}
        onChange={this.isSetPlansValue.bind(this)}
        onChangeActive={this.isSetHover.bind(this)}
      />
    </div>
    <br></br>
    <div id="ready_review" className={classes.root}>
        <b>준비성</b> &nbsp;     
        <Rating
        name="hover-feedback2"
        value={this.state.review_ready}
        precision={1}
        onChange={this.isSetReadyValue.bind(this)}
        onChangeActive={this.isSetHover.bind(this)}
      />
    </div>
    <br></br>
    <div id="communication_review" className={classes.root}>
        <b>전달력</b> &nbsp;     
        <Rating
        name="hover-feedback3"
        value={this.state.review_commu}
        precision={1}
        onChange={this.isSetCommuValue.bind(this)}
        onChangeActive={this.isSetHover.bind(this)}
      />
    </div>
    <br></br>


          <TextField
            id="outlined-read-only-input"
            label="제목"
            variant="outlined"
            value={this.state.review_subject}
            onChange={this.handleSubjectChange.bind(this)}
            required
            style={{ margin: "8px", width: "400px" }}
          />
          <hr />
          
          <TextField
            id="outlined-multiline-static"
            label="내용"
            required
            multiline
            rows={9}
            value={this.state.review_content}
            variant="outlined"
            style={{ width: "800px", zIndex: "0" }}
            onChange={this.handleContChange.bind(this)}
          />
          <br></br><br></br>

          <div style={{ marginLeft: "650px" }}>
            <Button variant="contained" color="primary" type="submit">
              등록
          </Button> &nbsp;&nbsp;

          <Button variant="contained" color="primary" href="/reviewlist">
              목록
          </Button> &nbsp;&nbsp;
          </div>
        </form>
      </div>

    )
  }
}
export default withStyles(styles)(UpdateReview);
