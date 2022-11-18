console.log('Assignment Twenty One');
console.log('----------------');

let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'article.json');
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);
    console.log(data);
    console.log('Data Loaded');
  }
};

let mainData = [
  {
    id: '1',
    name: 'John',
    category: 'CS',
    address: 'Cairo',
    content: 'CS department',
  },

  {
    id: '2',
    name: 'Nour',
    category: 'IT',
    address: 'Cairo',
    content: 'It department',
  },
  {
    id: '3',
    name: 'Hamaza',
    category: 'CS',
    address: 'Alex',
    content: 'CS department',
  },
  {
    id: '4',
    name: 'Mo',
    category: 'CS',
    address: 'Cairo',
    content: 'CS department',
  },
  {
    id: '5',
    name: 'Adam',
    category: 'CS',
    address: 'Mansoura',
    content: 'CS department',
  },
];

for (let i = 0; i < mainData.length; i++) {
  mainData[i] = { ...mainData[i], category: 'All' };
}
console.log(mainData);

let updatedData = JSON.stringify(mainData);
console.log(updatedData);

for (let i = 0; i < mainData.length; i++) {
  let div = document.getElementById('data');
  let childDiv = document.createElement('div');

  childDiv.innerHTML = `
    <h2>${mainData[i].id}</h2>
    <p>${mainData[i].content}</p>
    <p>Author: ${mainData[i].name}</p>
    <p>Category: ${mainData[i].category}</p>
  `;

  div.appendChild(childDiv);
  document.body.appendChild(div);
}
