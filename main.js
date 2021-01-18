// recovery=回収率
// pay=払い戻し金額
// inve=投資金額
function total(pay,inve) {
    recovery = pay / inve * 100;
    return recovery ;
};
const calcu = document.getElementById("calcu");
const setbutton = document.getElementById("set");
const removebutton = document.getElementById("remove");

calcu.addEventListener("click",() =>{
    const plice = document.getElementById("plice").value;
    const refund = document.getElementById("refund").value;
    const n = total(refund,plice)

    document.getElementById("result").textContent = `${n.toFixed(2)}%`;
    if(n > 100){
        document.getElementById("result").style.color = "blue";
    }else{
        document.getElementById("result").style.color = "red";
    }
    
});
let i = 1;
setbutton.addEventListener("click",() =>{
    const date = document.getElementById("date").value;
    const place = document.getElementById("month").value;
    const plice = document.getElementById("plice").value;
    const refund = document.getElementById("refund").value;
    const table = document.querySelector(".paysheet");
    
    const TrItem = document.createElement("tr");
    TrItem.className =`payout${i}`
    table.appendChild(TrItem);
    const dateItem = document.createElement("td");
    const placeItem = document.createElement("td");
    const pliceItem = document.createElement("td");
    const refundItem = document.createElement("td");
    const resultItem = document.createElement("td");
    const Tr = document.querySelector(`.payout${i}`);
    dateItem.textContent = `${date}`;
    placeItem.textContent = `${place}`;
    pliceItem.textContent = `${plice}円`;
    refundItem.textContent = `${refund}円`;
    resultItem.textContent = `${(refund/plice*100).toFixed(2)+"%"}`
    Tr.appendChild(dateItem);
    Tr.appendChild(placeItem);
    Tr.appendChild(pliceItem);
    Tr.appendChild(refundItem);
    Tr.appendChild(resultItem);

    // console.log(`${i}`)
    ++i
    return i
})

removebutton.addEventListener("click",()=> {
    if(i>1){
        const table = document.querySelector(".paysheet");
        const Tr = document.querySelector(`.payout${i-1}`);
        Tr.removeChild(Tr.lastElementChild);
        Tr.removeChild(Tr.lastElementChild);
        Tr.removeChild(Tr.lastElementChild);
        Tr.removeChild(Tr.lastElementChild);
        Tr.removeChild(Tr.lastElementChild);
        table.removeChild(table.lastElementChild);
        --i;
    }else{

    };


});

