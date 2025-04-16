window.addEventListener("load", function () {
    creaMatrice();
});
function creaMatrice() {
    const wrapper = document.getElementById("wrapper");
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const div = document.createElement("div");
            div.addEventListener("click", divClick);
            div.id = `div${i}-${j}`;
            wrapper.appendChild(div);
        }

    }
}

function divClick()
{
    const i=this.id.split('-')[1];
    const j=this.id.split('-')[2];

    if(j-1>=0)
    {
        const sopra=document.getElementById(`div-${i}-${j-1}`);
        if(sopra.textContent=="")
        {

        }
    }
}
function scambiaDiv(piena,vuota)
{
    vuota.textContent=piena.textContent;
    vuota.style.backgroundColor="blue";
    piena.textContent="";
    piena.style.backgroundColor=null;
}
function caricaMatrice()
{
    for(let cont=1;cont<=15;cont++)
    {
        let divRnd;
        do{
            const i=Math.floor(Math.random()*4);
            const j=Math.floor(Math.random()*4);
             divRnd=document.getElementById(`div-${i}-${j}`);
        }while(divRnd.textContent != "");

        divRnd.style.backgroundColor="blue";
        divRnd.textContent=cont;
    }
}