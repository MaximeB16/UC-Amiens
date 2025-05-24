document.addEventListener('DOMContentLoaded', () => {
    const popUp = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');
    const boxes = document.querySelectorAll('.Sorties');

    const contenuPopups = [
        [
            { type: 'text', value: 'Découvrez le marché de Noël de notre région, avec ses chalets illuminés et ses produits artisanaux.' },
            { type: 'image', value: '../IMAGES/MarcheDeNoel/marchedenoel1.jpg' },
            { type: 'image', value: '../IMAGES/MarcheDeNoel/marchedenoel2.jpg' },
            { type: 'image', value: '../IMAGES/MarcheDeNoel/marchedenoel3.jpg' },
            { type: 'video', value: '../VIDEO/MarcheDeNoel.mp4' }
        ],
        [
            { type: 'text', value: 'Participez à notre distribution de paniers gourmands pour les fêtes, un moment de partage chaleureux.' },
            { type: 'image', value: '../IMAGES/PanierGourmand/PanierGourmand1.jpg' },
            { type: 'image', value: '../IMAGES/PanierGourmand/PanierGourmand2.jpg' },
            { type: 'image', value: '../IMAGES/PanierGourmand/PanierGourmand3.jpg' },
            { type: 'video', value: '../VIDEO/PanierGourmand.mp4' }
        ],
        [
            { type: 'text', value: '../IMAGES/Copil/' },
            { type: 'video', value: '../VIDEO/Copil.mp4' }
        ],
        [
        ]
    ];

    const afficherContenuPopup = (contenu) => {
        popupContent.innerHTML = ''; 
        const closeButton = document.createElement('span');
        closeButton.id = 'closePopup';
        closeButton.className = 'close-button';
        closeButton.innerHTML = '<strong>&times;</strong>';
        popupContent.appendChild(closeButton);

        contenu.forEach(item => {
            if (item.type === 'text') {
                const p = document.createElement('p');
                p.textContent = item.value;
                popupContent.appendChild(p);
            } else if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.value;
                popupContent.appendChild(img);
            } else if (item.type === 'video') {
                const video = document.createElement('video');
                video.src = item.value;
                video.controls = true;
                popupContent.appendChild(video);
            }
        });

        closeButton.addEventListener('click', fermerPopup);
    };

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            afficherContenuPopup(contenuPopups[index]);
            popUp.classList.remove('hidden');
        });
    });

    const fermerPopup = () => {
        popUp.style.opacity = '0';
        setTimeout(() => {
            popUp.classList.add('hidden');
            popUp.style.opacity = '';
        }, 300);
    };

    popUp.addEventListener('click', (event) => {
        if (event.target === popUp) fermerPopup();
    });
});
