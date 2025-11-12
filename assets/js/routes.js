document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([25, 0], 2);

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
            location: 'Норвегія, Тромсе',
            coords: [69.64, 18.95],
            description: 'Місто за Полярним колом, ідеальне місце для спостереження за північним сяйвом.'
        },
        {
            name: 'Дзеркало гір',
            location: 'Швейцарія, Інтерлакен',
            coords: [46.57, 7.99],
            description: 'Курортне місто між двома озерами, оточене величними Альпами. Центр пригод.'
        },
        {
            name: 'Річкові таємниці',
            location: 'Австрія, Гальштат',
            coords: [47.55, 13.64],
            description: 'Мальовниче альпійське село на березі озера, об\'єкт Світової спадщини ЮНЕСКО.'
        },
        {
            name: 'Лазурове узбережжя',
            location: 'Італія, Амальфі',
            coords: [40.63, 14.60],
            description: 'Приголомшлива ділянка узбережжя з крутими скелями та яскравими селами.'
        },
        {
            name: 'Крижана лагуна',
            location: 'Ісландія, Йокульсарлон',
            coords: [64.04, -16.17],
            description: 'Льодовикова лагуна, наповнена айсбергами, що відкололися від льодовика.'
        },
        {
            name: 'Втрачене місто інків',
            location: 'Перу, Мачу-Пікчу',
            coords: [-13.16, -72.54],
            description: 'Стародавнє місто інків, розташоване високо в Андах, відоме своєю унікальною архітектурою.'
        },
        {
            name: 'Великий Бар\'єрний риф',
            location: 'Австралія',
            coords: [-18.28, 147.69],
            description: 'Найбільша у світі система коралових рифів, видима з космосу. Рай для дайверів.'
        },
        {
            name: 'Серце традицій',
            location: 'Японія, Кіото',
            coords: [35.01, 135.76],
            description: 'Колишня столиця Японії, відома своїми храмами, садами та традиційними будинками.'
        },
        {
            name: 'Велика міграція',
            location: 'Танзанія, Серенгеті',
            coords: [-2.33, 34.83],
            description: 'Величезний парк, відомий щорічною міграцією мільйонів антилоп гну та зебр.'
        },
        {
            name: 'Гранд-Каньйон',
            location: 'США, Аризона',
            coords: [36.10, -112.11],
            description: 'Величезний каньйон, вирізаний річкою Колорадо. Вражає своїми масштабами та кольорами.'
        }
    ];

    routes.forEach(route => {

        const popupContent = `
            <div style="width: 180px;">
                <b style="font-size: 1.1em;">${route.name}</b>
                <br><i>${route.location}</i>
                <br><br>
                ${route.description}
            </div>
        `;

        L.marker(route.coords, { icon: customIcon })
            .addTo(map)
            .bindPopup(popupContent);
    });
});