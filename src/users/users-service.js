const Queue = require('../utils/Queue')
const Users = require('../users/users-dummy-store')

let queue = new Queue()

Users.forEach(user => {
  queue.enqueue(user)
})

console.log(queue)

const UsersService = {
  getAllUsers() {
    const usersArray = []

    if(!queue.first) {
      return []
    }
    
    queue = queue.first
    
    while(queue) {
      usersArray.push({
        id: queue.value.id,
        username: queue.value.username
      })
      console.log(usersArray)

      queue = queue.next
    }
      
    return usersArray
  },

  getPosition() {
    
  },

  


}

module.exports = UsersService