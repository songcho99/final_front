import React, { Component } from "react";
import IntroduceMenu from "../Introduce/IntroduceMenu";
import Axios from "axios";

class AcademyLink extends Component {
  constructor(props) {
    super(props);
    this.state = { processFiles: [] };
  }

  img = () => {
    console.log("img 실행");

    let url = "http://localhost:8000/project/process/detail?process_num=2";

    Axios.get(url)
      .then((res) => {
        console.log(res.data.processfiles);
        this.setState({
          processFiles: res.data.processfiles,
        });
      })
      .catch((err) => {
        console.log("이미지 가지고 오기 오류" + err);
      });
  };

  componentWillMount() {
    this.img();
    console.log("왜 안되지?");
  }

  render() {
    const imageUrl = "http://localhost:8000/project/uploadfile/";
    return (
      <div>
        <div>
          <div>학원소개</div>
          <div>
            {this.state.processFiles.map((item) => (
              <img src={imageUrl + item.processfiles_process_filename}></img>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default AcademyLink;
