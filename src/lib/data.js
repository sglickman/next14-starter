// TEMPORARY DATA

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Jane'}
]

const posts = [
  {id: 1, userId: 1, title: 'Post 1', body: '......'},
  {id: 2, userId: 1, title: 'Post 2', body: '......'},
  {id: 3, userId: 2, title: 'Post 3', body: '......'},
  {id: 4, userId: 2, title: 'Post 4', body: '......'},
]
export const getPosts = async () => {
  return posts;
}

export const getPost = async (id) => {
  return posts.find((post) => post.id === parseInt(id));
}

export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
}