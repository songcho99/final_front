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
    width: "60%",
    marginLeft: "20%",
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
  const { study_num } = queryObj;

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
          <h2 style={{ margin: "8px" }}>JAVA 스터디 모집중</h2>
          <img alt="" src={defaultImage} style={{ width: "60%" }}></img>
          <Card
            className={cardClasses.root}
            style={{
              position: "absolute",
              width: "20%",
              left: "58%",
              top: "18%",
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
              <Typography variant="h6">
                분류&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {studydata.study_type}
              </Typography>
              <Typography variant="h6">
                개설자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {studydata.study_writer}
              </Typography>
              <Typography variant="h6">
                시작날짜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {studydata.study_startdate}
              </Typography>
              <Typography variant="h6">
                끝날짜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {studydata.study_enddate}
              </Typography>
              <Typography variant="h6">
                모임요일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {studydata.study_gatherday}
              </Typography>
              <Typography variant="h6">
                인원&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3/6
              </Typography>
              <Typography variant="h6">
                장소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서울
                강남구 삼원타워
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
              value={50}
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
            <p>
              깊은 대화까지도 자연스러워지는 Topics for Racers - 사랑&관계,
              여행, 가족, 뮤지션, 가치관 얘기부터 비즈니스영어까지. - 알고나면
              활용도100% 리얼한 대화표현들!
            </p>
          </div>
          <br />
          <br />
          <div style={{ marginLeft: "2%", marginRight: "40%" }}>
            <h3 style={{ display: "inline" }}>목표</h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>
              마지막에는 스프링 클라우드 기능을 녹일 수 있는 토이 프로젝트 진행
            </p>
          </div>
          <br />
          <br />
          <div style={{ marginLeft: "2%", marginRight: "40%" }}>
            <h3 style={{ display: "inline" }}>진행 방식</h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>
              1. 매주 책 정리 및 예제 실습한 결과물을 깃헙( 컨플루언스 등등 모두
              가능합니다 ) 공유 2. 매주 발표자 1~2명 ( 정리한 내용을 발표하시면
              됩니다ㅎㅎ ) 3. 마지막에는 스프링 클라우드 기능을 녹일 수 있는
              토이 프로젝트 진행
            </p>
          </div>
          <br />
          <br />
          <div style={{ marginLeft: "77%" }}>
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
