import React, { Component } from "react";
import { Table } from "antd";
export default class TestTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      data: []
    };
  }
  componentDidMount() {
    this.mockData();
  }
  renderContent(value, row, index) {
    const obj = {
      children: value,
      props: {}
    };
    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  }
  mockData() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name"
      },
      {
        title: "Age",
        dataIndex: "age"
        // render: this.renderContent
      },
      {
        title: "Home phone",

        dataIndex: "tel",
        render: (value, row, index) => {
          const obj = {
            children: value,
            props: {}
          };
          if (index === 2) {
            obj.props.rowSpan = 3;
          }
          // These two are merged into above cell
          if (index === 3) {
            obj.props.rowSpan = 0;
          }
          if (index === 4) {
            obj.props.rowSpan = 0;
          }

          return obj;
        }
      },
      {
        title: "Phone",
        dataIndex: "phone",
        render: (value, row, index) => {
          const obj = {
            children: value,
            props: {}
          };
          if (index === 2) {
            obj.props.rowSpan = 3;
          }
          // These two are merged into above cell
          if (index === 3) {
            obj.props.rowSpan = 0;
          }
          if (index === 4) {
            obj.props.rowSpan = 0;
          }

          return obj;
        }
      },
      {
        title: "Address",

        dataIndex: "address"
      }
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        tel: "0571-22098909",
        phone: 18889898989,
        address: "New York No. 1 Lake Park"
      },
      {
        key: "2",
        name: "Jim Green",
        tel: "0571-22098333",
        phone: 18889898888,
        age: 42,
        address: "London No. 1 Lake Park"
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        tel: "0575-22098909",
        phone: 18900010002,
        address: "Sidney No. 1 Lake Park"
      },
      {
        key: "4",
        name: "Jim Red",
        age: 18,
        tel: "0575-22098909",
        phone: 18900010002,
        address: "London No. 2 Lake Park"
      },
      {
        key: "5",
        name: "Jake White",
        age: 18,
        tel: "0575-22098909",
        phone: 18900010002,
        address: "Dublin No. 2 Lake Park"
      }
    ];
    this.setState({
      data,
      columns
    });
  }
  render() {
    const { columns, data } = this.state;
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          // size="middle"
          // scroll={{ x: "130%", y: 240 }}
        />
      </div>
    );
  }
}
