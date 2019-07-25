function seedQueue(queue, data) {
  if (queue.first === null) {
    for (let i = 0; i < data.length; i++) {
      queue.enqueue(data[i])
    }
  }
}

function readQueue(queue) {
  const result = []

  if (!queue.first) {
    return result
  }

  let currNode = queue.first

  while (currNode !== null) {
    result.push(currNode.value)
    currNode = currNode.next
  }

  return result
}

module.exports = {
  seedQueue,
  readQueue
}
