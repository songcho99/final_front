import React, { useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  Button,
  makeStyles,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Slider,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import "./addstudy.css";
import Axios from "axios";
import Swal from "sweetalert2";

const { kakao } = window;

var { map } = window;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    display: "none",
  },
}));

const sliderStyles = makeStyles({
  root: {
    width: 200,
  },
});

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

function getFormatDate(date) {
  var year = date.getFullYear(); // yyyy
  var month = 1 + date.getMonth(); // M
  month = month >= 10 ? month : "0" + month; // month 두자리로 저장
  var day = date.getDate(); // d
  day = day >= 10 ? day : "0" + day; // day 두자리로 저장
  return year + "-" + month + "-" + day; // '-' 추가하여 yyyy-mm-dd 형태 생성
}

export default function AddStudy(props) {
  const post = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    map = new kakao.maps.Map(container, options);
    document.getElementById("map").style.visibility = "hidden";
    new window.daum.Postcode({
      oncomplete: function (data) {
        const zonecode = data.zonecode;
        const roadAddr = data.address;
        const str = "(" + zonecode + ")" + roadAddr;
        setStudyAddress(str);
        console.log(str);

        var geocoder = new kakao.maps.services.Geocoder();
        console.log(geocoder == null);
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(roadAddr, function (result, status) {
          console.log(kakao.maps.services.Status);
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            var marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">모임장소</div>',
            });
            infowindow.open(map, marker);
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
            document.getElementById("map").style.visibility = "visible";
          }
        });
      },
    }).open();
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;

    document.body.appendChild(script);
  });

  const [study_type, setStudyType] = React.useState("");
  const [study_subject, setStudySubject] = React.useState("");
  const [study_startdate, setStudyStartdate] = React.useState(
    getFormatDate(new Date())
  );
  const [study_enddate, setStudyEnddate] = React.useState(
    getFormatDate(new Date())
  );
  const [study_gatherday, setStudyGatherday] = React.useState(
    // [
    //   { gather: "Monday", stat: false },
    //   { gather: "Tuesday", stat: false },
    //   { gather: "Wednesday", stat: false },
    //   { gather: "Thursday", stat: false },
    //   { gather: "Friday", stat: false },
    //   { gather: "Saturday", stat: false },
    //   { gather: "Sunday", stat: false },
    // ]
    {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    }
  );
  const [study_gatherdayname, setStudyGatherdayName] = React.useState([]);
  const [study_peoples, setStudyPeoples] = React.useState(2);
  const [study_level, setStudyLevel] = React.useState("하");
  const [study_intr, setStudyIntr] = React.useState("");
  const [study_goal, setStudyGoal] = React.useState("");
  const [study_progress, setStudyProgress] = React.useState("");
  const [study_address, setStudyAddress] = React.useState("");
  const [study_detailaddr, setStudyDetailaddr] = React.useState("");
  const count = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  const [study_mainimage, setStudyMainImage] = React.useState("");
  const [file, setFile] = React.useState("");
  const [previewURL, setPreviewURL] = React.useState("");
  const [previewimg, setPreviewImg] = React.useState("");

  const countList = count.map((count, idx) => (
    <MenuItem value={count} key={idx}>
      {count}
    </MenuItem>
  ));

  const handleTypeChange = (event) => {
    setStudyType(event.target.value);
    console.log(`type:${study_type}`);
  };
  const handleSubjectChange = (event) => {
    setStudySubject(event.target.value);
    console.log(`subject:${study_subject}`);
  };
  const handleGatherdayChange = (event) => {
    setStudyGatherday({
      ...study_gatherday,
      [event.target.name]: event.target.checked,
    });

    if (event.target.checked) {
      setStudyGatherdayName(study_gatherdayname.concat(event.target.value));
    } else {
      setStudyGatherdayName(
        study_gatherdayname.filter((gather) => gather !== event.target.value)
      );
    }

    console.log(study_gatherdayname);
  };
  const handleStartDateChange = (date) => {
    if (new Date() > date) {
      alert("현재 날짜보다 이전 날짜는 선택 불가능합니다");
      return false;
    }
    if (study_enddate < date) {
      alert("시작 날짜는 끝 날짜 이후를 선택 불가능합니다");
      return false;
    }
    setStudyStartdate(getFormatDate(date));
  };
  const handleEndDateChange = (date) => {
    if (new Date() > date) {
      alert("현재 날짜보다 이전 날짜는 선택 불가능합니다");
      return false;
    }
    if (study_startdate > date) {
      alert("시작 날짜보다 이전 날짜는 선택 불가능합니다");
      return false;
    }
    setStudyEnddate(getFormatDate(date));
  };
  const handlePeoplesChange = (event) => {
    setStudyPeoples(event.target.value);
    console.log(`peoples:${study_peoples}`);
  };
  const handleLevelChange = (event, newValue) => {
    setStudyLevel(newValue);
  };
  const handleIntrChange = (event) => {
    setStudyIntr(event.target.value);
    console.log(`intr:${study_intr}`);
  };
  const handleGoalChange = (event) => {
    setStudyGoal(event.target.value);
    console.log(`goal:${study_goal}`);
  };
  const handleProgressChange = (event) => {
    setStudyProgress(event.target.value);
    console.log(`progress:${study_progress}`);
  };
  const handleAddressChange = (event) => {
    setStudyAddress(event.target.value);
    console.log(`addr:${study_address}`);
  };
  const handleDetailAddrChange = (event) => {
    setStudyDetailaddr(event.target.value);
    console.log(`detailaddr:${study_detailaddr}`);
  };
  const handleImageChange = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setPreviewURL(reader.result);
    };
    if (event.target.files[0]) reader.readAsDataURL(file);
    setStudyMainImage(file);
  };
  useEffect(() => {
    study_level === 0 || study_level === "하"
      ? setStudyLevel("하")
      : study_level === 50 || study_level === "중"
        ? setStudyLevel("중")
        : study_level === 100 || study_level === "상"
          ? setStudyLevel("상")
          : setStudyLevel("하");
    console.log(`level:${study_level}`);
  }, [study_level]);

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:8000/project/study/add";
    const formData = new FormData();

    console.log(study_level);

    formData.append("study_type", study_type);
    formData.append("study_subject", study_subject);
    formData.append("study_member_num", localStorage.num);
    formData.append("study_startdate", study_startdate);
    formData.append("study_enddate", study_enddate);
    formData.append("study_gatherdayname", study_gatherdayname);
    formData.append("study_peoples", study_peoples);
    formData.append("study_level", study_level);
    formData.append("study_intr", study_intr);
    formData.append("study_goal", study_goal);
    formData.append("study_progress", study_progress);
    formData.append("study_address", study_address);
    formData.append("study_detailaddr", study_detailaddr);
    formData.append("uploadfile", study_mainimage);
    formData.append("study_writer", localStorage.name);
    formData.append("study_writer_num", localStorage.num);
    Axios({
      method: "post",
      url: url,
      // data: {
      //   study_type: study_type,
      //   study_subject: study_subject,
      //   study_startdate: study_startdate,
      //   study_enddate: study_enddate,
      //   study_gatherday: study_gatherday,
      //   study_peoples: study_peoples,
      //   study_level: study_level,
      //   study_intr: study_intr,
      //   study_goal: study_goal,
      //   study_progress: study_progress,
      //   study_address: study_address,
      //   study_detailaddr: study_detailaddr,
      // },
      // data: { formData: formData },
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {

        Swal.fire(
          '작성 완료',
          '스터디 작성이 완료되었습니다',
          'success'
        ).then((result) => {
          if (result.value) {
            console.log(`데이터 추가:${res}`);
            window.location.href = "/studylist";
          }
        })

      })
      .catch((err) => {
        console.log(`데이터 추가 오류:${err}`);
      });
  };

  const classes = useStyles();
  const sliderclasses = sliderStyles();

  useEffect(() => {
    setPreviewImg(<img alt="" src={previewURL} width="400"></img>);
  }, [previewURL]);

  return (
    <div id="addstudyback2">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        id="addstudyback"
        onSubmit={onSubmit}
      >
        <div id="addstudynomargin">
          <div>
            <TextField
              required
              id="standard-required"
              label="제목"
              value={study_subject}
              style={{ width: "800px" }}
              onChange={handleSubjectChange}
            />
          </div>
          <br />
          <br />
          <div style={{ marginLeft: "8px" }}>
            <FormControl
              className={(classes.root, classes.formControl)}
              required
            >
              <InputLabel id="type-select-required-label">분류</InputLabel>
              <Select
                labelId="type-select-required-label"
                id="select-required"
                value={study_type}
                onChange={handleTypeChange}
                className={classes.selectEmpty}
                style={{
                  width: "200px",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Java"}>Java</MenuItem>
                <MenuItem value={"Spring"}>Spring</MenuItem>
                <MenuItem value={"React"}>React</MenuItem>
                <MenuItem value={"기타"}>기타</MenuItem>
              </Select>
            </FormControl>
          </div>
          <br />
          <br />
          <div id="addstudybox">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                label="시작날짜"
                value={study_startdate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                label="끝날짜"
                value={study_enddate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <br />
          <br />
          <div style={{ marginLeft: "8px" }}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={study_gatherday.Monday}
                    onChange={handleGatherdayChange}
                    name="Monday"
                    color="primary"
                    value="월"
                  />
                }
                label="월요일"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={study_gatherday.Tuesday}
                    onChange={handleGatherdayChange}
                    name="Tuesday"
                    color="primary"
                    value="화"
                  />
                }
                label="화요일"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={study_gatherday.Wednesday}
                    onChange={handleGatherdayChange}
                    name="Wednesday"
                    color="primary"
                    value="수"
                  />
                }
                label="수요일"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={study_gatherday.Thursday}
                    onChange={handleGatherdayChange}
                    name="Thursday"
                    color="primary"
                    value="목"
                  />
                }
                label="목요일"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={study_gatherday.Friday}
                    onChange={handleGatherdayChange}
                    name="Friday"
                    color="primary"
                    value="금"
                  />
                }
                label="금요일"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={study_gatherday.Saturday}
                    onChange={handleGatherdayChange}
                    name="Saturday"
                    color="primary"
                    value="토"
                  />
                }
                label="토요일"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={study_gatherday.Sunday}
                    onChange={handleGatherdayChange}
                    name="Sunday"
                    color="primary"
                    value="일"
                  />
                }
                label="일요일"
              />
            </FormGroup>
          </div>
          <br />
          <div style={{ marginLeft: "8px" }}>
            <FormControl
              className={(classes.root, classes.formControl)}
              required
            >
              <InputLabel id="peoples-select-required-label">인원</InputLabel>
              <Select
                labelId="peoples-select-required-label"
                id="select-required"
                value={study_peoples}
                onChange={handlePeoplesChange}
                className={classes.selectEmpty}
                style={{ width: "200px" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {countList}
              </Select>
            </FormControl>
          </div>
          <br />
          <br />
          <div className={sliderclasses.root} style={{ marginLeft: "8px" }}>
            <Typography id="discrete-slider-restrict" gutterBottom>
              난이도
            </Typography>
            <Slider
              value={study_level}
              onChange={handleLevelChange}
              aria-labelledby="discrete-slider-restrict"
              getAriaValueText={valuetext}
              valueLabelDisplay="off"
              step={null}
              marks={marks}
            />
          </div>
          <br />
          <TextField
            id="outlined-multiline-static"
            label="소개"
            required
            multiline
            rows={4}
            variant="outlined"
            style={{ width: "800px", zIndex: "0" }}
            onChange={handleIntrChange}
          />
          <br />
          <br />
          <TextField
            required
            id="standard-required"
            label="목표"
            onChange={handleGoalChange}
            style={{ width: "800px", zIndex: "0" }}
          />
          <br />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="진행방식"
            required
            multiline
            rows={4}
            variant="outlined"
            style={{ width: "800px", zIndex: "0" }}
            onChange={handleProgressChange}
          />
          <br />
          <br />
          <div>
            <TextField
              id="outlined-read-only-input"
              className="detailaddr"
              label="기본 주소"
              variant="outlined"
              style={{ zIndex: "0" }}
              InputProps={{
                readOnly: true,
              }}
              value={study_address}
              onChange={handleAddressChange}
              required
            />
            <Button
              variant="contained"
              color="primary"
              onClick={post}
              style={{ marginTop: "20px" }}
            >
              검색
            </Button>
          </div>
          <br />
          <TextField
            id="outlined-read-only-input"
            label="상세 주소"
            variant="outlined"
            style={{ zIndex: "0" }}
            onChange={handleDetailAddrChange}
            required
          />
          <br />
          <div id="map" style={{ width: "500px", height: "400px" }}></div>
          <br />
          <br />
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            name="study_mainimage"
            onChange={handleImageChange}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              startIcon={<PhotoCamera />}
              style={{ marginLeft: "8px" }}
            >
              대표 이미지 선택
            </Button>
          </label>
          <br />
          <br />
          <div style={{ marginLeft: "8px" }}>{previewimg}</div>
          <br />
          <br />
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginLeft: "640px" }}
            >
              개설하기
            </Button>
            &nbsp;
            <Button variant="outlined" color="primary" href="./studylist">
              목록
            </Button>
            <br />
            <br />
            <br />
          </div>
        </div>
      </form>
    </div>
  );
}
