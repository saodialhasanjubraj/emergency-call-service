const cards = [
    {
        imgPaht: "assets/emergency.png",
        headingText: "National Emergency Number",
        catagori: "National Emergency",
        callNumber: 999,
        sector: "All",
    },
    {
        imgPaht: "assets/police.png",
        headingText: "Police Helpline Number",
        catagori: "Police",
        callNumber: 999,
        sector: "Police",
    },
    {
        imgPaht: "assets/emergency.png",
        headingText: "Fire Service Number",
        catagori: "Fire Service",
        callNumber: 999,
        sector: "Fire",
    },
    {
        imgPaht: "assets/emergency.png",
        headingText: "Ambulance Service",
        catagori: "Ambulance",
        callNumber: 1994 - 999999,
        sector: "Health",
    },
    {
        imgPaht: "assets/emergency.png",
        headingText: "Women & Child Helpline",
        catagori: "Women & Child Helpline",
        callNumber: 109,
        sector: "Help",
    },
    {
        imgPaht: "assets/emergency.png",
        headingText: "Anti-Corruption Helpline",
        catagori: "Anti-Corruption",
        callNumber: 106,
        sector: "Govt.",
    },
    {
        imgPaht: "assets/emergency.png",
        headingText: "Electricity Helpline",
        catagori: "Electricity Outage",
        callNumber: 16216,
        sector: "Electricity",
    },
    {
        imgPaht: "assets/emergency.png",
        headingText: "Brac Helpline",
        catagori: "Brac",
        callNumber: 16445,
        sector: "NGO",
    },
    {
        imgPaht: "assets/emergency.png",
        headingText: "Bangladesh Railway Helpline ",
        catagori: "Bangladesh Railway",
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
                        <button class="copyButton w-25 h-8 rounded-md border-2 " id="copyButton">copy</button>
                        <button class="callButton w-25 h-8 rounded-md border-2 bg-green-600 text-white" id="callButton">call</button>
                    </div>
                </div>
`
    document.getElementById('gridCards').append(itemCard)
}



