import React, { useState } from "react";

const SearchFriendForm = () => {
  const [username, setUsername] = useState("");
  return (
    <form>
      <input
        type="text"
        name="username"
        placeholder="search user..."
        onChange={e => setUsername(e.target.value)}
        value={username}
      />
    </form>
  );
};

export default SearchFriendForm;
