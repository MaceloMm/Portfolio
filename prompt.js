const reponse = document.getElementById("reponse_promp");
const content1 = document.getElementById("content-principal");
const content2 = document.getElementById("content-hidden");
const loadding = document.getElementById("load");
const body = document.getElementsByTagName("body");

reponse.addEventListener('keydown', function(e){
    if (e.key == 'Enter') {
        e.preventDefault;
        teste()
    }
})

function teste(){
    if (reponse.value === 'continue'){
        content1.classList.add("hidden");
        loadding.classList.remove("hidden");
        setTimeout(() => {
            loadding.classList.add("hidden");
            content2.classList.remove("hidden");
            document.getElementById("skills").classList.remove("hidden");
        }, 5000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const skillsContainer = document.getElementById("skills-content");
    const icons = [
        "static/icons/html-5.png",
        "static/icons/css-3.png",
        "static/icons/js.png",
        "static/icons/python.png",
        "static/icons/django.png",
        "static/icons/mysql.png",
        "static/icons/sql.png",
        "static/icons/git.png",
        "static/icons/react.webp",
        "static/icons/nodejs.png"
    ];
    
    let index = 0;
    const displayCount = 7; // Quantos ícones mostrar por vez
    const delay = 3000; // Tempo entre as trocas (3s)

    function updateIcons() {
        // Faz fade-out antes de trocar
        skillsContainer.style.opacity = "0";

        setTimeout(() => {
            skillsContainer.innerHTML = ""; // Remove os ícones atuais
            
            // Exibe os próximos 7 ícones
            for (let i = 0; i < displayCount; i++) {
                const img = document.createElement("img");
                img.src = icons[(index + i) % icons.length]; // Garante que não estoure o array
                img.alt = "Skill";
                img.classList.add("icon-skills");
                skillsContainer.appendChild(img);
            }

            // Atualiza o índice para o próximo grupo de ícones
            index = (index + displayCount) % icons.length;

            // Faz fade-in depois da troca
            skillsContainer.style.opacity = "1";
        }, 3500); // Tempo do fade-out antes da troca
    }

    setInterval(updateIcons, delay);
});

