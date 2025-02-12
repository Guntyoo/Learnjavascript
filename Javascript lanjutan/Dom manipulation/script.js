//comp
function getLogicComp () {
    const comp = Math.random();

    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return  "orang";
    return  "semut";
};

//rules
function Rules (comp,player) {
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
            const gethasil = Rules(getpilihancomp,getpilihanplayer);
            console.log('comp : ' +  getpilihancomp);
            console.log('player : ' + getpilihanplayer);
            console.log('hasil : ' + gethasil);    //result
        });
    const OPlayer = document.querySelector(".orang");
        OPlayer.addEventListener("click", function () {
            const getpilihancomp = getLogicComp();
            const getpilihanplayer = OPlayer.className;
            const gethasil = Rules(getpilihancomp, getpilihanplayer);
            console.log("comp : " + getpilihancomp);
            console.log("player : " + getpilihanplayer);
            console.log("hasil : " + gethasil);   //result
        });
    const SPlayer = document.querySelector(".semut");
        SPlayer.addEventListener("click", function () {
            const getpilihancomp = getLogicComp();
            const getpilihanplayer = SPlayer.className;
            const gethasil = Rules(getpilihancomp, getpilihanplayer);
            console.log("comp : " + getpilihancomp);
            console.log("player : " + getpilihanplayer);
            console.log("hasil : " + gethasil);   //result
    });