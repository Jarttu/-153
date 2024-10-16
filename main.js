window.onload = function() {
    kysynimet();
};
function kysynimet() {
    const nimet = new Array(10);
    for (let i = 0; i < 10; i++) {
        nimet[i] = prompt("Syötä kaverin" + (i + 1) + " nimi:");
    }
    tulosta(nimet);
}

function tulosta(nimet){
    const nimilista = document.getElementById("nimilista");
    nimilista.innerHTML = "";
    nimet.forEach(function(nimi) {
        const li = document.createElement("li");
        li.textContent = nimi;
        nimilista.appendChild(li);
    });
}