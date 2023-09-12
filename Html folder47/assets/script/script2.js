// 1)
//обьясни своими словами, что значит callback функция
// Это выполнение функции асинхронно
// 2)
//выведи в консоли 'Привет я Alex и мне 19 лет' с помощью функций ниже и callback
function alertInfo(name, age) {
    console.log("ПРивет, меня зовут " + name + " мне " + age + " лет");
}

function userInfo() {
    let name = 'Alex';
    let age = 19;
    alertInfo(name, age)
}
userInfo();
// 3)
// какая из функций является функцией обратного вызова?
let timeout = 1000;

setTimeout(showMessage, timeout); // эта

function showMessage() {
    console.log('Сообщение');
    startProgram();
    startProgram(showMessage);
}

function startProgram() {
    console.log('Запуск');
}


// 4)
//передайте функции ниже функцию showMessage  в качестве параметра и вызовите ее
function startProgram(callback) {
    console.log('Запуск');
    if (typeof callback === 'function') {
        callback();
    }
}

function showMessage() {
    console.log('Сообщение');
}

startProgram(showMessage);


// 10)
//что значит асинхронный?
// Выполняющийся не одновременно