const navElement = document.querySelector('.nav')
const liElements = navElement.querySelectorAll('li')
const body = document.querySelector('body')
const stickyHeader = document.querySelector('.header.fixed');
const btnSignUp = document.querySelector('.btn-signup')
for (let li of liElements) {
    li.addEventListener('click', (e) => {
        liElements.forEach(li => li.classList.remove('active'))
        e.target.parentNode.classList.add('active')
    })
}

function getHeaderTopDistance() {
  const headerRect = stickyHeader.getBoundingClientRect();
  return headerRect.top;
}

function updateHeaderTopDistance() {
    if (getHeaderTopDistance() === -28) {
     btnSignUp.classList.add('rs-signup')
    }   
    else {
        btnSignUp.classList.remove('rs-signup')
    }
}
window.addEventListener('scroll', updateHeaderTopDistance);

