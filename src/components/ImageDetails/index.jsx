import React from 'react';
import {
  ImgDetails,
  ImgDp,
  UserDetails,
  ImgName,
  ImgUserName,
  ImgLikes,
  ImgLikesCount,
} from './styles';

const ImageDetails = ({ photo }) => {
  const { user, likes } = photo;
  return (
    <ImgDetails>
      <ImgDp src={user?.profile_image?.medium} alt="dp" />
      <UserDetails style={{ flex: 1 }}>
        <ImgName>
          {user.first_name} {user.last_name}
        </ImgName>
        <ImgUserName>@{user.username}</ImgUserName>
      </UserDetails>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginRight: '10px',
        }}
      >
        <ImgLikes src="images/like.svg" alt="like" />
        <ImgLikesCount>{likes}</ImgLikesCount>
      </div>
    </ImgDetails>
  );
};

export default ImageDetails;
