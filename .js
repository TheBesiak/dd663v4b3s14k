const saveSettings = () => localStorage.setItem('DDevMOD', JSON.stringify(ls));

if (!JSON.parse(localStorage.getItem('DDevMOD'))) {
    localStorage.setItem('DDevMOD', JSON.stringify({ pos: { x: 0, y: 0 }, optymalizacja: false, autoHeal: false }));
}

const ls = JSON.parse(localStorage.getItem('DDevMOD'));

const Engine = new class Engine {
    // ... (unchanged)
}

const main = document.createElement('div');
main.setAttribute('id', 'DDevMOD');
document.body.append(main);

const div = document.createElement('div');
div.setAttribute('id', 'DDevMOD-div');
div.innerHTML = 'DDevMOD';
main.append(div);

// Create a container for the buttons
const buttonsContainer = document.createElement('div');
buttonsContainer.setAttribute('id', 'buttonsContainer');
main.append(buttonsContainer);

// Optimization button
const buttonOptymalizacja = document.createElement('button');
buttonOptymalizacja.setAttribute('id', 'btnOptymalizacja');
buttonOptymalizacja.addEventListener('click', () => {
    ls.optymalizacja = !ls.optymalizacja;
    saveSettings();
    updateButtonText();
});
buttonsContainer.append(buttonOptymalizacja);

// Auto-heal button
const buttonAutoHeal = document.createElement('button');
buttonAutoHeal.setAttribute('id', 'btnAutoHeal');
buttonAutoHeal.addEventListener('click', () => {
    ls.autoHeal = !ls.autoHeal;
    saveSettings();
    updateButtonText();
});
buttonsContainer.append(buttonAutoHeal);

// Set initial button text content
updateButtonText();

// Add style for the buttonsContainer
buttonsContainer.style.display = 'flex';
buttonsContainer.style.justifyContent = 'flex-start';
buttonsContainer.style.width = '100%';
buttonsContainer.style.marginTop = '50px'; // Adjusted margin-top to move buttons down

const style = document.createElement('style');
style.innerHTML = `
    #DDevMOD {
        position: absolute;
        width: 250px;
        height: 250px;
        top: ${ls.pos.y}px;
        left: ${ls.pos.x}px;
        border: grey solid 1px;
        background: #000;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start; /* Align content to the top */
    }

    #DDevMOD-div {
        position: absolute;
        width: 100px;
        color: white;
        font-size: 10px;
        text-align: center;
        line-height: 1.5;
        font-family: 'Arial Bold', 'Arial Black', Gadget, sans-serif;
        user-select: none;
        pointer-events: none;
        font-weight: bold;
        margin-top: 10px; /* Add margin to push it down from the top */
    }

    #btnOptymalizacja,
    #btnAutoHeal {
        display: block;
        height: 20px;
        margin: 10px 0; /* Adjusted margin to have 10px top and bottom */
        color: white;
        border: none;
        border-radius: 1px;
        cursor: pointer;
        background: black;
    }

    #btnAutoHeal {
        margin-left: auto; /* Move the AutoHeal button to the right */
    }
`;
document.head.append(style);

window.$('#DDevMOD').draggable({
    stop: () => {
        ls.pos.x = parseInt(main.style.left);
        ls.pos.y = parseInt(main.style.top);
        saveSettings();
    }
});

function updateButtonText() {
    buttonOptymalizacja.innerHTML = ls.optymalizacja ? 'Optymalizacja --O' : 'Optymalizacja O--';
    buttonAutoHeal.innerHTML = ls.autoHeal ? 'AutoHeal --O' : 'AutoHeal O--';
}
