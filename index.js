const data = [
    {
      "ao": "ЦАО",
      "name": "ГБУЗ \"МНПЦ МРВСМ ДЗМ\" филиал № 1",
      "address": "г. Москва, ул. Земляной вал, д.53 стр.18",
      "building": "нежилое ",
      "year": "1931",
      "usage": "не используется",
      "space": "146.9",
      "floors": "1 этажное с мезонином"
    },
    {
      "ao": "ЦАО",
      "name": "ГБУЗ \"ГКОБ №1 ДЗМ\"",
      "address": " г. Москва, ул. Бауманская, д. 17/1, корпус 1",
      "building": "Корпус № 1",
      "year": "1938",
      "usage": "используется",
      "space": "3612.2",
      "floors": "4 этажа + (подвал и техэтаж)"
    },
    {
      "ao": "ЦАО",
      "name": "ГБУЗ \"Морозовская ДГКБ ДЗМ\"",
      "address": "г.Москва, 4-й Добрынинский пер. д.1/9, стр.33",
      "building": "стр. 33 (лечебный)",
      "year": "1968",
      "usage": "не используется",
      "space": "301",
      "floors": "1"
    },
    {
      "ao": "ЦАО",
      "name": "ГБУЗ \"Морозовская ДГКБ ДЗМ\"",
      "address": "г.Москва, 4-й Добрынинский пер. д.1/9, стр.42",
      "building": "стр. 42 (лечебный)",
      "year": "1968",
      "usage": "не используется",
      "space": "140.6",
      "floors": "1+подвал"
    },
    {
      "ao": "ЦАО",
      "name": "ГБУЗ \"Морозовская ДГКБ ДЗМ\"",
      "address": "г.Москва, 4-й Добрынинский пер. д.1/9, стр.43",
      "building": "стр.43 (лечебный)",
      "year": "1968",
      "usage": "не используется",
      "space": "870.5",
      "floors": "1+подвал"
    },
    {
      "ao": "ЦАО",
      "name": "ГБУЗ \"Морозовская ДГКБ ДЗМ\"",
      "address": "г.Москва, 4-й Добрынинский пер. д.1/9, стр.45",
      "building": "стр. 45 (лечебный)",
      "year": "1968",
      "usage": "не используется",
      "space": "612.9",
      "floors": "2+подвал"
    },
    {
      "ao": "ЦАО",
      "name": "ГКБ № 1 им. Н.И. Пирогова",
      "address": "г. Москва, Ленинский пр-т, дом 10,корп. 9",
      "building": "Лечебный корпус",
      "year": "1917",
      "usage": "не используется",
      "space": "366.6",
      "floors": "2+подвал"
    },
    {
      "ao": "ЮВАО",
      "name": "ГБУЗ \"ГКБ № 13 ДЗМ\"",
      "address": "г. Москва ул. Велозаводская д.1/1 стр.№6",
      "building": "ПАК",
      "year": "1963",
      "usage": "не используется",
      "space": "223.8",
      "floors": "1"
    },
    {
      "ao": "ЮВАО",
      "name": "ГБУЗ \"ГКБ № 13 ДЗМ\"",
      "address": "г. Москва, Велозаводская улица, 1/1с14",
      "building": "Склад",
      "year": "1980",
      "usage": " используется",
      "space": "197.3",
      "floors": "1"
    },
    {
      "ao": "ЮВАО",
      "name": "ГБУЗ \"МНПЦ Наркологии ДЗМ\"",
      "address": "Симферопольский бульвар д.12,стр.1",
      "building": "Планировался под архив",
      "year": "2011",
      "usage": "не используется",
      "space": "243",
      "floors": "2"
    },
    {
      "ao": "ЮВАО",
      "name": "ГБУЗ \"МНПЦ Наркологии ДЗМ\"",
      "address": "Симферопольский бульвар д.10,стр.3",
      "building": "Планировался под склад",
      "year": "2011",
      "usage": "не используется",
      "space": "288",
      "floors": "2"
    },
    {
      "ao": "ЮВАО",
      "name": "ГБУЗ \"ДС № 19 ДЗМ\"",
      "address": "Тул-ая обл.,Заокский р-он,п.Приокский",
      "building": "Лечебный корпус",
      "year": "1936",
      "usage": "не используется",
      "space": "471.6",
      "floors": "2"
    },
    {
      "ao": "ЮВАО",
      "name": "ГБУЗ \"ДС № 19 ДЗМ\"",
      "address": "Тул-ая обл.,Заокский р-он,п.Приокский",
      "building": "Хозяйственный корпус",
      "year": "1953",
      "usage": "не используется",
      "space": "13.2",
      "floors": "1"
    },
    {
      "ao": "ВАО",
      "name": "ГБУЗ \"ПКБ № 4 им.П.Б.Ганнушкина ДЗМ\" Филиал «Психиатрический стационар им. В.А. Гиляровского»",
      "address": "г. Москва, ул. Матросская тишина, д. 20, стр. 13",
      "building": "пищеблок",
      "year": "1938",
      "usage": "не используется",
      "space": "194.1",
      "floors": "1"
    },
    {
      "ao": "ВАО",
      "name": "ГБУЗ \"ПКБ № 4 им.П.Б.Ганнушкина ДЗМ\" Филиал «Психиатрический стационар им. В.А. Гиляровского»",
      "address": "г. Москва, ул. Матросская тишина, д. 20, стр. 8",
      "building": "оранжерея",
      "year": "1962",
      "usage": "не используется",
      "space": "214.7",
      "floors": "1"
    },
    {
      "ao": "ВАО",
      "name": "ГБУЗ \"ИКБ № 2 ДЗМ\"",
      "address": "г. Москва, 8-я ул. Соколиной горы, д. 15, корпус15",
      "building": "нежилое ",
      "year": "1943",
      "usage": "не используется",
      "space": "1163",
      "floors": "2"
    },
    {
      "ao": "ВАО",
      "name": "ГБУЗ \"ИКБ № 2 ДЗМ\"",
      "address": "г. Москва, 8-я ул. Соколиной горы, д. 15, строение 22",
      "building": "нежилое ",
      "year": "1960",
      "usage": "не используется",
      "space": "102.8",
      "floors": "1"
    },
    {
      "ao": "ВАО",
      "name": "ГБУЗ \"ИКБ № 2 ДЗМ\"",
      "address": "г. Москва, 8-я ул. Соколиной горы, д. 15, строение 23",
      "building": "нежилое ",
      "year": "1990",
      "usage": "не используется",
      "space": "111",
      "floors": "1"
    },
    {
      "ao": "ВАО",
      "name": "ГБУЗ \"ГКБ им. Д.Д. Плетнева ДЗМ\"",
      "address": " г. Москва, 11-я парковая д. 32, стр. 7",
      "building": "нежилое ",
      "year": "1958",
      "usage": "не используется",
      "space": "380",
      "floors": "1"
    },
    {
      "ao": "ВАО",
      "name": "ГБУЗ \"ДГКБ св.Владимира ДЗМ\"",
      "address": "г. Москва, Рубцовско-Дворцовая, д. 1/3",
      "building": "Корпус № 4 (лаборатория)",
      "year": "1953",
      "usage": "не используется",
      "space": "3495",
      "floors": "5+подвал"
    },
    {
      "ao": "ВАО",
      "name": "ГБУЗ \"ГКБ им. Братьев Бахрушиных ДЗМ\"",
      "address": "г. Москва, ул. Стромынка, д. 7",
      "building": "Корпус № 37",
      "year": "1956",
      "usage": "не используется",
      "space": "27.6",
      "floors": "1"
    },
    {
      "ao": "ВАО",
      "name": "ГБУЗ \"МКНЦ им. А.С. Логинова ДЗМ\"",
      "address": "г. Москва, ш.Энтузиастов, д. 86",
      "building": "корпус № 1 административно-лечебный ",
      "year": "1957",
      "usage": "не используется",
      "space": "9643.6",
      "floors": "5+подвал"
    },
    {
      "ao": "ВАО",
      "name": "ГБУЗ \"МКНЦ им. А.С. Логинова ДЗМ\"",
      "address": "г. Москва, ул.Новогиреевская д. 1",
      "building": "корпус № 2 (лечебный)",
      "year": "1956",
      "usage": "не используется",
      "space": "13854.1",
      "floors": "9+подвал"
    },
    {
      "ao": "ВАО",
      "name": "ГБУЗ \"МКНЦ им. А.С. Логинова ДЗМ\"",
      "address": "г. Москва, ул.Новогиреевская д. 1, стр. 3, пом. 1",
      "building": "корпус № 9 ПАК",
      "year": "1956",
      "usage": "не используется",
      "space": "210.5",
      "floors": "1"
    },
    {
      "ao": "ЮАО",
      "name": "ГБУЗ \"ГКБ №4 ДЗМ\"",
      "address": "г. Москва, ул. Павловская, д.25, стр.36",
      "building": "Оранжерея",
      "year": "1958",
      "usage": "не используется",
      "space": "143.6",
      "floors": "1 этажное"
    },
    {
      "ao": "ЮАО",
      "name": "ГБУЗ \"ГКБ им. В.М. Буянова ДЗМ\"",
      "address": "г. Москва, ул. Бакинская, д.26, стр.6",
      "building": "Склад",
      "year": "1983",
      "usage": "используется",
      "space": "174.1",
      "floors": "1 этажное"
    },
    {
      "ao": "ЮАО",
      "name": "ГБУЗ \"ГКБ им. В.М. Буянова ДЗМ\"",
      "address": "г. Москва, ул. Бакинская, д.26, стр.8",
      "building": "Склад",
      "year": "1983",
      "usage": "используется",
      "space": "90",
      "floors": "1 этажное"
    },
    {
      "ao": "МО",
      "name": "ГБУЗ \"ПКБ №5 ДЗМ\"",
      "address": "МО, Чеховский р-н, с. Троицкое, д.5",
      "building": "Склад масел",
      "year": "1972",
      "usage": "не используется",
      "space": "20.1",
      "floors": "1"
    },
    {
      "ao": "МО",
      "name": "ГБУЗ \"ПКБ №5 ДЗМ\"",
      "address": "МО, Чеховский р-н, с. Троицкое, д.5",
      "building": "Здание склада хранения материальных ценностей",
      "year": "1956",
      "usage": "Используется частично",
      "space": "589",
      "floors": "1"
    },
    {
      "ao": "МО",
      "name": "ГБУЗ \"ПКБ №5 ДЗМ\"",
      "address": "МО, Чеховский р-н, с. Троицкое, д.5",
      "building": "Здание оборотного водоснабжения (автомойка)",
      "year": "2003",
      "usage": "не используется",
      "space": "17.9",
      "floors": "1"
    },
    {
      "ao": "МО",
      "name": "ГБУЗ \"ПКБ №5 ДЗМ\"",
      "address": "МО, Чеховский р-н, с. Троицкое, д.5",
      "building": "Хлораторная",
      "year": "1984",
      "usage": "не используется",
      "space": "93.2",
      "floors": "2"
    },
    {
      "ao": "СЗАО",
      "name": "ГБУЗ \"ИКБ № 1 ДЗМ\"",
      "address": "г. Москва, Волоколамское шоссе, д. 63, корп. 2",
      "building": "Лечебный корпус",
      "year": "1962",
      "usage": "используется",
      "space": "6615.1",
      "floors": "3 этажа + (подвал и техэтаж)"
    },
    {
      "ao": "СЗАО",
      "name": "ГБУЗ \"ИКБ № 1 ДЗМ\"",
      "address": "г. Москва, Волоколамское шоссе, д. 63, корп. 3",
      "building": "Лечебный корпус",
      "year": "1962",
      "usage": "используется",
      "space": "6555.8",
      "floors": "3 этажа + (подвал и техэтаж)"
    },
    {
      "ao": "СЗАО",
      "name": "ГБУЗ \"ИКБ № 1 ДЗМ\"",
      "address": "г. Москва, Волоколамское шоссе, д. 63, корп. 6",
      "building": "Пищеблок",
      "year": "1961",
      "usage": "используется",
      "space": "1238.2",
      "floors": "1 этажа + (подвал и техэтаж)"
    },
    {
      "ao": "СЗАО",
      "name": "ГБУЗ \"ИКБ № 1 ДЗМ\"",
      "address": "г. Москва, Волоколамское шоссе, д. 63, корп. 11",
      "building": "Оранжерея",
      "year": "1962",
      "usage": "не используется",
      "space": "361",
      "floors": "1 этаж"
    },
    {
      "ao": "СЗАО",
      "name": "ГБУЗ \"ИКБ № 1 ДЗМ\"",
      "address": "г. Москва, Волоколамское шоссе, д. 63, корп. 12",
      "building": "Рентгенпленки",
      "year": "1961",
      "usage": "не используется",
      "space": "31",
      "floors": "1 этаж"
    }
  ]
