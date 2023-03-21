import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Modal } from 'antd';

function EditUser({ user, isEditUserModalOpen, onEdit, onCancel }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (isEditUserModalOpen) form.setFieldValue(user);
  }, [isEditUserModalOpen]);

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
            onEdit({ ...values, id: user?.id });
          })
          .catch((err) => {
            // eslint-disable-next-line no-alert
            alert('Validate Failed:', err);
          });
      }}>
      <Form
        form={form}
        layout="vertical"
        name="edit_user_form"
        initialValues={{
          name: user?.name,
          email: user?.email,
          phone: user?.phone,
          website: user?.website
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
}

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
