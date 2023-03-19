import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Modal } from 'antd';

const EditUser = ({ user, isEditUserModalOpen, onEdit, onCancel }) => {
  const [form] = Form.useForm();
  const [editUser, setEditUser] = useState({});
  // const { id, email, name, phone, website } = user;

  console.log('Edit User initialState', editUser);

  useEffect(() => {
    setEditUser(user);
  }, [user]);

  return (
    <Modal
      open={isEditUserModalOpen}
      title="Edit User"
      okText="Edit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onEdit({ ...values, id: editUser?.id });
          })
          .catch((err) => {
            console.log('Validate Failed:', err);
          });
      }}>
      <Form
        form={form}
        layout="vertical"
        name="edit_user_form"
        initialValues={{
          name: editUser?.name,
          email: editUser?.email,
          phone: editUser?.phone,
          website: editUser?.website
        }}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input the name of the user!'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please input the email of the user!'
            }
          ]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item name="phone" label="Phone Number">
          <Input type="tel" />
        </Form.Item>
        <Form.Item name="website" label="Website">
          <Input type="url" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

EditUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string
  }).isRequired,
  isEditUserModalOpen: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default EditUser;
