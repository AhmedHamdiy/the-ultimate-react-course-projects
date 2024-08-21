import Friend from "./Friend";
import AddFriendModal from "./AddFriendModal";
export function FriendsList(friends, onAddFriend, onPayment) {
  let showAddFriendModal = false;
  return (
    <div className="friendlist-container">
      <ul class="friendlist">
        {friends.map((friend, key) => (
          <Friend onPayement={onPayment} friend={friend} key={friend.name} />
        ))}
      </ul>
      {showAddFriendModal ? <AddFriendModal onAddFriend={onAddFriend} /> : null}
      <button onClick={() => (showAddFriendModal = true)}>Add Friend</button>
    </div>
  );
}
