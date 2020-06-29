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
    width: theme.spacing(5),
    height: theme.spacing(5),
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
  const [replybox, setReplyBox] = React.useState("");
  const [reply_content, setReplyContent] = React.useState("");
  const [replylist, setReplyList] = React.useState([]);
  const [re_reply_content, setRe_ReplyContent] = React.useState("");
  const [file_num, setFileNum] = React.useState(0);

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
    const url = `http://localhost:8000/project/studyfeed/feedlist?studyfeed_studygroup_num=${studyfeed_studygroup_num}`;

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

    setFileNum(studyfeedfiles_studyfeed_num);

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
        window.location.href = window.location.href;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getReplyBox = (reply_num) => {
    if (document.getElementById(reply_num).style.display === "none")
      document.getElementById(reply_num).style.display = "block";
    else {
      document.getElementById(reply_num).style.display = "none";
    }
  };

  const handleReplyContentChange = (event) => {
    setReplyContent(event.target.value);
    console.log(reply_content);
  };

  const onCommentSubmit = (event, studyfeed_num) => {
    event.preventDefault();
    console.log(studyfeed_num);
    const url = "http://localhost:8000/project/reply/add";

    Axios.post(url, {
      reply_member_num: localStorage.num,
      reply_studyfeed_num: studyfeed_num,
      reply_content: reply_content,
    })
      .then((res) => {
        getFeedList();
        window.location.href = window.location.href;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getReplyList = (et) => {
    const url = "http://localhost:8000/project/reply/list";

    Axios.get(url)
      .then((res) => {
        console.log(res);
        setReplyList(res.data);

        if (et.nextElementSibling.style.display === "none") {
          et.nextElementSibling.style.display = "block";
        } else {
          et.nextElementSibling.style.display = "none";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRe_ReplyContentChange = (event) => {
    setRe_ReplyContent(event.target.value);
    console.log(re_reply_content);
  };

  const onReCommentSubmit = (
    event,
    reply_num,
    studyfeed_num,
    reply_regroup
  ) => {
    event.preventDefault();
    console.log(reply_num);
    const url = "http://localhost:8000/project/reply/add";

    Axios.post(url, {
      reply_num: reply_num,
      reply_member_num: localStorage.num,
      reply_studyfeed_num: studyfeed_num,
      reply_content: re_reply_content,
      reply_regroup: reply_regroup,
    })
      .then((res) => {
        getFeedList();
        window.location.href = window.location.href;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudyMember();
    getFeedList();
  }, []);

  const blank = {
    marginLeft: "30px",
    backgroundColor: "#F6F6F6",
    paddingLeft: "10px",
    paddingBottom: "10px",
  };
  const noblank = {};
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
          <Typography variant="h6">{"피드 " + feedlist.length}</Typography>
          {feedlist.map((row, idx) => (
            <Feed style={{ overflowX: "hidden" }}>
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
                  &nbsp;&nbsp;
                  <Button
                    variant="text"
                    color="primary"
                    type="submit"
                    size="small"
                    style={{ marginLeft: "480px" }}
                    onClick={() => {
                      getFileList(row.studyfeed_num);
                    }}
                  >
                    첨부파일
                  </Button>
                  {filelist.map((ele, i) => (
                    <Typography variant="body1">
                      {row.studyfeed_num === file_num ? ele : ""}
                    </Typography>
                  ))}
                </Feed.Content>
              </Feed.Event>
              <Header
                as="h3"
                dividing
                style={{ width: "650px", cursor: "pointer" }}
                onClick={(e) => {
                  getReplyList(e.target);
                }}
              >
                댓글
              </Header>

              <Comment.Group
                id={"reply" + row.studyfeed_num}
                key={idx}
                style={{ display: "none" }}
              >
                {replylist.map((ele, i) =>
                  ele.reply_studyfeed_num === row.studyfeed_num ? (
                    <Comment style={ele.reply_restep !== 0 ? blank : noblank}>
                      <Avatar
                        alt={ele.member_name}
                        style={{ float: "left" }}
                        src={
                          "http://localhost:8000/project/uploadfile/" +
                          ele.member_profile
                        }
                        className={avatarclasses.small}
                      />
                      <Comment.Content>
                        <Comment.Author as="a">
                          {ele.member_name}
                        </Comment.Author>
                        <Comment.Metadata>
                          <div>
                            {new Date(ele.reply_writeday).toLocaleDateString()}
                          </div>
                        </Comment.Metadata>
                        <Comment.Text>{ele.reply_content}</Comment.Text>
                        <Comment.Actions style={{ marginLeft: "39px" }}>
                          {ele.reply_restep === 0 ? (
                            <Comment.Action
                              onClick={() => {
                                getReplyBox(ele.reply_num);
                              }}
                            >
                              답글
                            </Comment.Action>
                          ) : (
                            ""
                          )}
                        </Comment.Actions>
                        <div id={ele.reply_num} style={{ display: "none" }}>
                          <Form
                            key={i}
                            onSubmit={(event) => {
                              onReCommentSubmit(
                                event,
                                ele.reply_num,
                                row.studyfeed_num,
                                ele.reply_regroup
                              );
                            }}
                          >
                            <Form.TextArea
                              style={{
                                width: "610px",
                                height: "100px",
                                marginLeft: "39px",
                                marginTop: "8px",
                              }}
                              onChange={handleRe_ReplyContentChange}
                            />
                            <SemanticButton
                              content="등록"
                              labelPosition="left"
                              icon="edit"
                              primary
                              style={{
                                marginLeft: "540px",
                              }}
                              type="submit"
                            ></SemanticButton>
                          </Form>
                        </div>
                      </Comment.Content>
                    </Comment>
                  ) : (
                    ""
                  )
                )}
              </Comment.Group>

              <Form
                reply
                onSubmit={(event) => {
                  onCommentSubmit(event, row.studyfeed_num);
                }}
              >
                <Form.TextArea
                  style={{ height: "100px", width: "650px" }}
                  onChange={handleReplyContentChange}
                />
                <SemanticButton
                  content="댓글 작성"
                  labelPosition="left"
                  icon="edit"
                  primary
                  type="submit"
                  style={{ marginLeft: "509.8px" }}
                />
              </Form>
            </Feed>
          ))}
          <br />
          <br />
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
                src={
                  "http://localhost:8000/project/uploadfile/" +
                  row.member_profile
                }
                style={{ float: "left" }}
                className={avatarclasses.large}
              >
                {row.member_name}
              </Avatar>
              <br />
              {row.member_name}
              <br />
              <br />
              <br />
            </div>
          ))}
          <br />
        </Paper>
      </div>
    </div>
  );
}
