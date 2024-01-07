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

    const buttonOptymalizacja = document.createElement('button');
    buttonOptymalizacja.setAttribute('id', 'btnOptymalizacja');
    buttonOptymalizacja.innerHTML = 'O--';
    buttonOptymalizacja.addEventListener('click', () => {
        ls.optymalizacja = !ls.optymalizacja;
        buttonOptymalizacja.innerHTML = ls.optymalizacja ? '--O' : 'O--';
        saveSettings();
    });
    main.append(buttonOptymalizacja);

    const buttonAutoHeal = document.createElement('button');
    buttonAutoHeal.setAttribute('id', 'btnAutoHeal');
    buttonAutoHeal.innerHTML = 'O--';
    buttonAutoHeal.addEventListener('click', () => {
        ls.autoHeal = !ls.autoHeal;
        buttonAutoHeal.innerHTML = ls.autoHeal ? '--O' : 'O--';
        saveSettings();
    });
    main.append(buttonAutoHeal);

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
        margin: 10px;
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
