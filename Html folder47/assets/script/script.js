// функция для обновления времени и поворота стрелок
function updateClock() {
    // Определяет точное время (часы, минуты, секунды)
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Выбирает стрелки из HTML
    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");
    
    // Определение времени в градусах через математические расчеты
    const hourRotation = (hours % 12 + minutes / 60) * 360 / 12;
    const minuteRotation = (minutes + seconds / 60) * 360 / 60;
    const secondRotation = (seconds * 360 / 60);
    
    // Поворот стрелок
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
    
    // Обновление текста с текущим временем
    const currentTimeElement = document.getElementById("currentTime");
    currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Обновление времени и поворота стрелок каждую секунду
setInterval(updateClock, 1000);

// Вызов функции
updateClock();
