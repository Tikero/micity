let mobileMenu = document.getElementById('mobile-menu');
let menuNavegacao = document.getElementById('nav-list');
let itensDoMenu = document.querySelectorAll('#nav-list li');


function animateLinks() {
    itensDoMenu.forEach((item, posicaoNalista) => {
        item.style.animation = item.style.animation 
        ? '' 
        : `navLinkFade 0.5s ease forwards ${posicaoNalista / 7 + 0.3}s`;
    });
  }

function clicou() {
    menuNavegacao.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    animateLinks();
}

mobileMenu.addEventListener('click', clicou);




// // Seleciona os elementos do DOM
// let mobileMenu = document.getElementById('mobile-menu');
// let menuNavegacao = document.getElementById('nav-list');
// let itensDoMenu = menuNavegacao.getElementsByTagName('li');

// // Função para animar os links do menu
// function animateLinks() {
//     itensDoMenu.forEach((item, posicaoNalista) => {
//         item.style.animation = item.style.animation
//             ? ''
//             : `navLinkFade 0.5s ease forwards ${posicaoNalista / 7 + 0.3}s`;
//     });
//     // // Passo 1: Pegar cada item do menu um por um
//     // for (let i = 0; i < itensDoMenu.length; i++) {
//     //     const item = itensDoMenu[i]; // Item atual do loop

//     //     // Passo 2: Verificar se o item já tem animação
//     //     if (item.style.animation) {
//     //         // Se TIVER animação: removemos (para resetar)
//     //         item.style.animation = '';
//     //     } else {
//     //         // Se NÃO TIVER animação: calculamos o atraso
//     //         const delay = (i / 7) + 0.3; // Cada item tem um delay diferente

//     //         // Passo 3: Aplicamos a animação com o delay
//     //         item.style.animation = `navLinkFade 0.5s ease forwards ${delay}s`;
//     //     }

//     // }
// }

// // Função principal que é chamada ao clicar no menu
// function clicou() {
//     // menuNavegacao.classList.toggle('active');
//     // igual ao código aqui de baixo!
//     if (menuNavegacao.classList.contains('active')) {
//         menuNavegacao.classList.remove('active');
//     } else {
//         menuNavegacao.classList.add('active');
//     }

//     mobileMenu.classList.toggle('active');

//     animateLinks();
// }

// // Adiciona o evento de clique ao menu mobile
// mobileMenu.addEventListener('click', clicou);