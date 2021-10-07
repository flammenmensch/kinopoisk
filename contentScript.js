const createButton = () => {
  const button = document.createElement('button');
  button.innerText = 'Смотреть бесплатно';
  button.classList.add('ss-button');

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
