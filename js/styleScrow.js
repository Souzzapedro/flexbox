const sectionIds = ['flex-flow', 'flex-wrap', 'align-items', 'justify-content', 'flex-direction', 'display-flex'];
        const divIds = ['btn-flex-flow', 'btn-flex-wrap', 'btn-align-items', 'btn-justify-content', 'btn-flex-direction', 'btn-display-flex'];

        const options = {
            threshold: 0.01 // O valor do threshold indica a porcentagem visível que o elemento precisa ter para disparar a função callback
        };

        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                const targetId = entry.target.id;
                const targetDiv = document.getElementById(targetId);

                // Procurar o índice do targetId dentro do array sectionIds
                const index = sectionIds.indexOf(targetId);

                // Seção não encontrada, interromper o código
                if (index === -1) return;

                // Pegar o ID do botão correspondente usando o índice encontrado
                const buttonId = divIds[index];
                const targetButton = document.getElementById(buttonId);

                if (entry.isIntersecting) {
                    // Se a seção estiver visível na tela
                    targetButton.style.backgroundColor = '#272822';
                    targetButton.style.color = '#fff';
                  } else {
                    // Se a seção não estiver visível na tela
                    targetButton.style.backgroundColor = ''; // Volte ao estado original do background-color
                    targetButton.style.color = '';
                }
            });
        }

        const observer = new IntersectionObserver(handleIntersection, options);

        // Observar todas as seções
        sectionIds.forEach(sectionId => {
            const targetSection = document.getElementById(sectionId);
            observer.observe(targetSection);
        });