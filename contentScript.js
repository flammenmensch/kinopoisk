const createButton = () => {
    const button = document.createElement('button');
    button.innerText = 'Смотреть бесплатно';
    button.setAttribute('style',
`position: fixed;
bottom: 20px;
right: 20px;
height: 36px;
z-index: 10000;
border: none;
border-radius: 24px;
padding: 9px 15px;
font-weight: 500;
font-size: 13px;
font-family: Graphik Kinopoisk LC Web,Arial,Tahoma,Verdana,sans-serif;
line-height: 1.15;
cursor: pointer;
background-color: #f60;
color: #fff;
box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.25), 0px 5px 10px 1px rgba(0, 0, 0, 0.25);`
    );

    return button;
};

const buttonClickHandler = () => {
    button.innerText = 'Подождите...';
    chrome.runtime.sendMessage({
        type: 'OPEN',
        url: window.location.href
    }, () => {
        button.innerText = 'Смотреть бесплатно';
    });
};

const button = createButton();
button.addEventListener('click', buttonClickHandler);

document.body.appendChild(button);