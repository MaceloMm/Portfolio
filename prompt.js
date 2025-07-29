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
        }, 3000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const skillsContainer = document.getElementById("skills-content");
    const icons = [
        "assets/img/icons/html-5.png",
        "assets/img/icons/css-3.png",
        "assets/img/icons/js.png",
        "assets/img/icons/python.png",
        "assets/img/icons/django.png",
        "assets/img/icons/mysql.png",
        "assets/img/icons/sql.png",
        "assets/img/icons/git.png",
        "assets/img/icons/react.webp",
        "assets/img/icons/nodejs.png"
    ];
    
    let index = 0;
    const displayCount = 7;
    const delay = 3000; 

    function updateIcons() {
        skillsContainer.style.opacity = "0";

        setTimeout(() => {
            skillsContainer.innerHTML = "";
            
            for (let i = 0; i < displayCount; i++) {
                const img = document.createElement("img");
                img.src = icons[(index + i) % icons.length];
                img.alt = "Skill";
                img.classList.add("icon-skills");
                skillsContainer.appendChild(img);
            }

            index = (index + displayCount) % icons.length;

            skillsContainer.style.opacity = "1";
        }, 3500); 
    }

    setInterval(updateIcons, delay);
});

