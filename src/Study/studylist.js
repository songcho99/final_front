import React from "react";
import {
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  FormControl,
  TextField,
  Button,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Select,
  Slider,
  InputLabel,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
  ExpansionPanelActions,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import image from "../image/studytestimage.jpg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    marginLeft: "25%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 190,
  },
}));

const tileData = [
  {
    img: image,
    title: "Image",
    author: "author",
  },
];

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

export default function StudyList(props) {
  const { loading = false } = props;
  const classes = useStyles();

  const [searchFilter, setSearchFilter] = React.useState("");
  const [searchSubject, setSearchSubject] = React.useState("");
  const [searchLevel, setSearchLevel] = React.useState("");
  const [searchType, setSearchType] = React.useState("");
  const [searchStartdate, setSearchStartdate] = React.useState(
    new Date().setDate(new Date().getDate() + 1)
  );
  const [searchEnddate, setSearchEnddate] = React.useState(
    new Date().setDate(new Date().getDate() + 1)
  );
  const [searchGatherday, setSearchGetherday] = React.useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
  const [searchAddress, setSearchAddress] = React.useState("");
  const [searchDetailAddr, setSearchDetailAddr] = React.useState("");

  const handleSearchFilterChange = (event) => {
    setSearchFilter(event.target.value);
    console.log(`searchfilter:${searchFilter}`);
  };
  const handleSearchSubjectChange = (event) => {
    setSearchSubject(event.target.value);
    console.log(`searchsubject:${searchSubject}`);
  };
  const handleSearchLevelChange = (event, newValue) => {
    setSearchLevel(newValue);
    console.log(`searchlevel:${searchLevel}`);
  };
  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
    console.log(`searchtype:${searchType}`);
  };
  const handleSearchStartdateChange = (date) => {
    if (new Date() > date) {
      alert("현재 날짜보다 이전 날짜는 선택 불가능합니다");
      return false;
    }
    if (searchEnddate < date) {
      alert("시작 날짜는 끝 날짜 이후를 선택 불가능합니다");
      return false;
    }
    setSearchStartdate(date);
  };
  const handleSearchEnddateChange = (date) => {
    if (new Date() > date) {
      alert("현재 날짜보다 이전 날짜는 선택 불가능합니다");
      return false;
    }
    if (searchStartdate > date) {
      alert("시작 날짜보다 이전 날짜는 선택 불가능합니다");
      return false;
    }
    setSearchEnddate(date);
  };
  const handleSearchGatherdayChange = (event) => {
    setSearchGetherday({
      ...searchGatherday,
      [event.target.name]: event.target.checked,
    });
    console.log(searchGatherday);
  };
  const handleSearchAddressChange = (event) => {
    setSearchAddress(event.target.value);
    console.log(`searchaddr:${searchAddress}`);
  };
  const handleSearchDetailAddrChange = (event) => {
    setSearchDetailAddr(event.target.value);
    console.log(`searchdetailaddr:${searchDetailAddr}`);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        variant="outlined"
        color="primary"
        href="/mystudyteam"
        style={{
          marginLeft: "84.5%",
        }}
      >
        마이 스터디
      </Button>
      <br />
      <br />
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className={classes.heading}
              style={{ fontSize: "20pt", fontWeight: "bold" }}
            >
              검색 카테고리
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                native
                value={searchFilter}
                onChange={handleSearchFilterChange}
                inputProps={{
                  name: "searchFilter",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value={"전체"}>전체</option>
                <option value={"제목"}>제목</option>
                <option value={"내용"}>내용</option>
                <option value={"작성자"}>작성자</option>
              </Select>
            </FormControl>
            &nbsp;&nbsp;
            <TextField
              id="outlined-read-only-input"
              label="제목"
              variant="outlined"
              onChange={handleSearchSubjectChange}
              required
              style={{ margin: "8px", width: "500px" }}
            />
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <div style={{ width: "200px", margin: "8px" }}>
              <Typography id="discrete-slider-restrict" gutterBottom>
                난이도
              </Typography>
              <Slider
                onChange={handleSearchLevelChange}
                getAriaValueText={valuetext}
                valueLabelDisplay="off"
                step={null}
                marks={marks}
              />
            </div>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <FormControl
              className={(classes.root, classes.formControl)}
              required
            >
              <InputLabel id="type-select-required-label">
                스터디 분야
              </InputLabel>
              <Select
                labelId="type-select-required-label"
                id="select-required"
                value={searchType}
                onChange={handleSearchTypeChange}
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
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                label="시작날짜"
                value={searchStartdate}
                onChange={handleSearchStartdateChange}
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
                value={searchEnddate}
                onChange={handleSearchEnddateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={searchGatherday.Monday}
                    onChange={handleSearchGatherdayChange}
                    name="Monday"
                    color="primary"
                  />
                }
                label="월요일"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={searchGatherday.Tuesday}
                    onChange={handleSearchGatherdayChange}
                    name="Tuesday"
                    color="primary"
                  />
                }
                label="화요일"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={searchGatherday.Wednesday}
                    onChange={handleSearchGatherdayChange}
                    name="Wednesday"
                    color="primary"
                  />
                }
                label="수요일"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={searchGatherday.Thursday}
                    onChange={handleSearchGatherdayChange}
                    name="Thursday"
                    color="primary"
                  />
                }
                label="목요일"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={searchGatherday.Friday}
                    onChange={handleSearchGatherdayChange}
                    name="Friday"
                    color="primary"
                  />
                }
                label="금요일"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={searchGatherday.Saturday}
                    onChange={handleSearchGatherdayChange}
                    name="Saturday"
                    color="primary"
                  />
                }
                label="토요일"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={searchGatherday.Sunday}
                    onChange={handleSearchGatherdayChange}
                    name="Sunday"
                    color="primary"
                  />
                }
                label="일요일"
              />
            </FormGroup>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <FormControl className={classes.formControl}>
              <Select
                native
                value={searchAddress}
                onChange={handleSearchAddressChange}
                inputProps={{
                  name: "searchAddress",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value={"강원도"}>강원도</option>
                <option value={"경기도"}>경기도</option>
                <option value={"경상남도"}>경상남도</option>
                <option value={"경상북도"}>경상북도</option>
                <option value={"광주광역시"}>광주광역시</option>
                <option value={"대구광역시"}>대구광역시</option>
                <option value={"대전광역시"}>대전광역시</option>
                <option value={"부산광역시"}>부산광역시</option>
                <option value={"서울특별시"}>서울특별시</option>
                <option value={"세종특별자치시"}>세종특별자치시</option>
                <option value={"울산광역시"}>울산광역시</option>
                <option value={"인천광역시"}>인천광역시</option>
                <option value={"전라남도"}>전라남도</option>
                <option value={"전라북도"}>전라북도</option>
                <option value={"제주특별자치도"}>제주특별자치도</option>
                <option value={"충청남도"}>충청남도</option>
                <option value={"충청북도"}>충청북도</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <Select
                native
                value={searchDetailAddr}
                onChange={handleSearchDetailAddrChange}
                inputProps={{
                  name: "searchAddress",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value={"강원도"}>강원도</option>
                <option value={"경기도"}>경기도</option>
                <option value={"경상남도"}>경상남도</option>
                <option value={"경상북도"}>경상북도</option>
                <option value={"광주광역시"}>광주광역시</option>
                <option value={"대구광역시"}>대구광역시</option>
                <option value={"대전광역시"}>대전광역시</option>
                <option value={"부산광역시"}>부산광역시</option>
                <option value={"서울특별시"}>서울특별시</option>
                <option value={"세종특별자치시"}>세종특별자치시</option>
                <option value={"울산광역시"}>울산광역시</option>
                <option value={"인천광역시"}>인천광역시</option>
                <option value={"전라남도"}>전라남도</option>
                <option value={"전라북도"}>전라북도</option>
                <option value={"제주특별자치도"}>제주특별자치도</option>
                <option value={"충청남도"}>충청남도</option>
                <option value={"충청북도"}>충청북도</option>
              </Select>
            </FormControl>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <Button href="#" style={{ marginLeft: "90%" }} color="primary">
              검색
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
      <br />
      <br />
      <br></br>
      <br></br>
      {/* <div className={gridClasses.root}>
        <GridList cellHeight={180} className={gridClasses.gridList}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <Link to="/studydetail">
                <img
                  src={tile.img}
                  alt={tile.title}
                  style={{ width: "300px", height: "200px" }}
                />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>모집자: {tile.author}</span>}
                  style={{ width: "300px" }}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={gridClasses.icon}
                    ></IconButton>
                  }
                />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div> */}
      {tileData.map((tile, idx) => (
        <div style={{ marginLeft: "100px" }} key={idx}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                loading ? (
                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Avatar
                    alt="Ted talk"
                    src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                  />
                )
              }
              action={
                loading ? null : (
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                )
              }
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  "Ted"
                )
              }
              subheader={
                loading ? (
                  <Skeleton animation="wave" height={10} width="40%" />
                ) : (
                  "5 hours ago"
                )
              }
            />
            {loading ? (
              <Skeleton
                animation="wave"
                variant="rect"
                className={classes.media}
              />
            ) : (
              <Link to="/studydetail">
                <CardMedia
                  className={classes.media}
                  image={tile.img}
                  title="Ted talk"
                />
              </Link>
            )}

            <CardContent>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : (
                <Typography variant="body2" color="textSecondary" component="p">
                  {
                    "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                  }
                </Typography>
              )}
            </CardContent>
          </Card>
        </div>
      ))}
      <br />
      <Button
        variant="contained"
        color="primary"
        href="./addstudy"
        style={{ marginLeft: "83.8%" }}
      >
        스터디 만들기
      </Button>
      <br />
      <br />
      <br />
    </div>
  );
}
