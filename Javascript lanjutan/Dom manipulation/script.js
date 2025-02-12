//comp
function LogicComp () {
    const comp = Math.random();

    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return  "orang";
    return  "semut";
};

//getresult
function LogicHasil (comp,player) {
    if (player == comp) return "SERI!";
    if (player == "gajah") return (comp == "orang") ? "MENANG!" : "KALAH!";
    if (player == "orang")return (comp == "gajah") ? "KALAH!" : "MENANG!";
    if (player == "semut")return (comp == "orang") ? "KALAH!" : "MENANG!";
};

//getplayer
    const GPlayer = document.querySelector('.gajah');
    GPlayer.addEventListener('click', function () {
            alert('test');
        });
    const OPlayer = document.querySelector(".orang");
    OPlayer.addEventListener("click", function () {
      alert("test");
    });
    const SPlayer = document.querySelector(".semut");
    SPlayer.addEventListener("click", function () {
      alert("test");
    });