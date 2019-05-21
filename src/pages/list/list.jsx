import React, { Component } from "react";
import { ajax } from "../../utils/http";
import qs from "querystring";

export default class list extends Component {
  componentDidMount() {
    this.postlist();
    this.get();
  }

  postlist() {
    const data = {
      title: "foo",
      body: "bar",
      userId: 1
    };
    ajax({
      api: "/posts",
      method: "post",
      data,
      timeout: 15000
    })
      .then(res => {
        console.log(res, "post");
        return res;
      })
      .then(res => {
        // console.log(res, "我要执行get");
        // this.get();
      });
  }
  get() {
    ajax({
      api: "/posts/1",
      method: "get",
      timeout: 15000
    }).then(res => {
      console.log(res, "get");
    });
  }
  render() {
    return <div>list!!!!!!!!</div>;
  }
}
