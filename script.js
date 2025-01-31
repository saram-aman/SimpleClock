let isDigital = true;
let alarmTime = null;

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    const greeting = getGreeting(hours);
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('date').textContent = `${day}/${month}/${year}`;
    document.getElementById('greeting').textContent = greeting;

    if (alarmTime && `${hours}:${minutes} ${ampm}` === alarmTime) {
        document.getElementById('alarm-message').style.display = 'block';
    } else {
        document.getElementById('alarm-message').style.display = 'none';
    }
}

function getGreeting(hours) {
    if (hours < 12) return 'Good Morning';
    if (hours < 18) return 'Good Afternoon';
    return 'Good Evening';
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }
}

function toggleDisplay() {
    isDigital = !isDigital;
    document.getElementById('time').style.display = isDigital ? 'block' : 'none';
}

function setAlarm() {
    const alarmInput = document.getElementById('alarm-time').value;
    if (alarmInput) {
        const [hour, minute] = alarmInput.split(':');
        const now = new Date();
        let alarmHours = hour % 12;
        const ampm = hour >= 12 ? 'PM' : 'AM';
        alarmHours = alarmHours ? alarmHours : 12; // the hour '0' should be '12'
        alarmTime = `${alarmHours}:${minute} ${ampm}`;
        alert(`Alarm set for ${alarmTime}`);
    }
}

document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
document.getElementById('toggle-display').addEventListener('click', toggleDisplay);
document.getElementById('set-alarm').addEventListener('click', setAlarm);

setInterval(updateTime, 1000);
updateTime();
