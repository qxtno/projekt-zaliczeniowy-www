window.onload = getInfo()

function getInfo() {
    getTeams("Redbull Racing")
    displayNames()
}

async function displayNames() {
    const names = await getNames()
    for (let i = 0; i < names.length - 1; i++) {
        const list = document.getElementById("items")
        const a = document.createElement("a")
        a.innerText = names[i]
        a.href = "#"
        a.onclick = function () {
            getTeams(names[i])
        }
        const item = document.createElement("li")
        item.appendChild(a)
        list.appendChild(item)
    }
}

async function getNames() {
    return (await fetch("https://projekt-zaliczeniowy-www.herokuapp.com/api/names")).json();
}

async function getTeams(name) {
    const response = await fetch(`https://projekt-zaliczeniowy-www.herokuapp.com/api/team?name=${name}`);
    const infoResponse = await response.json()

    const infoContent = document.getElementById("info_content")
    if (infoContent != null) {
        infoContent.innerHTML = ""
    }
    const infoParagraph = document.createElement("div")
    infoParagraph.innerText = infoResponse[0].info
    const infoHeader = document.createElement("h1")
    infoHeader.innerText = "Informacje"
    infoContent.appendChild(infoHeader)
    infoContent.appendChild(infoParagraph)

    const imageDiv = document.getElementById("image")
    if(imageDiv != null){
        imageDiv.innerHTML = ""
    }
    const img = document.createElement("img")
    img.src = infoResponse[0].img
    img.setAttribute("id", "mini_img");
    imageDiv.appendChild(img)

    const specContent = document.getElementById("spec")
    if (specContent != null) {
        specContent.innerHTML = ""
    }
    const specParagraph = document.createElement("p")
    specParagraph.innerText = infoResponse[0].specs
    const specsHeader = document.createElement("h1")
    specsHeader.innerText = "Specyfikacja"
    specContent.appendChild(specsHeader)
    specContent.appendChild(specParagraph)

    const results2020Content = document.getElementById("results2020")
    if (results2020Content != null) {
        results2020Content.innerHTML = ""
    }
    const results2020Paragraph = document.createElement("p")
    results2020Paragraph.innerText = infoResponse[0].year2020
    const results2020Header = document.createElement("h1")
    results2020Header.innerText = "Wyniki w 2020"
    results2020Content.appendChild(results2020Header)
    results2020Content.appendChild(results2020Paragraph)

    const results2021Content = document.getElementById("results2021")
    if (results2021Content != null) {
        results2021Content.innerHTML = ""
    }
    const results2021Paragraph = document.createElement("p")
    results2021Paragraph.innerText = infoResponse[0].year2021
    const results2021Header = document.createElement("h1")
    results2021Header.innerText = "Wyniki w 2021"
    results2021Content.appendChild(results2021Header)
    results2021Content.appendChild(results2021Paragraph)
}