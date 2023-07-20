let commandTextInput = document.querySelector("#command")
let searchFilter = document.querySelector(".search-filter")
let programList = document.querySelectorAll(".command")

document.addEventListener("click", () => {
    commandSearch()
})

document.addEventListener("keyup", (e) => {
    if (e.key == '/') {
        commandTextInput.focus()
        commandSearch()
    }
    if (e.key == 'Escape') { commandTextInput.blur(); commandSearch() }

})

function commandSearch() {
    if (document.activeElement == commandTextInput) {
        searchFilter.style.display = 'flex'
    }
    else {
        searchFilter.style.display = 'none'
    }
}

commandTextInput.addEventListener("keyup", (e) => {
    let input = commandTextInput.value
    programList.forEach(element => {
        let name = element.childNodes[3].childNodes[1]
        if (name.innerHTML.startsWith(input)) {
            element.style.display = 'flex'
        } else element.style.display = 'none'
    });
})