console.log('Assignment Twenty Two');
console.log('----------------');

const articles = [
  {
    userId: 10,
    title: 'Article Title Number 1',
    description: 'Article Description Number 1',
  },

  {
    userId: 5,
    title: 'Article Title Number 2',
    description: 'Article Description Number 2',
  },

  {
    userId: 5,
    title: 'Article Title Number 3',
    description: 'Article Description Number 3',
  },

  {
    userId: 5,
    title: 'Article Title Number 4',
    description: 'Article Description Number 4',
  },

  {
    userId: 5,
    title: 'Article Title Number 5',
    description: 'Article Description Number 5',
  },

  {
    userId: 5,
    title: 'Article Title Number 6',
    description: 'Article Description Number 6',
  },

  {
    userId: 25,
    title: 'Article Title Number 7',
    description: 'Article Description Number 7',
  },

  {
    userId: 25,
    title: 'Article Title Number 8',
    description: 'Article Description Number 8',
  },

  {
    userId: 15,
    title: 'Article Title Number 9',
    description: 'Article Description Number 9',
  },

  {
    userId: 15,
    title: 'Article Title Number 10',
    description: 'Article Description Number 10',
  },
];

myPromise = new Promise((resolve, reject) => {
  if (articles) {
    resolve(articles);
  } else {
    reject(Error('No Articles Found'));
  }
});

myPromise
  .then((resolveValue) => {
    resolveValue.length = 5;
    return resolveValue;
  })
  .then((resolveValue) => {
    for (let i = 0; i < resolveValue.length; i++) {
      let div = document.createElement('div');

      div.innerHTML = `
        <h2>${resolveValue[i].title}</h2>
        <p>${resolveValue[i].description}</p>
      `;

      document.body.appendChild(div);
    }
  });

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((result) => result.json())
  .then((data) => {
    data.length = 5;
    return data;
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement('div');

      div.innerHTML = `
        <h2>${data[i].title}</h2>
        <p>${data[i].body}</p>
      `;

      document.body.appendChild(div);
    }
  });
