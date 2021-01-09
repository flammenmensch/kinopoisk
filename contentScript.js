const createButton = () => {
    const button = document.createElement('button');
    button.innerText = 'Смотреть бесплатно';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.height = '36px';
    button.style.zIndex = '10000';
    button.style.border = 'none';
    button.style.padding = '9px 15px';
    button.style.fontWeight = '500';
    button.style.fontSize = '13px';
    button.style.cursor = 'pointer';
    button.style.lineHeight = '1.15';
    button.style.borderRadius = '24px';
    button.style.backgroundColor = '#f60';
    button.style.color = '#fff';
    button.style.boxShadow = '0px 5px 25px 0px rgba(0, 0, 0, 0.25), 0px 5px 10px 1px rgba(0, 0, 0, 0.25)';
    button.style.fontFamily = 'Graphik Kinopoisk LC Web,Arial,Tahoma,Verdana,sans-serif';

    return button;
};

const buttonClickHandler = () => {
    chrome.runtime.sendMessage({
        type: 'OPEN',
        url: window.location.href.replace(/kinopoisk.ru/, 'nono.games')
    });
};

const button = createButton();
button.addEventListener('click', buttonClickHandler);

document.body.appendChild(button);