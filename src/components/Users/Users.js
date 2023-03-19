import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import User from '../User';
import EditUser from '../EditUser';
import { editUser } from '@/redux/actions/users';

function Users({ users }) {
  const dispatch = useDispatch();
  // const editingUser = useSelector((state) => state.users.editingUser);
  const [editingUser, setEditingUser] = useState({});
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);

  const handleUpdateUser = (values) => {
    console.log('Received values of form: ', values);
    dispatch(editUser(values));
    setIsEditUserModalOpen(false);
  };

  const handleEditUser = (user) => {
    // console.log('Before Edit in Users.js', user);
    setEditingUser(user);
    setIsEditUserModalOpen(true);
    // console.log('After Edit in Users.js', user);
  };

  return (
    <>
      <EditUser
        user={editingUser}
        isEditUserModalOpen={isEditUserModalOpen}
        onEdit={handleUpdateUser}
        onCancel={() => {
          setIsEditUserModalOpen(false);
        }}
      />

      <Row
        justify="center"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32
        }}>
        {users?.map((user, index) => (
          <Col
            key={index}
            className="gutter-row"
            xs={{
              span: 24
            }}
            sm={{
              span: 12
            }}
            md={{
              span: 8
            }}
            lg={{
              span: 6
            }}>
            <User user={user} onEditUser={handleEditUser} />
          </Col>
        ))}
      </Row>
    </>
  );
}

Users.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape())
};

Users.defaultProps = {
  data: []
};

export default Users;
