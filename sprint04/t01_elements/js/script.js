const characters = document.getElementById("characters").children;

for (let character of characters) {
    let characterClass = character.getAttribute('class') || "unknown";
    character.className = (characterClass !== "good" && characterClass !== "evil") ? "unknown" : characterClass;

    let br = document.createElement('br');
    character.appendChild(br);

    let dataElement = character.getAttribute("data-element");
    if (dataElement) {
        let characterElements = dataElement.split(' ');
        characterElements.forEach(element => {
            let node = document.createElement('div');
            node.setAttribute("class", `elem ${element}`);
            character.appendChild(node);
        });
    } else {
        let node = document.createElement('div');
        let line = document.createElement('div');
        line.setAttribute("class", `line`);
        node.setAttribute("class", `elem none`);
        node.appendChild(line);
        character.appendChild(node);
    }
}

