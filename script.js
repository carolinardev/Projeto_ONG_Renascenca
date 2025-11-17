// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", () => {

    // ===== MODO ESCURO =====
    const btnModoEscuro = document.getElementById("modo-escuro-btn");
    btnModoEscuro.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        // Altera o texto do botão
        if (document.body.classList.contains("dark-mode")) {
            btnModoEscuro.textContent = "☀️ Desativar Modo Escuro";
        } else {
            btnModoEscuro.textContent = "🌙 Ativar Modo Escuro";
        }
    });

    // ===== FORMULÁRIO =====
    const form = document.getElementById("form-inscricao");
    const msg = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // evita recarregar a página

        // Mostra mensagem
        msg.style.display = "block";

        // Esconde após 4 segundos
        setTimeout(() => {
            msg.style.display = "none";
        }, 4000);

        // Reseta o formulário
        form.reset();
    });

});
