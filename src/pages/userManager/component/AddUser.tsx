import { FormInstance, Form, Modal, Input, DatePicker, message } from "antd";
import moment from "moment";
import { useRef, useEffect, useState } from "react";
import Api from "../api";

interface ModalFormProps {
  visible: boolean;
  isEdit: boolean;
  onCancel: () => void;
  data: any;
  search: () => void;
}
const useResetFormOnCloseModal = ({ form, visible, isEdit, data }: { form: FormInstance; visible: boolean, isEdit: boolean, data: any }) => {
  const prevVisibleRef = useRef<boolean>();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  // 弹框显示并赋值
  useEffect(() => {
    if (isEdit && visible) {
      const { title, createtime, constent, author } = data;
      console.log(data);
      form.setFieldsValue({
        title,
        createtime: moment(createtime),
        constent,
        author
      })
    }
  }, [form, isEdit, visible, data]);
  // 关闭清空表单
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [form, prevVisible, visible, isEdit]);
};
// 弹框组件
const ModalForm: React.FC<ModalFormProps> = ({ visible, onCancel, isEdit, data, search }) => {
  const [form] = Form.useForm();
  const [loading, setloading] = useState<boolean>(false);
  useResetFormOnCloseModal({
    form,
    visible,
    isEdit,
    data
  });

  const onOk = () => {
    form.validateFields().then((fieldsValue) => {
      setloading(true);
      const values = {
        ...fieldsValue,
        id: data.id,
        createtime: fieldsValue.createtime.format('YYYY/MM/DD')
      }      
      if (isEdit) {
        Api.editUser(values).then(() => {
          console.log('编辑成功', values);
          message.success('修改成功！')
          setloading(false)
          search()
          onCancel()
        })
      } else {
        Api.addUser(values).then(() => {
          message.success('新增成功！')
          setloading(false)
          search()
          onCancel()
        })
      }
    });
  };

  return (
    <Modal
      title={isEdit ? '编辑用户' : '添加用户'}
      visible={visible}
      confirmLoading={loading}
      onCancel={onCancel}
      onOk={onOk}
      okText="确定"
      cancelText="取消"
    >
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        form={form}
        name="userForm"
      >
        <Form.Item label="标题" name="title"
          rules={[{ required: true, message: '请输入标题' }]}>
          <Input placeholder="请输入标题" />
        </Form.Item>
        <Form.Item label="创建时间" name="createtime">
          <DatePicker placeholder="请选择时间" />
        </Form.Item>
        <Form.Item label="内容" name="constent" rules={[{ required: true, message: '请输入文章内容' }]}>
          <Input.TextArea placeholder="请输入文章内容" />
        </Form.Item>
        <Form.Item label="作者" name="author">
          <Input placeholder="请输入作者姓名" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;