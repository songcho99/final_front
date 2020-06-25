import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import Axios from "axios";
import queryStirng from "query-string";
import Swal from "sweetalert2";

// const CssTextField = withStyles({
//   root: {
//     "& label.Mui-focused": {
//       color: "green",
//     },
//     "& .MuiInput-underline:after": {
//       borderBottomColor: "green",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "green",
//       },
//       "&:hover fieldset": {
//         borderColor: "green",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "green",
//       },
//     },
//   },
// })(TextField);

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
        setStudyData(res.data.studydata);
        setStudyAddress(res.data.studydata.study_address.substring(7));
        setStudyLevel(
          res.data.studydata.study_level === "하" ||
            res.data.studydata.study_level === 0
            ? 0
            : res.data.studydata.study_level === "중" ||
              res.data.studydata.study_level === 50
            ? 50
            : res.data.studydata.study_level === "상" ||
              res.data.studydata.study_level === 100
            ? 100
            : 0
        );
        if (res.data.study_writer_num == localStorage.num)
          document.getElementById("updatebutton").style.visibility = "block";
        else
          document.getElementById("updatebutton").style.visibility = "hidden";
        if (res.data.study_writer_num == localStorage.num)
          document.getElementById("deletebutton").style.visibility = "block";
        else
          document.getElementById("deletebutton").style.visibility = "hidden";
        if (res.data.study_writer_num == localStorage.num)
          document.getElementById("aplicationbutton").style.visibility =
            "hidden";
        else
          document.getElementById("aplicationbutton").style.visibility =
            "block";
        if (count_peoples == study_peoples)
          document.getElementById("aplicationbutton").style.visibility =
            "hidden";
        else
          document.getElementById("aplicationbutton").style.visibility =
            "block";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:8000/project/studyapply/add";

    Axios.post(url, {
      studyapply_member_num: localStorage.num,
      studyapply_study_num: study_num,
      studyapply_mylevel: studyapply_mylevel,
      studyapply_comment: studyapply_comment,
    })
      .then((res) => {
        Swal.fire({
          position: "middle-middle",
          icon: "success",
          title: "스터디 신청 성공!",
          showConfirmButton: false,
          timer: 1500,
        });
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getApplyState = (event) => {
    const url = `http://localhost:8000/project/studyapply/state?studyapply_member_num=${localStorage.num}&studyapply_study_num=${study_num}`;

    Axios.get(url)
      .then((res) => {
        if (res.data == 1) {
          document.getElementById("aplicationbutton").innerHTML = "승인대기";
          document
            .getElementById("aplicationbutton")
            .setAttribute("disabled", "true");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getGroupState = (event) => {
    const url = `http://localhost:8000/project/studygroup/state?studygroup_member_num=${localStorage.num}&studygroup_study_num=${study_num}`;

    Axios.get(url)
      .then((res) => {
        if (res.data == 1) {
          document.getElementById("aplicationbutton").style.visibility =
            "hidden";
          document.getElementById("aplicationbutton").style.visibility =
            "block";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteStudy = (study_num) => {
    const url = `http://localhost:8000/project/study/delete?study_num=${study_num}`;

    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      text: "삭제 하시려면 삭제 버튼을 눌러주세요",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.value) {
        Axios.delete(url)
          .then((res) => {
            window.location.href = "/studylist";
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire("삭제 성공!", "정상적으로 삭제되었습니다", "success");
      }
      window.location.href = "/studylist";
    });
  };

  useEffect(() => {
    getStudyData();
  }, []);

  useEffect(() => {
    getApplyState();
    getGroupState();
  }, [getStudyData]);

  useEffect(() => {
    studyapply_mylevel === 0 || studyapply_mylevel === "하"
      ? setStudyApplyMyLevel("하")
      : studyapply_mylevel === 50 || studyapply_mylevel === "중"
      ? setStudyApplyMyLevel("중")
      : studyapply_mylevel === 100 || studyapply_mylevel === "상"
      ? setStudyApplyMyLevel("상")
      : setStudyApplyMyLevel("하");
    console.log(`level:${studyapply_mylevel}`);
  }, [studyapply_mylevel]);

  const modal = (
    <div style={modalStyle} className={modalClasses.paper}>
      <div style={{ width: "80%", marginLeft: "10%" }}>
        <h2 id="simple-modal-title">내가 생각하는 숙련도</h2>
        <form onSubmit={onSubmit}>
          <Slider
            value={studyapply_mylevel}
            onChange={handleLevelChange}
            aria-labelledby="discrete-slider-restrict"
            getAriaValueText={valuetext}
            valueLabelDisplay="off"
            step={null}
            marks={marks}
            style={{ width: "100%" }}
          />
          <br />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="comment"
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
            style={{ marginLeft: "65%" }}
            type="submit"
          >
            스터디 신청
          </Button>
        </form>
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
                color="primary"
                style={{ marginLeft: "78%" }}
                onClick={handleOpen}
                id="aplicationbutton"
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
              href={`/updatestudy?study_num=${study_num}`}
              style={{ margin: "8px", backgroundColor: "green" }}
              id="updatebutton"
            >
              수정
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{ margin: "8px" }}
              id="deletebutton"
              onClick={() => {
                deleteStudy(studydata.study_num);
              }}
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
