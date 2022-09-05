import { Button, Input, message, Popconfirm, Space, Table, Typography, Modal } from "antd";
import { ColumnsType } from "antd/lib/table";
import AddUser from "./component/AddUser";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import Api from './api'
import '../../mock/mockData'
import './style.less'
const { confirm } = Modal;
const { Link } = Typography;
interface DataType {
  id: string;
  name: string;
  sex: string;
  age: string;
  birthday: string;
  key: React.Key;
}

function UserManager() {
  const [visible, setVisible] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [isEdit, setEditStatus] = useState(false);
  const [userDetail, setEditData] = useState([]);
  const [data, setData] = useState<DataType[]>()
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  useEffect(() => {
    Api.getUserList({}).then((res) => {
      setData(res.data.data)
    })
  }, [])
  // 选中表格数据

  // 删除多条数据
  const deleteRows = () => {
    if (selectedRowKeys.length < 1) {
      message.warn('请选择一条或多条数据！')
      return
    }
    confirm({
      title: '确认删除这些文章？',
      icon: <ExclamationCircleOutlined />,
      content: '删除文章不可恢复，请谨慎操作！',
      onOk() {
        
        Api.deleteUser({id: selectedRowKeys}).then(()=>{
          message.success('删除成功！')
          setSelectedRowKeys([])
          search();
        })
      },
      onCancel() { },
    });
  }
  // 显示新增修改弹框
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
  // 用户列表表头数字段
  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: 'id',
      dataIndex: 'id',
      render: (text: string) => <span>{text}</span>,
    },
    {
      key: 'title',
      title: '标题',
      dataIndex: 'title',
    },
    {
      key: 'createtime',
      title: '创建时间',
      dataIndex: 'createtime',
    },
    {
      key: 'constent',
      title: '内容',
      dataIndex: 'constent',
    },
    {
      key: 'author',
      title: '作者',
      dataIndex: 'author',
    },
    {
      title: '操作',
      dataIndex: 'ccc',
      key: 'ccc',
      render: (text: string, record: DataType) => (
        <Space size="middle">
          <span onClick={() => editUser(record.id)}>编辑</span>
          <Popconfirm cancelText="取消" title="确定删除?" onConfirm={() => deleteRow(record)}>
            <Link color="red">
              删除
            </Link>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  // 获取文章列表（筛选）
  const search = () => {
    Api.getUserList({ keyword }).then((res: any) => {
      setData(res.data.data)
    })
  }
  // 修改用户
  const editUser = (id: any) => {
    Api.getUserDetail(id).then(res => {
      console.log(`获取id:${id}用户详情`);
      // 显示弹框
      setVisible(true)
      // 修改弹框状态（是否为修改装啊提）
      setEditStatus(true)
      // 弹框传值
      setEditData(res.data.data)
    })
  }
  // 删除单条数据
  const deleteRow = (row: any) => {
    console.log(row);

    Api.deleteUser({ id: row.id }).then(res => {
      message.success(`${row.title}删除成功`)
      search();
    })
  }
  // 关闭弹框
  const hideUserModal = () => {
    setVisible(false);
  };
  // 新增修改用户
  const changeUser = (e: any): any => {
    setKeyword(e.target.value)
  }
  return (
    <div className="user-container">
      <div className="header-search">
        <div>
          <Input placeholder="请输入文章标题" onChange={changeUser} width="120" />
        </div>
        <div>
          <Space>
            <Button type="primary" onClick={search}>查询</Button>
            <Button type="primary" onClick={() => showUserModal('add')}>新增</Button>
            <Button type="primary" onClick={deleteRows}>批量删除</Button>
          </Space>
        </div>
      </div>
      <div className="user-list">
        <Table
          rowKey={record => record.id}
          rowSelection={{
            type: "checkbox",
            onChange: (selectedRowKeys, selectedRows) => {
              setSelectedRowKeys(selectedRowKeys);
            }
          }}
          columns={columns}
          dataSource={data}
          size="small"
          pagination={{
            defaultPageSize: 15,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      </div>
      <AddUser visible={visible} onCancel={hideUserModal} isEdit={isEdit} data={userDetail} search={search} />
    </div >
  );
}
export default UserManager;