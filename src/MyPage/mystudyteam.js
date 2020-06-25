import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1200px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
];

export default function MyStudyTeam(props) {
  const classes = useStyles();

  const [joinedlist, setJoinedList] = React.useState([]);
  const [myapplylist, setMyApplyList] = React.useState([]);

  const getJoinedList = (event) => {
    const url = `http://localhost:8000/project/studygroup/joinedlist?studygroup_member_num=${localStorage.num}`;

    Axios.get(url)
      .then((res) => {
        setJoinedList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getMyApplyList = (event) => {
    const url = `http://localhost:8000/project/studyapply/myapply?studyapply_member_num=${localStorage.num}`;

    Axios.get(url)
      .then((res) => {
        setMyApplyList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getJoinedList();
    getMyApplyList();
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ marginLeft: "350px" }}>
        <ExpansionPanel className={classes.root}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>소속된 스터디</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" style={{ fontWeight: "bold" }}>
                      번호
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      스터디명
                    </TableCell>
                    <TableCell align="right" style={{ fontWeight: "bold" }}>
                      개설자
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {joinedlist.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell align="left" scope="row">
                        &nbsp;{idx + 1}
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {row.study_subject}
                      </TableCell>
                      <TableCell align="right">{row.study_writer}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <br />
        <ExpansionPanel className={classes.root}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>신청한 스터디</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" style={{ fontWeight: "bold" }}>
                      번호
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      스터디명
                    </TableCell>
                    <TableCell align="right" style={{ fontWeight: "bold" }}>
                      개설자
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {myapplylist.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell align="left" scope="row">
                        &nbsp;{idx + 1}
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {row.study_subject}
                      </TableCell>
                      <TableCell align="right">{row.study_writer}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <br />
        <ExpansionPanel className={classes.root}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              개설한 스터디의 신청 인원 목록
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      스터디명
                    </TableCell>
                    <TableCell align="right" style={{ fontWeight: "bold" }}>
                      개설자
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="center" component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <Link to="/">
        <button>홈으로</button>
      </Link>
    </div>
  );
}
