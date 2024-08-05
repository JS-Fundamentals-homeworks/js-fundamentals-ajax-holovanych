// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userCity = document.querySelector('#userCity');
const userNameInput = document.querySelector('#userNameInput');
const getUserButton = document.querySelector('#getUserButton');
getUserButton.addEventListener('click', function () {
    const inputValue = userNameInput.value.toLowerCase().trim();
    const users = getUsers();
    users.then((usersData)=>{
        const findedUser = usersData.find((user)=>{
            const userName = user.name.toLowerCase();
            return userName.includes(inputValue)
        })
        if(findedUser){
            userCity.innerText = findedUser.address.city;
        } else {
            userCity.innerText = 'User Not Founded';
        } 
    })
})