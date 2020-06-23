import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Slider,
  Modal,
  TextField,
} from "@material-ui/core";
import defaultImage from "../image/studytestimage.jpg";
import Axios from "axios";
import queryStirng from "query-string";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "green",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    marginLeft: 360,
  },
}));

const cardStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 40 + rand();
  const left = 40 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const modalStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const marks = [
  {
    value: 0,
    label: "하",
  },
  {
    value: 50,
    label: "중",
  },
  {
    value: 100,
    label: "상",
  },
];

function valuetext() {
  return marks.label;
}

export default function StudyDetail(props) {
  const classes = useStyles();
  const cardClasses = cardStyles();
  const modalClasses = modalStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [studyapply_mylevel, setStudyApplyMyLevel] = React.useState(0);
  const [studyapply_comment, setStudyApplyComment] = React.useState("");
  const [studydata, setStudyData] = React.useState([]);
  const { search } = props.location;
  const queryObj = queryStirng.parse(search);
  const { study_num, count_peoples, study_peoples } = queryObj;
  const [studyaddress, setStudyAddress] = React.useState("");
  const [studylevel, setStudyLevel] = React.useState(0);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLevelChange = (event, newValue) => {
    setStudyApplyMyLevel(newValue);
    console.log(`level:${studyapply_mylevel}`);
  };
  const handleCommentChange = (event) => {
    setStudyApplyComment(event.target.value);
    console.log(`comment:${studyapply_comment}`);
  };
  const getStudyData = (event) => {
    const url =
      "http://localhost:8000/project/study/detail?study_num=" + study_num;
    Axios.get(url)
      .then((res) => {
        setStudyData(res.data);
        setStudyAddress(res.data.study_address.substring(7));
        setStudyLevel(
          res.data.study_level === "하" || res.data.study_level === 0
            ? 0
            : res.data.study_level === "중" || res.data.study_level === 50
            ? 50
            : res.data.study_level === "상" || res.data.study_level === 100
            ? 100
            : 0
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudyData();
  }, []);

  const modal = (
    <div style={modalStyle} className={modalClasses.paper}>
      <div style={{ width: "80%", marginLeft: "10%" }}>
        <h2 id="simple-modal-title">내가 생각하는 숙련도</h2>
        <Slider
          value={studyapply_mylevel}
          onChange={handleLevelChange}
          aria-labelledby="discrete-slider-restrict"
          getAriaValueText={valuetext}
          valueLabelDisplay="off"
          step={null}
          marks={marks}
          style={{ width: "100%", color: "green" }}
        />
        <br />
        <br />
        <CssTextField
          id="outlined-multiline-static"
          label="진행방식"
          required
          multiline
          rows={5}
          variant="outlined"
          style={{ width: "100%" }}
          onChange={handleCommentChange}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          href="#"
          style={{ marginLeft: "65%", backgroundColor: "green" }}
        >
          스터디 신청
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <div className={classes.root}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Paper elevation={3}>
          <h2 style={{ margin: "8px" }}>{studydata.study_subject}</h2>
          <img
            alt=""
            src={
              "http://localhost:8000/project/uploadfile/" +
              studydata.study_mainimage
            }
            style={{ width: "100%" }}
          ></img>
          <Card
            className={cardClasses.root}
            style={{
              position: "absolute",
              left: "1200px",
              top: "112px",
              width: "300px",
            }}
          >
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                모집 정보
              </Typography>
              <Typography variant="body1">
                <b> 분류</b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {studydata.study_type}
              </Typography>
              <Typography variant="body1">
                <b>개설자</b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {studydata.study_writer}
              </Typography>
              <Typography variant="body1">
                <b>시작날짜</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {studydata.study_startdate}
              </Typography>
              <Typography variant="body1">
                <b> 끝날짜</b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {studydata.study_enddate}
              </Typography>
              <Typography variant="body1">
                <b>모임요일</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {studydata.study_gatherday}
              </Typography>
              <Typography variant="body1">
                <b>인원</b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {count_peoples + "/" + study_peoples}
              </Typography>
              <Typography variant="body1">
                <b>장소</b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {studyaddress + " " + studydata.study_detailaddr}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                style={{ marginLeft: "80%", color: "green" }}
                onClick={handleOpen}
              >
                신청하기
              </Button>
            </CardActions>
          </Card>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {modal}
          </Modal>
          <br />
          <br />
          <br />
          <div>지도 영역</div>
          <br />
          <br />
          <div style={{ marginLeft: "2%" }}>
            <h3 style={{ display: "inline" }}>난이도</h3>
            <br />
            <br />
            <Slider
              value={studylevel}
              aria-labelledby="discrete-slider"
              getAriaValueText={valuetext}
              valueLabelDisplay="off"
              step={null}
              marks={marks}
              disabled
              style={{ width: "14%", marginLeft: "2%" }}
            />
          </div>
          <br />
          <br />
          <div style={{ marginLeft: "2%", marginRight: "40%" }}>
            <h3 style={{ display: "inline" }}>소개</h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>{studydata.study_intr}</p>
          </div>
          <br />
          <br />
          <div style={{ marginLeft: "2%", marginRight: "40%" }}>
            <h3 style={{ display: "inline" }}>목표</h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>{studydata.study_goal}</p>
          </div>
          <br />
          <br />
          <div style={{ marginLeft: "2%", marginRight: "40%" }}>
            <h3 style={{ display: "inline" }}>진행 방식</h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>{studydata.study_progress}</p>
          </div>
          <br />
          <br />
          <div style={{ marginLeft: "70%" }}>
            <Button
              variant="contained"
              color="primary"
              href="/updatestudy"
              style={{ margin: "8px", backgroundColor: "green" }}
            >
              수정
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              href="/deletestudy"
              style={{ margin: "8px" }}
            >
              삭제
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="/studylist"
              style={{ margin: "8px", color: "green", borderColor: "green" }}
            >
              목록
            </Button>
          </div>
        </Paper>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
