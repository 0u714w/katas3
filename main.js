const output = document.getElementById("output")

for (let count = 1; count <= 20; count++) {
    const pElement = document.createElement("p")
    const countTextNode = document.createTextNode(" " + count + " ")
    pElement.appendChild(countTextNode)
    output.appendChild(pElement)
}
for (let count = 2; count <= 20; count += 2) {
    const pElement = document.createElement("span")
    const countTextNode = document.createTextNode(count)
    pElement.appendChild(countTextNode)
    output.appendChild(pElement)
}