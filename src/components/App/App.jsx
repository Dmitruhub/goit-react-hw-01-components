import { Profile } from "../profile/Profile";
import user from "../../data/user.json";
import { GlobalStyle } from "components/GlobalStyle";
import { Statistics } from "../statistics/Statistics";
import statistics from "../../data/statistics.json";
import friends from "../../data/friends.json";
import { FriendList } from "../friend-list/FriendList";
import { TransactionHistory } from "../transaction-history/TransactionHistory";
import transactions from "../../data/transactions.json";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
