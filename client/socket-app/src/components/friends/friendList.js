import React from "react";

const FriendList = ({ friends }) => {
  return (
    <div>
      {friends ? (
        friends.map(f => <p>{f.username}</p>)
      ) : (
        <p>You don't have any friends now</p>
      )}
    </div>
  );
};

export default FriendList;
