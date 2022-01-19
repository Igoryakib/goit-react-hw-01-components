import React from "react";
// DATA JSON 
import userData from "../data/userData.json";
import statisticsData from "../data/statisticsData.json";
import friendsData from "../data/friendsData.json";
import transactionsData from '../data/transactionsData.json';
// components 
import Profile from "./Profile/Profile.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import FriendList from "./FriendList/FriendList.jsx";
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
// code 
const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="upload stats" stats={statisticsData} />
      <Statistics stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
      </>
  );
};

export default App;
