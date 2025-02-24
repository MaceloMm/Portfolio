function textsAtualization() {
    let titles = [
        "WEB",
        "FullStack",
        "Python",
        "Back-end",
        "Front-end"
    ];

    const tiping = document.querySelector("#trocador span");
    let textIndex = 0;

    // Exibe o primeiro texto
    tiping.textContent = titles[textIndex];

    // Altera o texto a cada 5 segundos
    setInterval(() => {
        textIndex = (textIndex + 1) % titles.length;
        tiping.textContent = titles[textIndex];
    }, 5000);
}

window.addEventListener('scroll', () => {
    const navBar = document.getElementById("nav-bar");

    if (window.scrollY == 0){
        navBar.classList.remove("change-navbar")
    }else{
        navBar.classList.add("change-navbar")
    }
})

// Inicia a função
textsAtualization()