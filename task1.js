// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 
const getUsers =  async ()=>{
    const usersResponse =  await fetch(`https://jsonplaceholder.typicode.com/users`);
    return await usersResponse.json();
}

const users = getUsers();
const userList = document.querySelector('.usersList');
users.then((usersData)=>{
    usersData.forEach((user)=>{
        const liElement = document.createElement('li');
        liElement.innerText = user.name;
        userList.appendChild(liElement);
    })
})

