import React, { useEffect } from "react";
import { Feed, Comment, Header, Form } from "semantic-ui-react";
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
import useIntersect from "./useIntersect";
import BeatLoader from "react-spinners/BeatLoader";
import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ClearIcon from "@material-ui/icons/Clear";
import Swal from "sweetalert2";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

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

const fakeFetch = (delay = 1000) =>
  new Promise((res) => setTimeout(res, delay));

export default function MyStudyTeam(props) {
  const [state, setState] = React.useState({ itemCount: 0, isLoading: false });
  /* fake async fetch */
  const fetchItems = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    await fakeFetch();
    setState((prev) => ({
      itemCount: prev.itemCount + 3,
      isLoading: false,
    }));
  };
  /* initial fetch */
  useEffect(() => {
    fetchItems();
  }, []);
  useEffect(() => {
    getFeedList(state.itemCount);
  }, [state.itemCount]);
  const [_, setRef] = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    await fetchItems();
    observer.observe(entry.target);
  }, {});
  const { itemCount, isLoading } = state;

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
  const [reply_content, setReplyContent] = React.useState("");
  const [replylist, setReplyList] = React.useState([]);
  const [file_num, setFileNum] = React.useState(0);
  const [updatefilecount, setUpdateFileCount] = React.useState(0);

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

  const getFeedList = (itemCount) => {
    const url = `http://localhost:8000/project/studyfeed/feedlist?studyfeed_studygroup_num=${studyfeed_studygroup_num}&offset=${itemCount}`;

    Axios.get(url)
      .then((res) => {
        var array = res.data;
        for (let index = 0; index < array.length; index++) {
          feedlist.push(array[index]);
        }
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
        getReplyList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getReplyList = (et) => {
    const url = "http://localhost:8000/project/reply/list";

    Axios.get(url)
      .then((res) => {
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

  const getUpdateForm = (event, idx) => {
    if (document.getElementById("update" + idx).style.display === "none") {
      document.getElementById("feed" + idx).style.display = "none";
      document.getElementById("update" + idx).style.display = "block";
    }
  };

  const getFeedForm = (event, idx) => {
    if (document.getElementById("feed" + idx).style.display === "none") {
      document.getElementById("update" + idx).style.display = "none";
      document.getElementById("feed" + idx).style.display = "block";
    }
  };

  const handleFileDelete = (filename, i) => {
    const url =
      "http://localhost:8000/project/studyfeed/filedelete?studyfeedfiles_studyfeed_filename=" +
      filename;

    Axios.delete(url)
      .then((res) => {
        document.getElementById("file" + i).style.display = "none";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateFileChange = (event) => {
    console.log(event.target.files.length);
    setUpdateFileCount(event.target.files.length);
    for (let i = 0; i < event.target.files.length; i++) {
      uploadfile.push(event.target.files[i]);
      studyfeedfiles_studyfeed_filename.push(event.target.files[i].name);
    }
    console.log(uploadfile);
    console.log(studyfeedfiles_studyfeed_filename);
  };

  const onUpdateSubmit = (event, studyfeed_num) => {
    event.preventDefault();

    const url = "http://localhost:8000/project/studyfeed/update";
    const formData = new FormData();

    for (var i = 0; i < uploadfile.length; i++) {
      formData.append(`uploadfile[${i}]`, uploadfile[i]);
    }
    formData.append(
      "studyfeedfiles_studyfeed_filename",
      studyfeedfiles_studyfeed_filename
    );
    formData.append("studyfeed_content", studyfeed_content);
    formData.append("studyfeed_num", studyfeed_num);

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

  const onDeleteFeed = (event, idx, studyfeed_num) => {
    const url =
      "http://localhost:8000/project/studyfeed/delete?studyfeed_num=" +
      studyfeed_num;

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
            document.getElementById("feedcontent" + idx).style.display = "none";
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire("삭제 성공!", "정상적으로 삭제되었습니다", "success");
      }
    });
  };

  const onDeleteComment = (reply_num, i) => {
    const url =
      "http://localhost:8000/project/reply/delete?reply_num=" + reply_num;

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
            document.getElementById("comment" + i).style.display = "none";
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire("삭제 성공!", "정상적으로 삭제되었습니다", "success");
      }
    });
  };

  useEffect(() => {
    getStudyMember();
  }, []);

  if (!itemCount) return null;
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
            <Feed style={{ overflowX: "hidden" }} id={"feedcontent" + idx}>
              <Feed.Event id={"feed" + idx}>
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
                    {localStorage.num == row.studyfeed_member_num ? (
                      <span style={{ marginLeft: "450px" }}>
                        <CreateIcon
                          style={{ color: "gray", cursor: "pointer" }}
                          onClick={(event) => {
                            getUpdateForm(event, idx);
                          }}
                        />
                        &nbsp;&nbsp;
                        <DeleteOutlineIcon
                          style={{ color: "gray", cursor: "pointer" }}
                          onClick={(event) => {
                            onDeleteFeed(event, idx, row.studyfeed_num);
                          }}
                        />
                      </span>
                    ) : (
                      ""
                    )}
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
                      {row.studyfeed_num === file_num ? (
                        <a
                          alt={ele}
                          href={`http://localhost:8000/project/uploadfile/${ele}`}
                          download
                        >
                          {ele}
                        </a>
                      ) : (
                        ""
                      )}
                    </Typography>
                  ))}
                </Feed.Content>
              </Feed.Event>
              <form
                onSubmit={(event) => {
                  onUpdateSubmit(event, row.studyfeed_num);
                }}
                style={{ display: "none" }}
                id={"update" + idx}
              >
                <ArrowBackIcon
                  style={{ color: "gray", cursor: "pointer" }}
                  onClick={(event) => {
                    getFeedForm(event, idx);
                  }}
                />
                <br />
                <TextField
                  id="outlined-multiline-static"
                  label="내용"
                  multiline
                  rows={5}
                  style={{ width: "650px" }}
                  variant="outlined"
                  onChange={handleContentChange}
                  defaultValue={row.studyfeed_content}
                />
                <br />
                <br />

                <div>
                  <input
                    style={{ display: "none" }}
                    id="contained-button-updatefile"
                    multiple
                    onChange={handleUpdateFileChange}
                    type="file"
                  />
                  <label htmlFor="contained-button-updatefile">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                      size="small"
                    >
                      파일 선택
                    </Button>
                    &nbsp;
                    {updatefilecount !== 0
                      ? updatefilecount + " 개 첨부됨"
                      : ""}
                    <br />
                    <Button
                      variant="text"
                      color="primary"
                      size="small"
                      style={{ marginLeft: "480px" }}
                      onClick={() => {
                        getFileList(row.studyfeed_num);
                      }}
                    >
                      파일 내역
                    </Button>
                  </label>
                  {filelist.map((ele, i) => (
                    <Typography variant="body1">
                      {row.studyfeed_num === file_num ? (
                        <span id={"file" + i}>
                          {ele}
                          <ClearIcon
                            style={{
                              cursor: "pointer",
                              paddingTop: "10px",
                              color: "red",
                            }}
                            onClick={() => {
                              handleFileDelete(ele, i);
                            }}
                          />
                        </span>
                      ) : (
                        ""
                      )}
                    </Typography>
                  ))}
                </div>
                <Button
                  variant="text"
                  color="primary"
                  type="submit"
                  style={{ marginLeft: "570px", fontSize: "12pt" }}
                >
                  수정
                </Button>
              </form>
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
                    <Comment id={"comment" + i}>
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
                          {ele.reply_member_num == localStorage.num ? (
                            <HighlightOffIcon
                              style={{ marginLeft: "450px", cursor: "pointer" }}
                              onClick={() => {
                                onDeleteComment(ele.reply_num, i);
                              }}
                            />
                          ) : (
                            ""
                          )}
                        </Comment.Metadata>
                        <Comment.Text>{ele.reply_content}</Comment.Text>
                      </Comment.Content>
                    </Comment>
                  ) : (
                    ""
                  )
                )}
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
              </Comment.Group>
            </Feed>
          ))}
          <br />
          <div ref={setRef} className="Loading">
            {isLoading && (
              <div style={{ marginLeft: "280px" }}>
                <BeatLoader color="#5AAEFF" />
              </div>
            )}
          </div>
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
