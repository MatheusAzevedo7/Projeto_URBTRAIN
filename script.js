function updateTimer() {
  const now = new Date();
  const nextTuesday = new Date();
  
  // Define para a próxima Terça (2) às 19:00h
  let daysUntilTuesday = (2 + 7 - now.getDay()) % 7;
  
  nextTuesday.setDate(now.getDate() + daysUntilTuesday);
  nextTuesday.setHours(19, 0, 0, 0);

  // Se já passou das 19h de terça, pula para a próxima semana
  if (nextTuesday < now) {
    nextTuesday.setDate(nextTuesday.getDate() + 7);
  }

  const diff = nextTuesday - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = d < 10 ? '0'+d : d;
  document.getElementById('hours').innerText = h < 10 ? '0'+h : h;
  document.getElementById('minutes').innerText = m < 10 ? '0'+m : m;
  document.getElementById('seconds').innerText = s < 10 ? '0'+s : s;
}

setInterval(updateTimer, 1000);
updateTimer();