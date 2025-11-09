document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([46.8, 8.2], 5); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customIcon = L.divIcon({
        className: 'custom-map-icon',
        iconSize: [30, 30] 
    });

    const routes = [
        {
            name: 'Полярна казка',
            location: 'Норвегія',
            coords: [69.64, 18.95], 
            url: 'https://uk.wikipedia.org/wiki/Тромсе' 
        },
        {
            name: 'Дзеркало гір',
            location: 'Швейцарія',
            coords: [46.57, 7.99], 
            url: 'https://uk.wikipedia.org/wiki/Інтерлакен'
        },
        {
            name: 'Річкові таємниці',
            location: 'Австрія',
            coords: [47.55, 13.64], 
            url: 'https://uk.wikipedia.org/wiki/Гальштат'
        },
        {
            name: 'Лазурове узбережжя',
            location: 'Італія',
            coords: [40.63, 14.60], 
            url: 'https://uk.wikipedia.org/wiki/Амальфітанське_узбережжя'
        },
        {
            name: 'Крижана лагуна',
            location: 'Ісландія',
            coords: [64.04, -16.17], 
            url: 'https://guidetoiceland.is/nature-info'
        }
    ];

    routes.forEach(route => {
        
        const popupContent = `
            <b>${route.name}</b>
            <br>${route.location}
            <br>Координати: ${route.coords[0]}, ${route.coords[1]}
            <br><a href="${route.url}" target="_blank">Дізнатись більше...</a>
        `;

        L.marker(route.coords, { icon: customIcon })
            .addTo(map) 
            .bindPopup(popupContent); 
    });
});