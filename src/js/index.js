const btnAbrirFormulario = document.querySelector("#btn-agendar-visita")

const formularioDeVisita = document.querySelector(".register-popup")

const btnFecharFormulario = document.querySelector("#close-popup")

const btnAgendarVisita = document.querySelector("#agendar-visita")

btnAbrirFormulario.addEventListener("click", () => {
    if (formularioDeVisita.classList.contains("open-popup")) {
        return 
    } else {
    formularioDeVisita.classList.add("open-popup")
    }
})

btnFecharFormulario.addEventListener("click", () => {
    if (formularioDeVisita.classList.contains("open-popup")) {
        formularioDeVisita.classList.remove("open-popup") 
    } else {
        return
    }
})

btnAgendarVisita.addEventListener("click", () => {
    alert("Sua visita foi agendada com sucesso!")
})