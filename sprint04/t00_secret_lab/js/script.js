let isBruceBanner = true;

function transformation() {
    const heroElement = document.getElementById('hero');
    const labElement = document.getElementById('lab');

    if (isBruceBanner) {
        heroElement.textContent = 'Hulk';
        heroElement.style.fontSize = '130px';
        heroElement.style.letterSpacing = '6px';
        labElement.style.backgroundColor = '#70964b';
    } else {
        heroElement.textContent = 'Bruce Banner';
        heroElement.style.fontSize = '60px';
        heroElement.style.letterSpacing = '2px';
        labElement.style.backgroundColor = '#ffb300';
    }

    isBruceBanner = !isBruceBanner;
}

