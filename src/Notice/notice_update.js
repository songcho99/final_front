import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

class Notice_Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noticedata: this.props.location.state.noticedata,
            noticefile: this.props.location.state.noticefile,
            fileName: [],
            uploadFile: [],
            filelist: [],
            delfile: [],
            notice: 0,
        }
    }

    componentWillMount() {
        this.fileList();
    }
    onImageChange = (e) => {
        console.log(e.target.files.length);
        for (let i = 0; i < e.target.files.length; i++) {
            //uploadFile.push("{idx:uploadFile_" + i + " name:" + e.target.files[i] + "}");
            //uploadFile[i] = { idx: i.toString(), name: e.target.files[i] };
            this.state.uploadFile.push(e.target.files[i]);
            this.state.fileName.push(e.target.files[i].name);
        }
        console.log(this.state.fileName);
    }
    fileList = () => {
        this.setState({
            filelist: this.state.noticefile.map((item, idx) => (
                <span key={idx} id={idx + item}>
                    <span id={idx} name="nfiles" value={item}>{item}</span>&nbsp;&nbsp;
                    <span onClick={this.filedelete.bind(this, idx, item)} style={{ cursor: 'pointer' }}>X</span><br />
                </span>
            ))
        })
    }

    delfileplus = (item) => {
        let s = this.state.delfile;
        s.push(item);
        this.setState({
            delfile: s
        })
    }

    filedelete = (idx, item) => {
        console.log("삭제" + idx);
        document.getElementById(idx + item).style.display = "none";
        this.delfileplus(item);

        document.getElementById(idx).setAttribute("name", "deleteFile");
        console.log(this.state.delfile);
    }
    onCheckboxhandler = (e) => {
        this.setState({
            notice: 1,
        })
    }
    updateNotice = (e) => {
        e.preventDefault();
        const dataForm = new FormData();
        for (var i = 0; i < this.state.uploadFile.length; i++) {
            dataForm.append(`notice_file[${i}]`, this.state.uploadFile[i]);
        }
        for (var f = 0; f < this.state.delfile.length; f++) {
            console.log(this.state.delfile.length);
            console.log(this.state.delfile[f]);
            dataForm.append(`notice_delfile[${f}]`, this.state.delfile[f]);
        }
        dataForm.append("notice_num", this.state.noticedata.notice_num);
        dataForm.append("notice_subject", e.target.notice_subject.value);
        dataForm.append("notice_content", e.target.notice_content.value);
        dataForm.append("notice_filename", this.state.fileName);
        dataForm.append("notice_type", this.state.notice);

        let url = "http://localhost:8000/project/notice/noticeupdate"
        Axios
            .post(url, dataForm, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then((res) => {
                console.log("notice update");
            }).catch((err) => {
                console.log("notice update error=" + err);
            })
    }
    render() {
        return (
            <div>
                <div style={{ paddingTop: '100px' }}></div>
                <h3>Notice Update</h3>
                <form onSubmit={this.updateNotice.bind(this)}>
                    <input type="hidden" name="notice_member_num" value={this.state.noticedata.notice_member_num} />
                    <table style={{ width: "400px" }}>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" value="1" onChange={this.onCheckboxhandler.bind(this)} />맨 위로
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <TextField id="standard-basic" label="subject" style={{ width: "400px" }} name="notice_subject" value={this.state.noticedata.notice_subject} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <TextField id="standard-textarea" label="content" style={{ width: "400px" }} name="notice_content" multiline value={this.state.noticedata.notice_content} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <input type="file" multiple="multiple" id="contained-button-file" variant="contained" name="notice_filename"
                                            onChange={this.onImageChange.bind(this)} />
                                        <label htmlFor="contained-button-file">
                                            <Button type="file" variant="contained" color="primary" component="span">Upload</Button>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.state.filelist}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <Button type="submit" variant="contained" color="primary">UPDATE</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
export default Notice_Update;