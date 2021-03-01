const textarea = document.querySelector('.decrypter__cipher-text'),
    decryptBtn = document.querySelector('.decrypt'),
    resultInput = document.querySelector('.decrypter__result-text'),
    copyBtn = document.querySelector('.select'),
    clearBtn = document.querySelector('.clear'),
    regExp = /([a-z])\1{1}/g;

edwardDecrypt = (message) => {
    let result = message;

    while (result.search(regExp) !== -1) {
        result = result.replace(regExp, '')
    }

    resultInput.value = result;
}

select = () => {
    resultInput.select();
}

clear = () => {
    resultInput.value = '';
    textarea.value = '';
    textarea.focus();
}

decryptBtn.addEventListener('click', () => edwardDecrypt(textarea.value));
copyBtn.addEventListener('click', select);
clearBtn.addEventListener('click', clear);
