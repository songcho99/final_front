import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
class Notice_Add extends Component {
    constructor() {
        super();
        this.state = {
            fileName: [],
            uploadFile: []
        }
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


    onSave = (e) => {
        e.preventDefault();
        const dataForm = new FormData();
        for (var i = 0; i < this.state.uploadFile.length; i++) {
            dataForm.append(`notice_file[${i}]`, this.state.uploadFile[i]);
        }
        dataForm.append("notice_member_num", e.target.notice_member_num.value);
        dataForm.append("notice_subject", e.target.notice_subject.value);
        dataForm.append("notice_content", e.target.notice_content.value);
        dataForm.append("notice_filename", this.state.fileName);
        console.log(e.target.notice_subject.value);
        console.log(e.target.notice_content.value);

        let url = "http://localhost:8000/project/notice/noticeadd"
        Axios
            .post(url, dataForm, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then((res) => {
                console.log("Notice add");

            }).catch((err) => {
                console.log("notice add error=" + err);
            })
    }
    render() {
        return (
            <div>
                <div style={{ paddingTop: '100px' }}></div>
                <h2>Notice Add</h2>

                <Link to="/noticelist">Noticelist</Link><br />
                <form onSubmit={this.onSave.bind(this)}>
                    <input type="hidden" name="notice_member_num" value="1" />
                    <table style={{ width: "400px" }}>
                        <tbody>
                            <tr>
                                <td>
                                    <TextField id="standard-basic" label="subject" style={{ width: "400px" }} name="notice_subject" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <TextField id="standard-textarea" label="content" style={{ width: "400px" }} name="notice_content" multiline />
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
                                <td colSpan="2">
                                    <Button type="submit" variant="contained" color="primary">ADD</Button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
export default Notice_Add;