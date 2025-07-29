dataProjects = [
    {
        "FocusBoard": {
            "title": "FocusBoard",
            "description": 'O FocusBoard é uma aplicação web desenvolvida com Django, PostgreSQL e JavaScript, criada com o objetivo de gerenciar tarefas e projetos pessoais de forma prática e organizada, seguindo os conceitos de Kanban.',
            "video": "assets/videos/focusboard.mp4",
            "funcionalidades": [
                "Cadastro, edição e exclusão de tarefas", 'Organização de tarefas por status: A Fazer, Fazendo, Concluído', 'Filtros por data de criação, data de conclusão e tarefas do dia',
                'Sistema de autenticação de usuários com perfil personalizado e upload de imagem', 'Templates responsivos com tema claro e escuro', 'Navegação dinâmica utilizando AJAX'
            ],
            "tecnologias": ["HTML5", "CSS3", "JavaScript", "Django", "Python", "PostgreSQL", "AJAX"],
            "linkedin": "https://www.linkedin.com/feed/update/urn:li:activity:7340051736297889793/",
            "github": "https://github.com/MaceloMm/kanban-django-project"
        }
    },
]

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

    tiping.textContent = titles[textIndex];

    setInterval(() => {
        textIndex = (textIndex + 1) % titles.length;
        tiping.textContent = titles[textIndex];
    }, 5000);
}

window.addEventListener('scroll', () => {
    const navBar = document.getElementById("nav-bar");

    if (window.scrollY == 0) {
        navBar.classList.remove("change-navbar")
    } else {
        navBar.classList.add("change-navbar")
    }
});

document.querySelectorAll(".option").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".option").forEach((el) => {
            el.classList.remove("active");
        });
        item.classList.add("active");

        const containers = {
            "Projetos": "projects",
            "Certificações": "certifications",
            "Diferenciais": "differentials"
        }

        document.querySelectorAll(".content").forEach((el) => {
            el.classList.add("hide");
        });

        document.getElementById(containers[item.textContent.trim()]).classList.remove("hide");
    });
});

document.querySelectorAll(".info").forEach((item) => {
    item.addEventListener("click", () => {
        const ProjectName = item.parentElement.parentElement.parentElement.querySelector(".title").textContent.trim();
        dataProjects.forEach((project) => {
            if (Object.keys(project)[0] === ProjectName) {
                const projectData = project[ProjectName];
                const modal = document.getElementById("modal");
                modal.querySelector("#video-project").src = projectData.video;
                modal.querySelector("#video-project source").src = projectData.video;
                modal.querySelector("#project-title").textContent = projectData.title;
                modal.querySelector("#description-camp").textContent = projectData.description;
                
                projectData.funcionalidades.forEach((func) => {
                    const li = document.createElement("li");
                    li.textContent = func;
                    modal.querySelector(".functions-camp").appendChild(li);
                });
                projectData.tecnologias.forEach((tech) => {
                    const li = document.createElement("li");
                    li.textContent = tech;
                    modal.querySelector(".tecnologies-camp").appendChild(li);
                });
                modal.classList.remove("hide");
            }
        });
    })
});

document.querySelectorAll(".close-btn").forEach((el) => {
    el.addEventListener("click", () => {
        const modal = document.getElementById("modal");
        modal.classList.add("hide");
        modal.querySelector("#video-project").pause();
        modal.querySelector("#video-project").src = '';
        modal.querySelector("#video-project source").src = '';
        modal.querySelector("#project-title").textContent = '';
        modal.querySelector("#description-camp").textContent = '';
        modal.querySelector(".functions-camp").innerHTML = '';
        modal.querySelector(".tecnologies-camp").innerHTML = '';
    });
});

textsAtualization()