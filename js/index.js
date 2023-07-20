document.addEventListener("keyup", (e) => {
    if (e.key == '/') document.querySelector("#command").focus()
    if (e.key == 'Escape') document.querySelector("#command").blur()
})