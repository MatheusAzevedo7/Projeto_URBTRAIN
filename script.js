function updateTimer() {
  const now = new Date();
  const nextTraining = new Date();
  
  // CONFIGURAÇÃO: 1 = Segunda-feira (0=Dom, 1=Seg, 2=Ter, etc)
  const DIA_DO_TREINO = 1; 
  
  // Calcula quantos dias faltam para a próxima Segunda
  let daysUntil = (DIA_DO_TREINO + 7 - now.getDay()) % 7;
  
  nextTraining.setDate(now.getDate() + daysUntil);
  nextTraining.setHours(19, 0, 0, 0); // Define as 19:00h

  // Se hoje é segunda e já passou das 19h, joga para a próxima semana
  if (nextTraining < now) {
    nextTraining.setDate(nextTraining.getDate() + 7);
  }

  const diff = nextTraining - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = d < 10 ? '0'+d : d;
  document.getElementById('hours').innerText = h < 10 ? '0'+h : h;
  document.getElementById('minutes').innerText = m < 10 ? '0'+m : m;
  document.getElementById('seconds').innerText = s < 10 ? '0'+s : s;
}

// Atualiza a cada 1 segundo
setInterval(updateTimer, 1000);
updateTimer();