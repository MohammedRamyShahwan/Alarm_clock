function renderClock() {
    const clockElement = document.getElementById('clock');
    setInterval(() => {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleTimeString();
      clockElement.innerText = formattedTime;
    }, 1000);
  }
  
  // Call renderClock to start displaying the time.
  renderClock();
  const fakeAlarms = [{hour: 5, minute: 50, period: 'am'}];

  function renderAlarm(alarm) {
    const alarmsSection = document.getElementById('alarms');
    const alarmDiv = document.createElement('div');
    alarmDiv.classList.add('alarm');
    alarmDiv.textContent = `${alarm.hour}:${alarm.minute} ${alarm.period}`;
    alarmsSection.appendChild(alarmDiv);
  }
  
  fakeAlarms.forEach(renderAlarm);
  function addAlarm(event) {
    event.preventDefault();
  
    const hour = parseInt(document.getElementById('hour').value);
    const minute = parseInt(document.getElementById('minute').value);
    const period = document.getElementById('period').value;
  
    const newAlarm = { hour, minute, period };
    fakeAlarms.push(newAlarm);
    renderAlarm(newAlarm);
  }
  
  const alarmForm = document.getElementById('alarmForm');
  alarmForm.addEventListener('submit', addAlarm);
  function checkAlarms() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
  
    fakeAlarms.forEach(alarm => {
      if (
        alarm.hour === currentHour &&
        alarm.minute === currentMinute &&
        alarm.period.toLowerCase() === (currentHour >= 12 ? 'pm' : 'am')
      ) {
        const audio = document.getElementById('alarm-sound');
        audio.play();
      }
    });
  }
  
  setInterval(checkAlarms, 1000);
        