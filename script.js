const url = "contato.html"
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')

function openInNewTab(url) {
    const win = window.open(url, '_self')
    win.focus()
}

btn1.addEventListener('click', () => {
    openInNewTab(url)
})

btn2.addEventListener('click', () => {
    openInNewTab(url)
})

btn3.addEventListener('click', () => {
    openInNewTab(url)
})

