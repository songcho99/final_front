import React from "react";
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

export default function AddStudy(props) {
  const [study_type, setStudyType] = React.useState("");
  const [study_subject, setStudySubject] = React.useState("");
  const [study_startdate, setStudyStartdate] = React.useState(
    new Date().setDate(new Date().getDate() + 1)
  );
  const [study_enddate, setStudyEnddate] = React.useState(
    new Date().setDate(new Date().getDate() + 1)
  );
  const [study_gatherday, setStudyGatherday] = React.useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
  const [study_peoples, setStudyPeoples] = React.useState("");
  const [study_level, setStudyLevel] = React.useState(0);
  const [study_intr, setStudyIntr] = React.useState("");
  const [study_goal, setStudyGoal] = React.useState("");
  const [study_progress, setStudyProgress] = React.useState("");
  const [study_address, setStudyAddress] = React.useState("");
  const [study_detailaddr, setStudyDetailaddr] = React.useState("");
  const count = [
    1,
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
    console.log(study_gatherday);
  };
  const handleStartDateChange = (date) => {
    if (new Date() > date) {
      alert("현재 날짜보다 이전 날짜는 선택 불가능합니다");
      return false;
    }
    setStudyStartdate(date);
  };
  const handleEndDateChange = (date) => {
    if (new Date() > date) {
      alert("현재 날짜보다 이전 날짜는 선택 불가능합니다");
      return false;
    }
    setStudyEnddate(date);
  };
  const handlePeoplesChange = (event) => {
    setStudyPeoples(event.target.value);
    console.log(`peoples:${study_peoples}`);
  };
  const handleLevelChange = (event, newValue) => {
    setStudyLevel(newValue);
    console.log(`level:${study_level}`);
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

  const handleClick = () => {};

  const classes = useStyles();
  const sliderclasses = sliderStyles();

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <form className={classes.root} noValidate autoComplete="off">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "80%",
          }}
        >
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
          <div
            style={{
              width: "50%",
            }}
          >
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
          <div>
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
          <div>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={study_gatherday.Monday}
                    onChange={handleGatherdayChange}
                    name="Monday"
                    color="primary"
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
                  />
                }
                label="일요일"
              />
            </FormGroup>
          </div>
          <br />
          <div>
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
          <div className={sliderclasses.root}>
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
              label="기본 주소"
              variant="outlined"
              style={{ zIndex: "0" }}
              InputProps={{
                readOnly: true,
              }}
              onChange={handleAddressChange}
              required
            />
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
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
            InputProps={{
              readOnly: true,
            }}
            onChange={handleDetailAddrChange}
            required
          />
          <br />
          <div>지도영역</div>
          <br />
          <br />
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              startIcon={<PhotoCamera />}
            >
              대표 이미지 선택
            </Button>
          </label>
          <br />
          <br />
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginLeft: "640px" }}
              onClick={handleClick}
            >
              개설하기
            </Button>
            &nbsp;
            <Button variant="outlined" color="primary" href="./studylist">
              목록
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
