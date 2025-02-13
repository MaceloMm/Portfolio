// Aguardar o carregamento completo da janela
window.addEventListener('load', () => {
    const iframe = document.getElementById('frame');

    // Aguardar o carregamento do conteúdo do iframe
    iframe.addEventListener('load', () => {
        try {
            // Acessar o documento interno do iframe
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const response_promp = iframeDoc.getElementById("reponse_promp");

            if (response_promp) {
                console.log('Input encontrado no iframe!');
                response_promp.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        console.log('Enter pressionado no iframe!');
                        teste(response_promp.value);
                    }
                });
            } else {
                console.error('Elemento reponse_promp não encontrado no iframe.');
            }
        } catch (error) {
            console.error('Erro ao acessar o conteúdo do iframe:', error);
        }
    });
});

// Função para manipular a exibição do iframe
function teste(value) {
    const frame = document.getElementById("frame");
    console.log(`Valor recebido: ${value}`);

    if (value.trim().toLowerCase() === "continue") {
        frame.style.display = "none";
        console.log('Iframe ocultado.');
    } else {
        frame.style.display = "flex";
        console.log('Iframe visível.');
    }
}
