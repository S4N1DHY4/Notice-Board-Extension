const startEl = document.getElementById("start");
function updateTime() {
  chrome.storage.local.get(["timer", "timeOption","isRunning","isFinished"], (res) => {
    const time = document.getElementById("timer");
    const minutes = `${res.timeOption - Math.ceil(res.timer / 60)}`.padStart(
      2,
      "0"
    );
    let seconds = "00";
    if (res.timer % 60 != 0) {
      seconds = `${60 - (res.timer % 60)}`.padStart(2, "0");
    }
    time.textContent = `${minutes}:${seconds}`;
    if (res.timer == 0 && res.isFinished == true) {
      alert("Pomodoro Timer: Time's Up!");
      chrome.storage.local.set(
        {
          timer: 0,
          isRunning: false,
          isFinished: false
        },
        () => {
          startEl.textContent = "Start";
        }
      );
    }
    if (res.timer == 0 && res.isRunning){
      chrome.storage.local.set(
        {
          isFinished: true
        }
      );
    }
  });
}

updateTime();
setInterval(updateTime, 1000);

startEl.addEventListener("click", () => {
  chrome.storage.local.get(["isRunning"], (res) => {
    chrome.storage.local.set(
      {
        isRunning: !res.isRunning,
      },
      () => {
        startEl.textContent = !res.isRunning
          ? "Pause"
          : "Start";
      }
    );
  });
});

const resetEl = document.getElementById("reset");
resetEl.addEventListener("click", () => {
  chrome.storage.local.set(
    {
      timer: 0,
      isRunning: false,
    },
    () => {
      startEl.textContent = "Start";
    }
  );
});