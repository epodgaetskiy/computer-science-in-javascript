function Queue () {
  const data = [];

  function enqueue (el) {
    data.push(el);
  }

  function length () {
    return data.length;
  }

  function dequeue () {
    if (!length()) throw new Error('Queue is empty');
    return data.shift();
  }

  function front () {
    if (!length()) throw new Error('Queue is empty');
    return data[0];
  }

  function back () {
    if (!length()) throw new Error('Queue is empty');
    return data[data.length - 1];
  }

  function isEmpty () {
    return !length();
  }

  return {
    enqueue,
    dequeue,
    front,
    back,
    isEmpty,
    length,
  };
}

export default function createQueue () {
  return Object.create(Queue());
}
