import { Button, Input, Popconfirm, Space, Table, Tag, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import AddUser from "./component/AddUser";
import React, { useEffect, useState } from "react";
import { mock as Mock } from "mockjs";
import Api from './api'
import '../../mock/mockData'
import './style.less'
const { Link } = Typography;
interface DataType {
  goodsClass: string;
  goodsId: string;
  goodsName: string;
  goodsAddress: string;
  goodsStar: string;
  goodsImg: string;
  goodsSale: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '商品种类',
    dataIndex: 'goodsClass',
    key: 'goodsClass',
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: '商品Id',
    dataIndex: 'goodsId',
    key: 'goodsId',
  },
  {
    title: '商品名称',
    dataIndex: 'goodsName',
    key: 'goodsName',
  },
  {
    title: '商品地址',
    dataIndex: 'goodsAddress',
    key: 'goodsAddress',
  },
  {
    title: '商品等级评价 ',
    dataIndex: 'goodsStar',
    key: 'goodsStar',
  },
  {
    title: '商品售价',
    dataIndex: 'goodsSale',
    key: 'goodsSale',
  },
  {
    title: '操作',
    dataIndex: 'ccc',
    key: 'ccc',
    render: (text: string, record: DataType) => (
      <Space size="middle">
        <a>编辑</a>
        <Popconfirm cancelText="取消" title="确定删除?" onConfirm={deleteRow}>
          <Link color="red">
            删除
          </Link>
        </Popconfirm>
      </Space>
    ),
  },
];
const deleteRow = () => {
  console.log('删除')
}
const data: any[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    goodsId: Mock('@id'),
    goodsName: Mock('@cname'),
    goodsClass: Mock('@cname'),
    goodsAddress: Mock('@county(true)'),
    goodsStar: Mock('@integer(1, 5)'),
    goodsSale: Mock('@integer(1, 100)'),
  });
}
function UserManager() {
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [isEdit, setEditStatus] = useState(false);
  // const [data, setData] = useState([]);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  // 选中表格数据
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  // 表格选项配置
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  // 初始化表格数据
  // useEffect(() => {
  //   setData(Mock({
  //     // 20条数据
  //     "data|20": [{
  //       // 商品种类
  //       "goodsClass": "女装",
  //       // 商品Id
  //       "goodsId|+1": 1,
  //       //商品名称
  //       "goodsName": "@ctitle(5)",
  //       //商品地址
  //       "goodsAddress": "@county(true)",
  //       //商品等级评价★
  //       "goodsStar|1-5": "★",
  //       //商品售价
  //       "goodsSale|30-500": 30,
  //       // 标签
  //     }]
  //   }).data)
  // }, [])
  const showUserModal = (type: string) => {
    switch (type) {
      case 'add':
        setVisible(true)
        setEditStatus(false)
        break;
      case 'edit':
        setVisible(true)
        setEditStatus(true)
        break;
      default:
        break;
    }
  };
  const hideUserModal = () => {
    setVisible(false);
  };
  const changeUser = (e: any): any => {
    setUserInfo(e.target.value)
    console.log(userInfo);
  }
  const search = () => {
    Api.searchUser({ name: userInfo }).then((res: any) => {
      // setData(Mock({
      //   // 20条数据
      //   "data|20": [{
      //     // 商品种类
      //     "goodsClass": "女装",
      //     // 商品Id
      //     "goodsId|+1": 1,
      //     //商品名称
      //     "goodsName": "@ctitle(5)",
      //     //商品地址
      //     "goodsAddress": "@county(true)",
      //     //商品等级评价★
      //     "goodsStar|1-5": "★",
      //     //商品图片
      //     "goodsImg": "@Image('16x16','@color','小甜甜')",
      //     //商品售价
      //     "goodsSale|30-500": 30,
      //     // 标签
      //     "tags|1-3": ["@city"],
      //   }]
      // }).data)
    })
  }
  // 获取表达的值
  return (
    <div className="user-container">
      <div className="header-search">
        <div>
          <Input placeholder="请输入用户名" onChange={changeUser} width="120" />
        </div>
        <div>
          <Space><Button type="primary" onClick={search}>查询</Button>
            <Button type="primary" onClick={() => showUserModal('add')}>新增</Button>
            <Button type="primary" onClick={() => showUserModal('edit')}>编辑</Button>
            <Button type="primary">删除</Button></Space>
        </div>
      </div>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{
          defaultPageSize: 16,
          // showQuickJumper: true,
          showTotal: (total) => `共 ${total} 条`,
        }}
      />
      <AddUser visible={visible} onCancel={hideUserModal} isEdit={isEdit} />
    </div>
  );
}
export default UserManager;