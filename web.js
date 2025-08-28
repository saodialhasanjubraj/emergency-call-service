

const cards = [
    {
        id: 1,
        imgPaht: "assets/emergency.png",
        headingText: "National Emergency Number",
        category: "National Emergency",
        callNumber: 999,
        sector: "All",
    },
    {
        id: 2,
        imgPaht: "assets/police.png",
        headingText: "Police Helpline Number",
        category: "Police",
        callNumber: 999,
        sector: "Police",
    },
    {
        id: 3,
        imgPaht: "assets/emergency.png",
        headingText: "Fire Service Number",
        category: "Fire Service",
        callNumber: 999,
        sector: "Fire",
    },
    {
        id: 4,
        imgPaht: "assets/emergency.png",
        headingText: "Ambulance Service",
        category: "Ambulance",
        callNumber: 999,
        sector: "Health",
    },
    {
        id: 5,
        imgPaht: "assets/emergency.png",
        headingText: "Women & Child Helpline",
        category: "Women & Child Helpline",
        callNumber: 109,
        sector: "Help",
    },
    {
        id: 6,
        imgPaht: "assets/emergency.png",
        headingText: "Anti-Corruption Helpline",
        category: "Anti-Corruption",
        callNumber: 106,
        sector: "Govt.",
    },
    {
        id: 7,
        imgPaht: "assets/emergency.png",
        headingText: "Electricity Helpline",
        category: "Electricity Outage",
        callNumber: 16216,
        sector: "Electricity",
    },
    {
        id: 8,
        imgPaht: "assets/emergency.png",
        headingText: "Brac Helpline",
        category: "Brac",
        callNumber: 16445,
        sector: "NGO",
    },
    {
        id: 9,
        imgPaht: "assets/emergency.png",
        headingText: "Bangladesh Railway Helpline",
        category: "Bangladesh Railway",
        callNumber: 163,
        sector: "Travel",
    },
]

for (const card of cards) {
    const itemCard = document.createElement("div")
    itemCard.innerHTML = `   
<div class="card h-70 w-75 rounded-[12px] flex flex-col gap-2 border-1 p-8">
                    <div class="imgHeartIcon flex items-center justify-between">
                        <img class="w-8 h-10" src=${card.imgPaht} alt="" srcset="">
                       <i class="fa-solid fa-heart fa-beat fa-xl" style="color: #FF0000;"></i>
                    </div>
                    <h1>${card.headingText}</h1>
                    <p class="m-0">${card.catagori}</p>
                    <span class="helpLineNumber">${card.callNumber}</span>
                    <button type="button" class="sectorButton text-left font-bold text-[18px]" id="scctorButton">${card.sector}</button>
                    <div class="copyCallButtons w-full flex items-center justify-between">
                        <button class="copyButton w-25 h-8 rounded-md border-2 hover:cursor-pointer">copy</button>
                        <button class="callButtons w-25 h-8 rounded-md border-2 bg-green-600 text-white hover:cursor-pointer">call</button>
                    </div>
                </div>
`
    document.getElementById('gridCards').append(itemCard)


}
// innerText Reusable Function
// function gotInnerText(id) {
//     const gotInnerid = document.getElementById(id)
//     const gotInneridText = gotInnerid.innerText
//     return gotInneridText
// }





const allBtns = document.getElementsByClassName('callButtons')
// const conins = gotInnerText("conis")
const arry = []
for (const btn of allBtns) {
    btn.addEventListener('click', () => {
        const numberChildren = btn.parentElement.children[2]
        console.log(numberChildren, "parent element read");
        alert('button clicked')

        arry.push(btn)
    })
}





