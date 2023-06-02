export function manageFriends(state = { friends: [] }, action) {
  // your code here

  switch (action.type) {
    case "friends/add":
      return { friends: [...state.friends, action.payload] }
    case "friends/remove":
      let removed = state.friends.filter((friends) => friends.id !== action.payload)
      return { friends: removed }
    default:
      return state
  }
}

// manageFriends(state, {type: "friends/add", payload: {name: "marie", common: "highschool", id: 1}})
// manageFriends(state, {type: "friends/remove", id:1})