import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import User from '../User';
import EditUser from '../EditUser';
import { editUser } from '@/redux/actions/users';

function Users({ users }) {
  const dispatch = useDispatch();
  const [editingUser, setEditingUser] = useState({});
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);

  const handleUpdateUser = (values) => {
    dispatch(editUser(values));
    setIsEditUserModalOpen(false);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsEditUserModalOpen(true);
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
        {users?.map((user) => (
          <Col
            key={user.id}
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
  users: PropTypes.arrayOf(PropTypes.shape())
};

Users.defaultProps = {
  users: []
};

export default Users;
