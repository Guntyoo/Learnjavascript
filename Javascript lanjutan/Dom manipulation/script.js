//comp
function getLogicComp () {
    const comp = Math.random();

    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return  "orang";
    return  "semut";
};

//rules
function LogicHasil (comp,player) {
    if (player == comp) return "SERI!";
    if (player == "gajah") return (comp == "orang") ? "MENANG!" : "KALAH!";
    if (player == "orang")return (comp == "gajah") ? "KALAH!" : "MENANG!";
    if (player == "semut")return (comp == "orang") ? "KALAH!" : "MENANG!";
};

//getplayer&comp
    const GPlayer = document.querySelector('.gajah');
        GPlayer.addEventListener('click', function () {
            const getpilihancomp = getLogicComp();
            const getpilihanplayer = GPlayer.className;
            console.log(getpilihancomp);
            console.log(getpilihanplayer);
        });
    const OPlayer = document.querySelector(".orang");
        OPlayer.addEventListener("click", function () {
            const getpilihancomp = getLogicComp();
            const getpilihanplayer = OPlayer.className;
            console.log(getpilihancomp);
            console.log(getpilihanplayer);
    });
    const SPlayer = document.querySelector(".semut");
        SPlayer.addEventListener("click", function () {
            const getpilihancomp = getLogicComp();
            const getpilihanplayer = SPlayer.className;
            console.log(getpilihancomp);
            console.log(getpilihanplayer);
    });