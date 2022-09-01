import { FormInstance, Form, Modal, Checkbox, Radio, Input, Select } from "antd";
import { useRef, useEffect, useState } from "react";
import Api from "../api";

interface ModalFormProps {
  visible: boolean;
  isEdit: boolean;
  onCancel: () => void;
}
const useResetFormOnCloseModal = ({ form, visible, isEdit }: { form: FormInstance; visible: boolean, isEdit: boolean }) => {
  const prevVisibleRef = useRef<boolean>();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  // 弹框显示并赋值
  useEffect(() => {
    if (isEdit && visible) {
      form.setFieldsValue({
        disabled: true, type: 'apple', name: '123', checked: 'demo'
      })
    }
  }, [form, isEdit, visible]);
  // 关闭清空表单
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [form, prevVisible, visible, isEdit]);
};
// 弹框组件
const ModalForm: React.FC<ModalFormProps> = ({ visible, onCancel, isEdit }) => {
  const [form] = Form.useForm();
  const [loading, setloading] = useState<boolean>(false);
  useResetFormOnCloseModal({
    form,
    visible,
    isEdit
  });

  const onOk = () => {
    form.validateFields().then((values) => {
      setloading(true);
      Api.addUser(form.getFieldsValue()).then(() => {
        setloading(false)
        onCancel()
      })
    });
  };

  return (
    <Modal
      title={isEdit ? '编辑用户' : '添加用户'}
      visible={visible}
      confirmLoading={loading}
      onCancel={onCancel}
      onOk={onOk}
    >
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        form={form}
        name="userForm"
      >
        <Form.Item label="Chekbox" name="disabled" valuePropName="checked"
          rules={[{ required: true, message: '请勾选！' }]}>
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio" name="type">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input" name="name" rules={[{ required: true, message: '必填' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Select" name="checked">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;