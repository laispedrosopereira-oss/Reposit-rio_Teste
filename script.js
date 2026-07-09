// Seleciona todos os botões de curtir da página
const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Encontra o elemento de texto que exibe o número de curtidas dentro do botão clicado
        const likesCountSpan = this.querySelector('.likes-count');
        let currentLikes = parseInt(likesCountSpan.textContent);
        
        // Verifica se o botão já foi clicado (tem a classe 'liked')
        if (this.classList.contains('liked')) {
            // Se já foi curtido, diminui o contador e remove a classe visual
            currentLikes--;
            likesCountSpan.textContent = currentLikes;
            this.classList.remove('liked');
        } else {
            // Se não foi curtido, aumenta o contador e adiciona a classe visual
            currentLikes++;
            likesCountSpan.textContent = currentLikes;
            this.classList.add('liked');
        }
    });
});