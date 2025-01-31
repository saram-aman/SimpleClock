function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    const greeting = getGreeting(hours);
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    document.getElementById('time').textContent = `${hours}:${minutes} ${ampm}`;
    document.getElementById('date').textContent = `${day}/${month}/${year}`;
    document.getElementById('greeting').textContent = greeting;
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

document.getElementById('toggle-theme').addEventListener('click', toggleTheme);

setInterval(updateTime, 1000);
updateTime();
