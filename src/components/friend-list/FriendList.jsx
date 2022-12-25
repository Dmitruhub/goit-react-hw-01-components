import PropTypes from "prop-types";
import {
  ProfileFriendList,
  ProfileFriendListItem,
  FriendStatus,
  FriendPhoto,
  FriendName,
} from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <ProfileFriendList>
      {friends.map(friend => {
        return (
          <ProfileFriendListItem key={friend.id}>
            {friend.isOnline ? (
              <FriendStatus style={{ backgroundColor: "green" }} />
            ) : (
              <FriendStatus style={{ backgroundColor: "red" }} />
            )}
            <FriendPhoto src={friend.avatar} />
            <FriendName>{friend.name}</FriendName>
          </ProfileFriendListItem>
        );
      })}
    </ProfileFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
