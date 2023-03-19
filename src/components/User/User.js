import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Form, Input, Modal, Skeleton } from 'antd';
import Icon, {
  DeleteTwoTone,
  EditTwoTone,
  LinkOutlined,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';

import { API_URL } from '@/utils/constants';
import { deleteUser, toggleLike } from '@/redux/actions/users';

const HeartSvg = () => (
  <svg
    id="heart"
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    width="20px"
    viewBox="0 0 612 792">
    <path
      d="M611.721,288.299c-2.258-42.176-20.114-81.782-50.287-111.524c-30.557-30.119-70.43-46.708-112.27-46.708
    c-62.267,0-107.396,49.233-131.641,75.684c-3.743,4.085-8.13,8.87-11.183,11.79c-2.444-2.529-5.756-6.3-8.803-9.768
    c-22.142-25.222-68.223-77.704-134.688-77.704c-41.84,0-81.711,16.588-112.268,46.708C20.408,206.517,2.547,246.121,0.29,288.299
    c-2.248,42.107,8.521,78.746,34.92,118.803c20.888,31.701,75.961,93.605,133.927,150.543c29.856,29.326,57.336,54.18,79.466,71.873
    c35.936,28.729,49.7,32.413,57.674,32.413c7.476,0,21.614-3.352,57.895-32.332c22.079-17.637,49.463-42.451,79.194-71.76
    c57.445-56.63,112.318-118.617,133.443-150.743C594.576,380.072,614.6,342.151,611.721,288.299z"
    />
  </svg>
);

const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;

function User({ user, onEditUser }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.users.isLoading);

  const { id, email, name, phone, username, website, isLiked } = user;

  const handleToggleLike = () => {
    dispatch(toggleLike(id));
  };

  const handleEditUser = (u) => {
    // console.log('User.js ', u);
    onEditUser(u);
  };

  const handleDeleteUser = () => {
    dispatch(deleteUser(id));
  };

  return (
    <Card
      style={{
        width: '100%',
        marginTop: 16,
        textAlign: 'left'
      }}
      title={name}
      type="inner"
      actions={[
        <HeartIcon
          key="like"
          style={{
            fontSize: '14px',
            color: '#eb2f38',
            fill: isLiked ? '#eb2f38' : '#eb2f3822',
            stroke: '#eb2f38',
            strokeWidth: '20px',
            transition: 'all 0.3s linear'
          }}
          onClick={handleToggleLike}
        />,
        <EditTwoTone key="edit" twoToneColor="#0e749d" onClick={() => handleEditUser(user)} />,
        <DeleteTwoTone key="delete" twoToneColor="#888888" onClick={handleDeleteUser} />
      ]}
      cover={
        <img alt={`${username}'s avatar`} src={`${API_URL.AVATARS}?seed=${username}?size=32`} />
      }>
      <Skeleton loading={isLoading} active>
        <div>
          <MailOutlined /> {email}
        </div>
        <div>
          <PhoneOutlined /> {phone}
        </div>
        <div>
          <LinkOutlined /> {website}
        </div>
      </Skeleton>
    </Card>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string
  }).isRequired,
  onEditUser: PropTypes.func.isRequired
};

export default User;
