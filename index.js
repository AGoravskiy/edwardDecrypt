const textarea = document.querySelector('.decrypter__cipher-text'),
    decryptBtn = document.querySelector('.decrypt'),
    result = document.querySelector('.decrypter__result-text'),
    copyBtn = document.querySelector('.select'),
    clearBtn = document.querySelector('.clear');

edwardDecrypt = () => {
    const regExp = /([a-z])\1{1}/g;
    result.value = textarea.value.replace(regExp, '');
}

select = () => {
    result.select();
}

clear = () => {
    result.value = '';
    textarea.value = '';
    textarea.focus();
}

decryptBtn.addEventListener('click', edwardDecrypt);
copyBtn.addEventListener('click', select);
clearBtn.addEventListener('click', clear);
