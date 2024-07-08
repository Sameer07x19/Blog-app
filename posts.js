let posts = [];




const getPosts = () => posts;

const getPost = (id) => posts.find(post => post.id === id);

const addPost = (title, content) => {
  const id = `${Date.now()}`;
  posts.push({ id, title, content });
};

const updatePost = (id, title, content) => {
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex > -1) {
    posts[postIndex] = { id, title, content };
  }
};

const deletePost = (id) => {
  posts = posts.filter(post => post.id !== id);
}



module.exports = { getPosts, getPost, addPost, updatePost, deletePost };