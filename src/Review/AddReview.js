import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles, TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';
// import SaveIcon from "@material-ui/icons/Save"
import Swal from 'sweetalert2';

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


class AddReview extends Component {
  state = {
    review_subject: '',
    review_content: '',
    process_value : 2,
    plans_value : 2,
    ready_value : 2,
    commu_value : 2,
    hover : -1

  }
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

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
        plans_value: e2.target.value
    })
    console.log("커리큘럼:"+this.state.plans_value)
}
isSetCommuValue=(e3)=>{
    this.setState({
        commu_value: e3.target.value
    })
    console.log("전달력:"+this.state.commu_value)
}
isSetReadyValue=(e4)=>{
    this.setState({
        ready_value: e4.target.value
    })
    console.log("준비성"+this.state.ready_value)
}

isSetHover=(event)=>{
    this.setState({
        hover : event.target.hover
    })
    console.log(this.state.hover)
}

  isUpload = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('review_subject', this.state.review_subject)
    data.append('review_content', this.state.review_content)
    data.append('review_member_num', localStorage.num)
    data.append('review_member_name', localStorage.name)
    data.append('review_process', "교육과정")
    data.append('review_plans', this.state.plans_value)
    data.append('review_commu', this.state.commu_value)
    data.append('review_ready', this.state.ready_value)
    let url = "http://localhost:8000/project/review/addreview"
    axios.post(url, data)
      .then((res) => {
        Swal.fire(
          '작성 완료',
          '소중한 리뷰 감사합니다',
          'success'
        ).then((result)=>{
          if(result.value){
            window.location.href = "/reviewlist";
          }
        })
        
      }).catch(err => {
        console.log("리뷰작성 오류: " + err)
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
        <form className="reviewinsert" onSubmit={this.isUpload.bind(this)}>
          <br></br><br></br><br></br><br></br>
          <h1>리뷰 작성</h1>
          <br></br>

          <div id="plans_review" className={classes.root}>
        <b>커리큘럼</b> &nbsp;     
        <Rating
        name="hover-feedback1"
        value={this.state.plans_value}
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
        value={this.state.ready_value}
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
        value={this.state.commu_value}
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
            variant="outlined"
            style={{ width: "800px", zIndex: "0" }}
            onKeyUp={this.handleContChange.bind(this)}
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
export default withStyles(styles)(AddReview);
