import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// export default class AlertList extends Component {
//   constructor({ match }) {
//     super();
//     this.process_num = match.params.process_num;
//     this.state = {
//       alertlist: [],
//     };
//   }

//   list() {
//     let url =
//       "http://localhost:8000/project/memo/list?process_num=" + this.process_num;

//     axios
//       .get(url)
//       .then((res) => {
//         this.setState({
//           alertlist: res.data,
//         });
//       })
//       .catch((err) => {
//         console.log("알림 목록 불러오기 에러 :" + err);
//       });
//   }

//   componentWillMount() {
//     this.list();
//   }

//   render() {
//     const alertlist = this.state.alertlist.map((item, index) => (
//       <ExpansionPanel
//         className={classes.root}
//       >
//         <ExpansionPanelSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//           style={{ backgroundColor: "#E1E1E1" }}
//         >
//           <Typography className={classes.heading}>
//             {item.memo_subject}
//             {item.memo_writeday}
//           </Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>{item.content}</Typography>
//           <a
//             alt=""
//             href={`http://localhost:8000/project/uploadfile/${item.filename}`}
//             download
//           >
//             {item.filename}
//           </a>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//     ));
//     return (
//       <div>
//         <br />
//         <br />
//         <br />
//         <NavLink
//           exact
//           to={"/AlertAdd/" + this.state.alertlist.memo_process_num}
//         >
//           <button>추가</button>
//         </NavLink>
//         <table>{alertlist}</table>
//       </div>
//     );
//   }
// }

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1200px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
}));
export default function AlertList(match) {
  const { process_num } = match.params.process_num;
  const [alertlist, setAlertList] = React.useState([]);
  const list = () => {
    let url =
      "http://localhost:8000/project/memo/list?process_num=" + process_num;

    axios
      .get(url)
      .then((res) => {
        setAlertList(res.data);
      })
      .catch((err) => {
        console.log("알림 목록 불러오기 에러 :" + err);
      });
  };

  useEffect(() => {
    list();
  }, []);

  const classes = useStyles();
  return (
    <div>
      <br />
      <br />
      <br />
      <NavLink exact to={"/AlertAdd/" + this.state.alertlist.memo_process_num}>
        <button>추가</button>
      </NavLink>

      {alertlist.map((item, index) => (
        <ExpansionPanel className={classes.root}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: "#E1E1E1" }}
          >
            <Typography className={classes.heading}>
              {item.memo_subject}
              {item.memo_writeday}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{item.content}</Typography>
            <a
              alt=""
              href={`http://localhost:8000/project/uploadfile/${item.filename}`}
              download
            >
              {item.filename}
            </a>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
