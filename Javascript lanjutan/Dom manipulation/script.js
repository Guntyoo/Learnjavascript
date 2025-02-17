//comp
function getLogicComp() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

//rules
function Rules(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}

//Timer
function spin() {
  const imgkomputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const WaktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - WaktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgkomputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100)
}
//getplayer&comp

const Iplayer = document.querySelectorAll("li img");
Iplayer.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const comp = getLogicComp();
    const player = pil.className;
    const hasil = Rules(comp, player);

    spin();

    setTimeout(function () {
      const imgkomputer = document.querySelector(".img-komputer");
      imgkomputer.setAttribute("src", "img/" + comp + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
