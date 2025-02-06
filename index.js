let home = 0;
let guest = 0;
function incrementG(increment){
    guest = guest + increment ;
    document.getElementById("editG").innerText = guest;
}

function incrementH(increment){
    home = home + increment ;
    document.getElementById("editH").innerText = home;
}