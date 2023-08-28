const myData = [
    ["Africa", "Egypt"],
    ["Africa", "Algeria"],
    ["Asia", "Saudi-Arabia"],
    ["Asia", "Kuwait"],
    ["Select", "Select a country"] 
]
const Capital = document.getElementById("capital")
const wtrrsrcs = document.getElementById("water-resources")
const ports = document.getElementById("ports")
const lvl1 = document.getElementById("cntnnt")
const mapImg = document.getElementById("map_img")
const flagImg = document.getElementById("flag_img")
const lvl2 = document.getElementById("cntry")

function makeDD(data , lvl2Filter){
    let filteredArray = data.filter( r => r[0] === lvl2Filter)
    let newOption = new Set()
    filteredArray.forEach(r => newOption.add(r[1]))
    let newList = [...newOption]
    lvl2.innerHTML = ""
    newList.forEach( item => {
        let option = document.createElement("option")
        option.textContent = item
        lvl2.appendChild(option)
    }) 
}

function applyDD(){
    let lvl1val = lvl1.value
    makeDD(myData, lvl1val)
    loadContent()
}

function loadContent(){
    if (lvl2.value === "Select a country") {
        Capital.textContent = "Capital:"
        wtrrsrcs.textContent = "Water Resources:"
        ports.textContent = "Ports:"
        mapImg.src = "images/Background2.png"
        flagImg.src = "images/middle_east_flag.jpg"
    }else if (lvl2.value === "Kuwait") {
        Capital.textContent = "Capital: Kuwait City"
        wtrrsrcs.textContent = "Water Resources: Desalinated water"
        ports.textContent = "Ports: Port of Shuaiba"
        mapImg.src = "images/Kuwait_map.jpg"
        flagImg.src = "images/Kuwait_flag.png"
    }else if (lvl2.value === "Algeria"){
        Capital.textContent = "Capital: Algiers"
        wtrrsrcs.textContent = "Water Resources: Renewable surface water"
        ports.textContent = "Ports: Algiers"
        mapImg.src = "images/Algeria_map.jpg"
        flagImg.src = "images/Algeria_flag.png"
    }else if (lvl2.value === "Egypt") {
        Capital.textContent = "Capital: Cairo"
        wtrrsrcs.textContent = "Water Resources: Nile river"
        ports.textContent = "Ports: Port Said"
        mapImg.src = "images/Egypt_map.jpg"
        flagImg.src = "images/Egypt_flag.png"
    }else if (lvl2.value === "Saudi-Arabia") {
        Capital.textContent = "Capital: Riyadh"
        wtrrsrcs.textContent = "Water Resources: Desalinated water"
        ports.textContent = "Ports: Jeddah Islamic Port"
        mapImg.src = "images/KSA_map.jpg"
        flagImg.src = "images/KSA_flag.png"
    }
}

lvl1.addEventListener("change", applyDD)
lvl2.addEventListener("change", loadContent)
document.addEventListener("DOMContentLoaded", applyDD)