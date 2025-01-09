import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import friends from "./Data/friends.json";
import transactions from "./Data/transactions.json";
import userData from "./Data/userData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
