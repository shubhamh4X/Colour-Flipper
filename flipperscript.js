function getRandomColor() 
{
    // Generates and returns a random hex color
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    // Changes the background color to a random color
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}

// Add event listener to the button
document.getElementById('flipper').addEventListener('click', changeBackgroundColor);
