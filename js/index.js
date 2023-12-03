const adviceBtn = document.querySelector('.advice-update');
const adviceId = document.querySelector('.advice-id');
const adviceDescription = document.querySelector('.advice-description');

async function boardCreator() {
    const url = await fetch('https://api.adviceslip.com/advice')
    const retorno = await url.json()
    const idAdvice = `ADVICE # ${retorno.slip.id}`
    const description = `adviceDescription ${retorno.slip.advice}`

    adviceId.innerHTML = idAdvice
    adviceDescription.innerHTML = '"' + description + '"'
 }

 adviceBtn.addEventListener("click", boardCreator);
 boardCreator()