const tableRows = [];
const PMs = [];
let curActiveRow;

const parser = new DOMParser();


ymaps.ready(init);
function init() {
    const table = document.querySelector('.table');
    data.forEach((bg, i) => {
        const row = document.createElement('div');
        row.innerHTML = `${i + 1}. ${bg.name}<br/>${bg.address}`;
        row.classList.add('table-row');
        row.onclick = (e) => {
            if (curActiveRow) curActiveRow.style.background = 'none';
            curActiveRow = e.currentTarget;
            curActiveRow.style.background = 'LightSkyBlue';
            const curGeo = PMs[i];
            this.yMap.panTo(curGeo.geometry.getCoordinates());
            curGeo.balloon.open();
        };
        table.appendChild(row);
        tableRows.push(row);
    })

    const center = [55.75399400, 37.62209300];

    this.yMap = new ymaps.Map('map', {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        center,
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7,
        // Элементы управления
        controls: ['zoomControl']
    });

    data.forEach(async (bg, i) => {
        const qResult = await fetch('res/' + (i + 1));
        const text = await qResult.text();
        const picEls = Array.from(parser.parseFromString(text, "text/html").querySelectorAll('.icon-jpg, .icon-jpeg, .icon-JPG'));
        let picsHtmlString = ''; 
        picEls.forEach((el, i) => {
            const ref = el.attributes.href.value;
            picsHtmlString += `<a href="${ref}" data-lightbox="${ref}"><img src="${ref}" width="50px"/></a>`; 
        }); 
        


        const curGO = await ymaps.geocode(bg.address, { results: 1 });
        const curPM = new ymaps.Placemark(curGO.geoObjects.get(0).geometry, {
            hintContent: `${i + 1}. ${bg.name}`,
            balloonContent: `
            <div>AO: ${bg.ao}<br/>Наименование ЛПУ: ${bg.name}<br/>${bg.address}<br/>Наименование строения: ${bg.building}<br/>Год постройки: ${bg.year}<br/>${bg.usage}<br/>Площадь здания: ${bg.space} кв.м.<br/>Этажность: ${bg.floors}</div>
            ${picsHtmlString}`
        });
        curPM.events.add('click', () => {
            if (curActiveRow) curActiveRow.style.background = 'none';
            curActiveRow = tableRows[i];
            curActiveRow.style.background = 'LightSkyBlue';
            // curActiveRow.parentNode.scrollTop = curActiveRow.offsetTop;
            curActiveRow.scrollIntoView();
        });
        PMs[i] = curPM;
        this.yMap.geoObjects.add(curPM);
    });
}