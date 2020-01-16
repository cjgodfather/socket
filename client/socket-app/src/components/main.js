import React from "react";
import SearchFriendForm from "../components/friends/searchFriendForm";
import FriendList from "../components/friends/friendList";

const MainPage = () => {
  return (
    <>
      <SearchFriendForm />
      <FriendList />
    </>
  );
};

export default MainPage;
