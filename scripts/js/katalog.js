"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const showBtn = document.querySelectorAll(".katalog__group");
  const katalogList = document.querySelectorAll(".katalog__sublist");

  const arrayElements = Array.from(showBtn);

  showBtn.forEach(function (element) {
    element.addEventListener("click", function (ev) {
      ev.currentTarget.classList.toggle("katalog__group_active");
      let key = arrayElements.indexOf(ev.currentTarget);
      let targetList = katalogList[key];

      targetList.classList.toggle("none");
    });
  });

  const katalog = Array.from(document.querySelectorAll(".katalog__link"));
  const article = document.querySelector(".katalog__desc");

  const katalogDataBase = [
    {
      dataId: "BenedettoDiBindo",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Бенедетто ди Биндо",
      name: "Бенедетто ди Биндо",
      meta: " ок. 1380—85 — 19 сентября 1417",
      description:
        "Бенедетто ди Биндо (итал. Benedetto di Bindo; ок. 1380—85, Кастильоне ди Вальдорча, близ Сиены — 19 сентября 1417, Перуджа) — итальянский художник сиенской школы. Бенедетто ди Биндо остался в истории искусства как сиенский художник, так сказать, «второго ряда», несмотря на то, что за свою короткую жизнь он выполнил ряд весьма престижных заказов, включая работы в Сиенском соборе (работы в главном соборе республики второстепенным художникам не поручались). Обучение он прошёл у Таддео ди Бартоло, крупного сиенского мастера поздней готики, в боттеге которого Бенедетто трудился вместе с Грегорио ди Чекко. Наибольшее влияние на его творчество оказали работы Симоне Мартини, в частности в выборе колорита, а тонко проработанные лица его персонажей напоминают произведения Джованни да Милано.",
    },
    {
      dataId: "AmbrogioBergognone",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Бергоньоне, Амброджо",
      name: "Бергоньоне, Амброджо",
      meta: "1453 — 1523",
      description:
        "Прозвище говорит о его тяготении к бургундской школе, по манере ему близок Винченцо Фоппа. Испытал влияние Леонардо да Винчи. Наиболее известен работами 1486—1494 в монастырской обители картезианцев Чертоза ди Павия. Позднее работал в Милане в базилике Сант-Эусторджо и церкви Сан-Сатиро, после 1497 — в Лоди, в 1512 — в Бергамо, незадолго до смерти — снова в Милане, в базилике Сан-Симпличано. Его завещание датировано 4 апреля 1523, в том же году он умер. Одним из его учеников считают Бернардино Луини.",
    },
    {
      dataId: "FrancescoBissolo",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Биссоло, Франческо",
      name: "Биссоло, Франческо",
      meta: "1470 или 1472 — 20 апреля 1554",
      description:
        "Сын художника. Ученик Джованни Беллини. С 1490 переехал в мастерскую Беллини. С 1492 по 1530 год работал в Венеции. Помогал учителю в работе над украшением Большого зала Совета Дворца дожей (Венеция). Принимал участие в создании украшений Церкви Иль Реденторе в Венеции. Художник эпохи Возрождения. В своём творчестве подражал Джорджоне. Работы художника хранятся ныне во многих музеях мира. В санкт-петербургском Эрмитаже находится его картина «Богоматерь с Младенцем Христом». В Британской Национальной галерее — «Мадонна с Младенцем со святыми и донатором». Ряд его полотен находится в музеях Варшавы, Лос-Анджелеса (Музей Нортона Саймона и Los Angeles County Museum of Art), Дэйтоновском институте искусств (штат Огайо, США) и др.",
    },
    {
      dataId: "GiovanniAntonioBoltraffio",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Больтраффио, Джованни",
      name: "Больтраффио, Джованни",
      meta: "1466 или 1467, Милан — 1516",
      description:
        "Вазари сообщает, что художник происходил из аристократической семьи. Воспитанный в традициях Фоппы, Бернардо Дзенале и Амброджо Бергоньоне, он прошёл обучение в мастерской Леонардо. Его первое произведение «Воскресение Христа, святой Леонард и святая Лючия» выполнено в 1491 году совместно с Марко д'Оджоно для миланской церкви Сан-Джованни-сул-Муро. Был придворным художником Лодовико Моро и славился своими психологическими портретами. Больтраффио умер в возрасте 49 лет и был похоронен на кладбище церкви Св. Паулы в Комито. Некорые искусствоведы предполагают, что фигура младенца на картине Леонардо да Винчи «Мадонна Литта» принадлежит кисти Джованни Антонио Больтраффио. Известны подготовительные рисунки Джованни Антонио Больтраффио, в точности воспроизводящие эту фигуру.",
    },
    {
      dataId: "FrancescoBonsignori",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Бонсиньори, Франческо",
      name: "Бонсиньори, Франческо",
      meta:
        "ок. 1460, Верона, Венецианская республика — 2 июля 1519, Кальдьеро",
      description:
        "Родился около 1460 года в Вероне в семье художника Альберто Бонсиньори. Обучался живописи в мастерской Франческо Бенальо. В 1480 году переехал из Вероны в Венецию, где жил до 1487 года. В ранний период творчества находился под влиянием венецианской живописной школы. Особенное впечатление на Бонсиньори оказало творчество Антонелло да Мессины, Джованни Беллини, Чима да Конельяно и Альвизе Виварини. Среди известных творений этого периода самыми ранними произведениями художника являются полотна «Мадонна со спящим младенцем» 1483 года и «Алтарь Даль Бово», или «Мадонна на троне с предстоящими святыми и донатором Альтабеллой Авогадро» 1484 года, которые ныне входят в собрание Общественного музея Вероны. ",
    },
    {
      dataId: "Bartolommeo",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Брамантино",
      name: "Брамантино",
      meta: "Милан или Бергамо, ок. 1465—1530",
      description:
        "Бартоломео Суарди родился около 1465 года в Милане[1] (по другой версии — в Бергамо[2]). В Милане, где «царил» Леонардо, Брамантино создал яркий, острый стиль, хотя и страдавший иногда недостатками в передаче перспективы и неточностью изображения архитектурных элементов. Брамантино сформировался под влиянием Бутиноне и графического стиля Падуи и Феррары. Впоследствии он многому научился у Браманте, у которого долгое время состоял помощником (чем и объясняется его прозвище Брамантино — букв. «Маленький Браманте»[3]) и у которого перенял любовь к монументальным формам и драматизму. Некоторые искусствоведы полагают, что Браманте поручал Брамантино, как живописцу, осуществление своих замыслов[3].",
    },
    {
      dataId: "RaffaelloBotticini",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Боттичини, Рафаэлло",
      name: "Боттичини, Рафаэлло",
      meta: "11 сентября 1477, Флоренция — известен до 1520 года",
      description:
        "Рафаэлло принадлежал к флорентийской артистической династии — его дед, Джованни ди Доменико, был известен как художник, расписывавший игральные карты (хотя учёные не исключают, что он мог заниматься и более серьёзной живописью); его отец — Франческо ди Джованни, был известным флорентийским мастером. Первые художественные навыки Рафаэлло получил в мастерской отца; с этой мастерской связан и ранний период его творчества. В 1490-е годы, когда формировался художественный вкус Рафаэлло, мастерская его отца занималась в основном исполнением заказов в провинциальных городках в окрестностях Флоренции. В 1498 году Франческо Боттичини скончался, Рафаэлло унаследовал мастерскую и продолжил работать в провинции. По мнению исследователей его творчества, это был художник скромного дарования, никогда не стремившийся завоевать высоких позиций в интеллектуальном и финансовом центре Тосканы — Флоренции, и довольствовавшийся заказами, которые ему давали провинциальные храмы. Его искусство было эклектичным, и наряду с влиянием отца включало связь с искусством Перуджино, Ридольфо Гирландайо, Лоренцо ди Креди, Фра Бартоломео и др.",
    },
    {
      dataId: "LouisBrea",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Бреа, Людовико",
      name: "Бреа, Людовико",
      meta: "прибл. 1450, Ницца, Генуэзская республика — прибл. 1522/1525",
      description:
        "Бреа родился в происходившей из Монтальто-Лигуре семье бондарей в Ницце, являвшейся в то время частью Генуэзской республики. Бреа был в основном клерикальным художником, и наиболее значительные его работы представляют собой алтарные картины. Первая значимая работа художника представляет собой роспись францисканского монастыря в Симье (современная Ницца). Прочие работы художника сосредоточены прибрежных поселениях между Монако и Ментоной, между Таджей и Империей и между Савоной и Генуей.",
    },
    {
      dataId: "BiagioTucci",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Бьяджо д’Антонио Туччи",
      name: "Бьяджо д’Антонио Туччи",
      meta: "1446, Флоренция — 1 июня 1516, там же",
      description:
        "Родился во Флоренции. Последнюю четверть XV века работал в Фаэнце, но в его стиле мало элементов флорентийского стиля — прослеживается влияние ранней нидерландскрй живописи. Сотрудничал с другими художниками над фресками Сикстинской капеллы: вместе с Козимо Росселли — Тайная вечеря. вероятный автор (соавтор) фрески Переход через Красное море. Также рисовал панели для сундуков кассоне.",
    },
    {
      dataId: "LorenzoPietro",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Веккьетта",
      name: "Веккьетта",
      meta: "ок. 1410, Сиена — 6 июня 1480, Сиена",
      description:
        "О Веккьетте сообщает в своих «Жизнеописаниях» Джорджо Вазари и описывает его как человека мрачного и нелюдимого, вечно погружённого в раздумья, и потому прожившего недолго. Позднейшие исследователи пытались имя этого художника увязать с какими-либо архивными данными. Сейчас общепризнанной считается версия, что описанный Вазари Веккьетта — это Лоренцо ди Пьетро ди Джованни, который был крещён в Сиене в 1410 году. Имя этого человека появляется в документах в 1428 году среди членов гильдии художников Сиены.",
    },
    {
      dataId: "AndreaVerrocchio",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Андреа Верроккьо",
      name: "Андреа Верроккьо",
      meta:
        " 1435, Флоренция, Флорентийская республика — 10 октября 1488, Венеция,",
      description:
        "Андреа дель Верроккьо родился и работал во Флоренции. Своё имя (del Verrocchio — «от Верроккьо»), он получил от своего учителя, ювелира Верроккьо. Специализировался на скульптуре, но также обращался и к живописи. В эпоху Раннего Возрождения художники работали почти исключительно по заказам, поэтому в то время была велика роль меценатов. Эта практика особенно распространилась во Флоренции XV века, где художественные мастерские осуществляли любые заказы покровителей — от росписи посуды до архитектурных проектов. Верроккьо считался непревзойденным декоратором и режиссёром придворных празднеств. В 1465 году он создал надгробие Козимо Медичи (1389—1464). В 1467—1483 годах работал над скульптурной композицией «Уверение Фомы (Верроккьо)» для церкви Орсанмикеле. ",
    },
    {
      dataId: "DomenicoGhirlandaio",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Доменико Гирландайо",
      name: "Доменико Гирландайо",
      meta: "2 июня 1448 — 11 января 1494.",
      description:
        "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
    },
    {
      dataId: "BenozzoGozzoli",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Беноццо Гоццоли",
      name: "Беноццо Гоццоли",
      meta: "1420. Флоренция — 1497, Пистоя",
      description:
        "Беноццо Гоццоли родился в 1420 году во Флоренции, в семье портного. Настоящее имя художника — Беноццо ди Лезе ди Сандро (фамилия Гоццоли впервые появляется лишь во втором издании «Жизнеописаний» Вазари)[1]. Период становления Гоццоли как художника пришёлся на годы, в которые флорентийское искусство переживало настоящий расцвет. В 1430—1440 годы во Флоренции работали Фра Беато Анджелико, Филиппо Липпи, Паоло Учелло, Доменико Венециано, Пьеро делла Франческа[2]. Согласно Джорджо Вазари, учителем Гоццоли был Фра Анджелико, однако многие историки искусства оспаривают этот факт[3]. Несомненно, однако, что в 1439—1440 и в 1443—1444 годы Гоццоли работал совместно с Фра Анжелико над фресками монастыря Сан-Марко[3]. ",
    },
    {
      dataId: "FrancescoGranacci",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Граначчи, Франческо",
      name: "Граначчи, Франческо",
      meta: "Граначчи, Франческо",
      description:
        "Франческо Граначчи учился в мастерской Доменико Гирландайо и помогал ему в написании его картин, используя вместо темперы масляные краски. По заказу Лоренцо Медичи Граначчи участвовал в росписи флорентийского Сан-Марко. Позднее он работал с Леонардо да Винчи, Микеланджело и Рафаэлем. В 1508 году Граначчи переехал в Рим, где вместе с другими художниками помогал Микеланджело в росписи Сикстинской капеллы. На стиль Граначчи оказали влияние Филиппино Липпи и Фра Бартоломео.  Граначчи упоминается в «Жизнеописаниях художников» Джорджо Вазари. Также упоминается в романе о Микеланджело Ирвинга Стоуна «Муки и радости».",
    },
    {
      dataId: "GregorioCecco",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Грегорио ди Чекко",
      name: "Грегорио ди Чекко",
      meta: "известен с 1418 г. по 1424 г.",
      description:
        "О Грегорио очень мало сведений. Известно, что он был приёмным сыном и учеником Таддео ди Бартоло, работал в его мастерской, а единственным достоверным произведением является алтарь, написанный им в 1423 году для капеллы Франческо Толомеи в сиенском соборе, на котором стоит его подпись. В начале XX века его путали с упоминаемым в документах Джорджо ди Кеко ди Лука (Giorgio di Checo di Lucha), поскольку Миланези в 1853 году неправильно транскрибировал имя Грегорио. Впервые его имя упоминается в 1418 году, когда художник получил 4 лиры за роспись таволетта — книжной обложки для отчётов Биккерны, финансового ведомства Сиены (обложка не сохранилась). В 1420 году совместно с Таддео ди Бартоло, он работал над алтарем для капеллы Марескотти в сиенской церкви Сан Агостино. На алтаре стояла его подпись, однако сама произведение до нашего времени не дошло. Известно, что этот алтарь состоял из статуи Мадонны дель Магнификат, созданной скульптором Джованни ди Турино (сохранилась), и картин, написанных Грегорио ди Чекко. В том же 1420 году Грегорио написал фреску в церкви деи Серви кон ле Аниме и «Мадонну с младенцем» для алтаря в церкви Санта Кьяра. ",
    },
    {
      dataId: "GiovanniUdine",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Джованни да Удине",
      name: "Джованни да Удине",
      meta: "1487, Удине — 1561, Рим",
      description:
        "Учился сначала у Джованни Мартино (итал. Pellegrino da San Daniele) в Удине, затем переехал в Венецию, где стал учеником Джорджоне. В 1514 году переехал в Рим, где поступил в мастерскую Рафаэля и считался одним из наиболее талантливых его учеников. Джорджо Вазари отмечал его стремление к гротеску и большую любовь к изображению природы — как растений и животных, так и неодушевлённых предметов. После смерти Рафаэля работал на кардинала Джулио Медичи (будущего папу Климента VII) по украшению Вилла Мадама, завершив работу к 1525 году; находился в конфликте с Джулио Романо.",
    },
    {
      dataId: "GiovanniPaolo",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Джованни ди Паоло",
      name: "Джованни ди Паоло",
      meta: "ок. 1403—1482, Сиена",
      description:
        "Сведений о жизни художника сохранилось крайне немного. Джованни ди Паоло родился в Сиене около 1403 года. Точная дата рождения неизвестна; первый существующий документ, в котором фигурирует его имя, датирован 1417 годом[3][4]. По всей видимости, учителем Джованни ди Паоло был Таддео ди Бартоло. Свою творческую карьеру ди Паоло начал как художник-миниатюрист[3]. Расцвет его деятельности пришёлся на 1440—1450-е годы: в это время художник создаёт самые известные свои произведения[5]. На протяжении всей своей жизни Джованни ди Паоло не покидал свой родной город и умер в Сиене в 1482 году[5]. ",
    },
    {
      dataId: "Giorgione",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Джорджоне",
      name: "Джорджоне",
      meta: " 1477/1478—1510",
      description:
        "Джорджоне родился в небольшом городке Кастельфранко-Венето недалеко от Венеции. В 1493 перебрался в Венецию и стал учеником Джованни Беллини. В 1497 появилась его первая самостоятельная работа — «Христос, Несущий Крест». Согласно Вазари, в апреле 1500 встречался с Леонардо да Винчи. В 1504 исполнил в родном городе Кастельфранко заказанный ему алтарный образ «Мадонна Кастельфранко», предназначенный для семейной часовни Святого Георгия в местном соборе, чтобы увековечить память Маттео Костанцо. По распоряжению Сената республики в 1507—1508 привлекался к фресковым росписям Немецкого подворья (сохранился фрагмент с изображением женской фигуры), работы были завершены, как об этом свидетельствует официальный документ, 14 декабря 1508. Умер в октябре-ноябре 1510 года от чумы.",
    },
    {
      dataId: "BernardoParentino",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Парентино, Бернардо",
      name: "Парентино, Бернардо",
      meta: "1450—1500",
      description:
        "Родился в городе Паренцо, принадлежащем венецианской республике и находящимся на побережье полуострова Истрия. Там же, вероятнее всего, получил начальное образование[3]. Умер в городе Виченца. Испытал сильное влияние, а возможно и был учеником Андреа Мантеньи. Также художник известен под именами Бернардо Паренцано, Бернардо да Паренцо, Бернардино Парентино. Ошибочно отождествлялся с августинским монахом Лоренцо",
    },
    {
      dataId: "Pesellino",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Пезеллино",
      name: "Пезеллино",
      meta: "род. ок. 1422 г. Флоренция — ум. 1457 г. Флоренция",
      description:
        "Итальянский историк искусства Джорджо Вазари составил небольшую биографию художника, в которой с восторгом отзывается о его творчестве, но, в то же время, перепутал в ней, кажется, всё, что только можно. Франческо ди Стефано родился в семье Стефано ди Франческо и его супруги Нанны, которая была старшей дочерью художника Джулиано д’Арриго по прозвищу Пезелло. В 1427 году, когда мальчику было всего 5 лет, его отец скончался, и ребёнок переселился к своему деду по материнской линии — Джулиано д’Арриго, мастерская которого находились на корсо Адимари во Флоренции (ныне это виа деи Кальцайоли). От деда к Франческо перешло и прозвище «Пезеллино» (то есть «маленький Пезелло»). В двадцатилетнем возрасте Франческо Пезеллино женился на Тарсии, дочери некоего Сильвестера из Роппо, о чём свидетельствует сохранившийся документ, датированный 22 ноября 1442 года.",
    },
    {
      dataId: "PietroPerugino",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Пьетро Перуджино",
      name: "Пьетро Перуджино",
      meta: "1446—1524",
      description:
        "Родился в местечке Читта-делла-Пьеве в 35 км от Перуджи. После обучения у местного живописца в 1470 году приехал во Флоренцию и поступил в мастерскую Андреа Верроккьо. В 1481 году, будучи уже известным мастером, в числе лучших художников Италии приглашён папой Сикстом IV в Рим для участия в работах над декорированием Сикстинской капеллы. Работал во многих городах Италии, но более всего в Перудже, где он был главой большой мастерской. В 1480—1490-х годах Перуджино был одним из самых прославленных художников Италии. Самый же знаменитый из его учеников — Рафаэль Санти. Лучшими произведениями Перуджино считаются созданные до 1500 года. Выделяется фреска «Вручение ключей апостолу Петру», которая отличается стройностью композиции. Одна из самых известных картин — «Оплакивание Христа».",
    },
    {
      dataId: "TommasoPeruzzi",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Перуцци, Бальдассаре",
      name: "Перуцци, Бальдассаре",
      meta: "15 января 1481, Сиена — 6 января 1536, Рим",
      description:
        "Родился в небольшом городке близ Сиены. С 1503 года работал в Риме. Быстро получил признание как архитектор и мастер иллюзорных росписей, создающих эффект продолжения архитектурного пространства. Поэтому Перуцци считают создателем римской школы фасадных росписей, в основном гризайлью, но они не сохранились до нашего времени. Вначале Перуцци работал вместе с Донато Браманте, но затем перешёл к Рафаэлю. Биографы считают автором знаменитого «Письма Рафаэля» папе Льву Х — введения к Археологическому плану античного Рима — именно Перуцци.",
    },
    {
      dataId: "PuccioPisano",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Пизанелло",
      name: "Пизанелло",
      meta: " ок. 1392—1395, Пиза — вероятно, 1455, Рим",
      description:
        "Родился в семье суконщика Пуччо ди Джованни да Черетта. После его смерти вдова Изабета с сыном Антонио переехала в свой родной город — Верону. Первым учителем будущего художника стал Стефано да Верона, позднее его наставником и другом стал Джентиле да Фабриано. С да Фабриано Пизанелло в 1409—1415 годах в Венеции работал над украшением Зала Большого совета во Дворце Дожей (оформление зала погибло при пожаре в 1577 году). После внезапной смерти Джентиле (1427) Пизанелло продолжил начатую им роспись базилики Сан Джованни ин Латерано (не сохранилась). В 1420-х годах работал над фресками в замке Висконти в Павии — этот фресковый цикл погиб во время войны с Францией в 1527 году.",
    },
    {
      dataId: "Pinturicchio",
      xl:
        "pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 1x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 2x, pictures/katalog/artists/xl/image-3-xl@x1_optimized.jpg 3x",
      l:
        "pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 1x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 2x, pictures/katalog/artists/l/image-3-l@x1_optimized.jpg 3x",
      m:
        "pictures/katalog/artists/m/image-3-m@x1_optimized.jpg 1x, pictures/katalog/artists/m/image-3-m@x2_optimized.jpg 2x, pictures/katalog/artists/m/image-3-m@x3_optimized.jpg 3x",
      xs:
        "pictures/katalog/artists/xs/image-3-xs@x2_optimized.jpg 2x, pictures/katalog/artists/xs/image-3-xs@x3_optimized.jpg 3x",
      src: "pictures/katalog/artists/xs/image-3-xs@x1_optimized.jpg",
      alt: "Пинтуриккьо",
      name: "Пинтуриккьо",
      meta: "1481—1482",
      description:
        "Представитель умбрийской школы кватроченто. Учился у Фьоренцо ди Лоренцо, вместе с Рафаэлем — у Перуджино, которому помогал при создании фресок Сикстинской капеллы Ватикана (1481—1482), а по некоторым данным — ещё и у Бенедетто Капорали, создателя дворца кардинала Пассерини, впоследствии расписанного Синьорелли. Вероятно, испытал влияние и Бенедетто Бонфильи, учителя Перуджино. Став зрелым мастером, Пинтуриккьо отказался от некоторых принципов Перуджино — однообразности и степенности фигур, единства времени и места, — что сближает его скорее с Боттичелли[4].",
    },
  ];

  katalog.forEach((item) =>
    item.addEventListener("click", (ev) => {
      ev.preventDefault();
      katalog.forEach((item) => item.classList.remove("active_link"));
      ev.target.classList.add("active_link");
      const dataOfArtikle = katalogDataBase.find(
        (item) => item.dataId === ev.currentTarget.dataset.name
      );
      article.innerHTML = "";
      createArticle(
        dataOfArtikle.xl,
        dataOfArtikle.l,
        dataOfArtikle.m,
        dataOfArtikle.xs,
        dataOfArtikle.src,
        dataOfArtikle.alt,
        dataOfArtikle.name,
        dataOfArtikle.meta,
        dataOfArtikle.description,
        article
      );

      if (window.innerWidth < 1024) {
        article.scrollIntoView({ block: "center", behavior: "smooth" });
      };
    })
  );

  function createArticle(
    xl,
    l,
    m,
    xs,
    src,
    alt,
    name,
    meta,
    description,
    container
  ) {
    const picture = document.createElement("picture");
    {
      /* picture.className = "modal__img"; */
    }
    const source1920 = document.createElement("source");
    source1920.setAttribute("media", "(min-width: 1920px)");
    source1920.setAttribute("srcset", xl);
    const source1024 = document.createElement("source");
    source1024.setAttribute("media", "(min-width: 1024px)");
    source1024.setAttribute("srcset", l);
    const source768 = document.createElement("source");
    source768.setAttribute("media", "(min-width: 768px)");
    source768.setAttribute("srcset", m);
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("srcset", xs);
    img.setAttribute("alt", alt);
    picture.append(source1920, source1024, source768, img);

    const header = document.createElement("h3");
    header.className = "katalog__subtitle";
    header.innerText = name;

    const metaDesc = document.createElement("p");
    metaDesc.className = "katalog__meta";
    metaDesc.innerText = meta;

    const katalogDesc = document.createElement("p");
    katalogDesc.className = "katalog__text";
    katalogDesc.innerText = description;

    container.append(picture, header, metaDesc, katalogDesc);
  }
});
