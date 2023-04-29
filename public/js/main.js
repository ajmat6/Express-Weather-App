const submitButton = document.getElementById('submitButton');

const getInfo = (e) => {
    e.preventDefault();
    alert('hii');
}


submitButton.addEventListener('click', getInfo);