const helpLoadDifferentImgFromOneEndPoint = (data) => {
  return data.map(comment => ({
    ...comment,
    author: {
      ...comment.author,
      avatarUrl: comment.author.avatarUrl + `?${Math.floor(Math.random() * 1000000)}`
    }
  }))
}
export const commentsData = helpLoadDifferentImgFromOneEndPoint([
  {
    id: 1,
    author: {
      avatarUrl:
        "https://avatar-endpoint.herokuapp.com/api",
      name: 'FakeName',
      at: '@test',
    },
    commentary: 'If you want to try building your site based on this, check out Framer sites when it launches. Easier than Webflow',
    time: '2 moths ago'
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://avatar-endpoint.herokuapp.com/api/",
      name: 'FakeName',
      at: '@test',
    },
    commentary: 'Check out Framer sites when it launches. Easier than Webflow',
    time: '2 moths ago'
  },
  {
    id: 3,
    author: {
      avatarUrl:
        "https://avatar-endpoint.herokuapp.com/api/",
      name: 'FakeName',
      at: '@test',
    },
    commentary: 'Debitis error mollitia reiciendis',
    time: '2 moths ago'
  },
  {
    id: 4,
    author: {
      avatarUrl:
        "https://avatar-endpoint.herokuapp.com/api/",
      name: 'FakeName',
      at: '@test',
    },
    commentary: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ut praesentium soluta tempore possimus, esse velit, debitis error mollitia reiciendis',
    time: '2 moths ago'
  },
])
