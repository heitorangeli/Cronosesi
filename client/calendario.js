const calendarContainer = document.getElementById("calendar");
const monthTitle = document.getElementById("month-title");

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const today = now.getDate();

const firstDayIndex = new Date(year, month, 1).getDay();
const totalDays = new Date(year, month + 1, 0).getDate();

const monthName = now.toLocaleString("pt-BR", { month: "long" });
const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
monthTitle.textContent = `${capitalizedMonth} - ${year}`;

for (let i = 0; i < firstDayIndex; i++) {
  const emptyCard = document.createElement("div");
  emptyCard.classList.add("empty-card");
  calendarContainer.appendChild(emptyCard);
}

for (let day = 1; day <= totalDays; day++) {
  const card = document.createElement("div");
  card.classList.add("day-card");

  if (day === today) {
    card.classList.add("today");
  }

  card.innerHTML = `<span class="day-number">${day}</span>`;

  const dialog = document.createElement("dialog");
  dialog.classList.add("day-dialog");
  dialog.innerHTML = `
    <h2 class="dialog-title">Dia ${day} de ${capitalizedMonth}</h2>
    <p>Nenhum evento agendado para este dia.</p>
    <button class="close-btn">Fechar</button>
  `;

  const closeBtn = dialog.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

  card.addEventListener("click", () => {
    dialog.showModal();
  });

  document.body.appendChild(dialog);
  calendarContainer.appendChild(card);
}