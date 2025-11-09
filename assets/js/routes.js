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
            coords: [69.64, 18.95] 
        },
        {
            name: 'Дзеркало гір',
            location: 'Швейцарія',
            coords: [46.57, 7.99] 
        },
        {
            name: 'Річкові таємниці',
            location: 'Австрія',
            coords: [47.55, 13.64] 
        }
    ];

    routes.forEach(route => {
        const popupContent = `
            <b>${route.name}</b>
            <br>${route.location}
            <br><a href="#!">Дізнатись більше...</a>
        `;

        L.marker(route.coords, { icon: customIcon })
            .addTo(map)
            .bindPopup(popupContent);
    });
});