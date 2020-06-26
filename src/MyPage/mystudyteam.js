import React, { useEffect } from "react";
import {
  Feed,
  Icon,
  Comment,
  Header,
  Form,
  ButtonGroup,
  FeedLabel,
} from "semantic-ui-react";
import {
  TextField,
  Paper,
  makeStyles,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import SemanticButton from "semantic-ui-react/dist/commonjs/elements/Button/Button";
import queryStirng from "query-string";
import Axios from "axios";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const paperStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(40),
    },
  },
}));

const avatarStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    margin: theme.spacing(1),
  },
}));

export default function MyStudyTeam(props) {
  const paperClasses = paperStyles();
  const avatarclasses = avatarStyles();

  const { search } = props.location;
  const queryObj = queryStirng.parse(search);
  const { studyfeed_studygroup_num } = queryObj;
  const [studymembercount, setStudyMemberCount] = React.useState([]);
  const [studymemberlist, setStudyMemberList] = React.useState([]);
  const [studyfeed_content, setStudyFeedContent] = React.useState("");
  const [uploadfile, setUploadFile] = React.useState([]);
  const [
    studyfeedfiles_studyfeed_filename,
    setStudyFeedFileName,
  ] = React.useState([]);
  const [filecount, setFileCount] = React.useState(0);
  const [feedlist, setFeedList] = React.useState([]);
  const [filelist, setFileList] = React.useState([]);

  const handleContentChange = (event) => {
    setStudyFeedContent(event.target.value);
    console.log(studyfeed_content);
  };

  const handleFileChange = (event) => {
    console.log(event.target.files.length);
    setFileCount(event.target.files.length);
    for (let i = 0; i < event.target.files.length; i++) {
      uploadfile.push(event.target.files[i]);
      studyfeedfiles_studyfeed_filename.push(event.target.files[i].name);
    }
    console.log(uploadfile);
    console.log(studyfeedfiles_studyfeed_filename);
  };

  const getStudyMember = () => {
    const url = `http://localhost:8000/project/studyfeed/member?studyfeed_studygroup_num=${studyfeed_studygroup_num}`;

    Axios.get(url)
      .then((res) => {
        setStudyMemberCount(res.data.membercount);
        setStudyMemberList(res.data.memberlist);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFeedList = () => {
    const url = "http://localhost:8000/project/studyfeed/feedlist";

    Axios.get(url)
      .then((res) => {
        setFeedList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFileList = (studyfeedfiles_studyfeed_num) => {
    const url =
      "http://localhost:8000/project/studyfeed/filelist?studyfeedfiles_studyfeed_num=" +
      studyfeedfiles_studyfeed_num;

    Axios.get(url)
      .then((res) => {
        setFileList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const url = "http://localhost:8000/project/studyfeed/add";
    const formData = new FormData();

    for (var i = 0; i < uploadfile.length; i++) {
      formData.append(`uploadfile[${i}]`, uploadfile[i]);
    }
    formData.append(
      "studyfeedfiles_studyfeed_filename",
      studyfeedfiles_studyfeed_filename
    );
    formData.append("studyfeed_content", studyfeed_content);
    formData.append("studyfeed_studygroup_num", studyfeed_studygroup_num);
    formData.append("studyfeed_member_num", localStorage.num);

    Axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        getStudyMember();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudyMember();
    getFeedList();
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ float: "left" }}>
        <br />
        <div style={{ marginLeft: "400px", width: "750px" }}>
          <form onSubmit={onSubmit}>
            <TextField
              id="outlined-multiline-static"
              label="내용"
              multiline
              rows={5}
              style={{ width: "650px" }}
              variant="outlined"
              onChange={handleContentChange}
            />
            <br />
            <br />
            <div>
              <input
                style={{ display: "none" }}
                id="contained-button-file"
                multiple
                onChange={handleFileChange}
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  size="small"
                >
                  파일 선택
                </Button>
                &nbsp;
                {filecount !== 0 ? filecount + " 개 첨부됨" : ""}
              </label>
            </div>
            <Button
              variant="text"
              color="primary"
              type="submit"
              style={{ marginLeft: "570px", fontSize: "12pt" }}
            >
              작성
            </Button>
          </form>
          <hr style={{ width: "650px", marginRight: "100px" }} />

          {feedlist.map((row, idx) => (
            <Feed>
              <Feed.Event>
                <Avatar
                  alt={row.member_name}
                  style={{ float: "left" }}
                  src={
                    "http://localhost:8000/project/uploadfile/" +
                    row.member_profile
                  }
                  className={avatarclasses.small}
                />
                <Feed.Content>
                  <Feed.Summary>
                    {row.member_name}
                    <Feed.Date>
                      {new Date(row.studyfeed_writeday).toLocaleDateString()}
                    </Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>{row.studyfeed_content}</Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />
                      {row.studyfeed_likes} Likes
                    </Feed.Like>
                  </Feed.Meta>
                  &nbsp;&nbsp;
                  <Button
                    variant="text"
                    color="primary"
                    type="submit"
                    size="small"
                    style={{ marginLeft: "450px" }}
                    onClick={() => {
                      getFileList(row.studyfeed_num);
                    }}
                  >
                    첨부파일
                  </Button>
                  {filelist.map((row, idx) => (
                    <Typography variant="body1">{row}</Typography>
                  ))}
                </Feed.Content>
              </Feed.Event>
              <Comment.Group>
                <Header as="h3" dividing>
                  댓글 3
                </Header>

                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.comhttps://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Matt</Comment.Author>
                    <Comment.Metadata>
                      <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>How artistic!</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.comhttps://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Elliot Fu</Comment.Author>
                    <Comment.Metadata>
                      <div>Yesterday at 12:30AM</div>
                    </Comment.Metadata>
                    <Comment.Text>
                      <p>
                        This has been very useful for my research. Thanks as
                        well!
                      </p>
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                  <Comment.Group>
                    <Comment>
                      <Comment.Avatar src="https://react.semantic-ui.comhttps://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                      <Comment.Content>
                        <Comment.Author as="a">Jenny Hess</Comment.Author>
                        <Comment.Metadata>
                          <div>Just now</div>
                        </Comment.Metadata>
                        <Comment.Text>
                          Elliot you are always so right :)
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                </Comment>

                <Form reply>
                  <Form.TextArea style={{ height: "100px" }} />
                  <SemanticButton
                    content="댓글 작성"
                    labelPosition="left"
                    icon="edit"
                    primary
                    style={{ marginLeft: "509.8px" }}
                  />
                </Form>
                <br />
                <br />
                <br />
                <br />
              </Comment.Group>
            </Feed>
          ))}
        </div>
      </div>
      <div className={paperClasses.root}>
        <Paper>
          <Typography style={{ fontWeight: "bold", fontSize: "14pt" }}>
            참여 중인 인원({studymembercount})
          </Typography>
          {studymemberlist.map((row, idx) => (
            <div key={idx}>
              <Avatar
                alt={row.member_name}
                style={{ float: "left" }}
                src={
                  "http://localhost:8000/project/uploadfile/" +
                  row.member_profile
                }
                className={avatarclasses.large}
              />
              <br />
              <Typography variant="body1" style={{ fontSize: "12pt" }}>
                {row.member_name}
              </Typography>
            </div>
          ))}
          <br />
        </Paper>
      </div>
    </div>
  );
}
