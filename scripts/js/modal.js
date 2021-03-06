"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const gallery = Array.from(document.querySelectorAll(".gallery__btn"));
  const modalContainer = document.querySelector("#modal");
  const header = document.querySelector(".header");
  const main = document.querySelector("main");

  const modalDataBase = [
    {
      dataid: "slide#1",
      xs: "pictures/modal/rectangle-137-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-137-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-137-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-137-x4-min_optimized.jpg",
      description:
        "Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.   При первом взгляде, сразу на всё полотно, видишь собравшихся женщин и мужчин на пологом невзрачном берегу моря. Меня эта картина привлекла своеобразным изображением её персонажей. Я сразу же отметил странность художника в неравноценном изображении на холсте  женщин и мужчин. На этом полотне мужчины изображены несколько грубовато, ",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#2",
      xs: "pictures/modal/rectangle-138-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-138-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-138-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-138-x4-min_optimized.jpg",
      description:
        "Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.   При первом взгляде, сразу на всё полотно, видишь собравшихся женщин и мужчин на пологом невзрачном берегу моря. Меня эта картина привлекла своеобразным изображением её персонажей. Я сразу же отметил странность художника в неравноценном изображении на холсте  женщин и мужчин. На этом полотне мужчины изображены несколько ",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#3",
      xs: "pictures/modal/rectangle-139-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-139-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-139-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-139-x4-min_optimized.jpg",
      description:
        "Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.   При первом взгляде, сразу на всё полотно, видишь собравшихся женщин и мужчин на пологом невзрачном берегу моря. Меня эта картина привлекла своеобразным изображением её персонажей. Я сразу же отметил странность художника в неравноценном изображении на холсте  женщин и мужчин. На этом полотне мужчин",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#4",
      xs: "pictures/modal/rectangle-140-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-140-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-140-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-140-x4-min_optimized.jpg",
      description:
        "Постепенно вглядываясь в этот шедевр, поневоле останавливаю свой взгляд на танцующей паре в центре холста. Эта пара  доминирует. Женщина в очень длинном красном платье, оно ниспадает на траву.Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.   При первом взгляде, сразу на всё полотно, видишь собравшихся женщин и мужчин на пологом невзрачном берегу моря. ",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#5",
      xs: "pictures/modal/rectangle-141-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-141-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-141-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-141-x4-min_optimized.jpg",
      description:
        " Её мужчина, в чёрном костюме, самый молодой из всех кавалеров. Лицо женщины торжественное без всяких эмоций. Оно обращено в сторону партнёра. Картина написана в 1899-1900 годах и находится в национальной галерее горм полотне мужчины изображены несколько грубовато, а вот  женщины, напротив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#6",
      xs: "pictures/modal/rectangle-142-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-142-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-142-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-142-x4-min_optimized.jpg",
      description:
        "Лицо мужчины словно маска: без всякого выражения. Едва улавливаются его черты лица. И он, и она находятся в каком то затаённом напряжении. Картина написана в 1899-1900 годах и находится в национальной галерее города Осло. жчины изображены несколько грубовато, а вот  женщины, напротив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#7",
      xs: "pictures/modal/rectangle-143-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-143-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-143-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-143-x4-min_optimized.jpg",
      description:
        "На мрачном фиолетово-сером фоне моря, на тёмно-зелёном берегу, мы видим и другие танцующие пары. Они пришли сюда на эту полоску суши, чтобы встретить свою любовь. Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.   При первом взгляде, сразу на всё полотно, видишь собравшихся женщин и мужчин на пологом невзрачном берегу моря. Меня эта картина привлекла своеобразным и. На этом полотне мужчины изображены несколько грубовато, а вот  женщины, напротив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#8",
      xs: "pictures/modal/rectangle-144-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-144-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-144-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-144-x4-min_optimized.jpg",
      description:
        "Она одинока,  худощава и стройна, остановилась, скрестила пальцы вытянутых рук на своём платье. Его чёрный цвет лишь подчёркивает её состояние души. Она уже рассталась со своим прошлым, но отнюдь - не до конца. Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.   При первом взгляде, сразу на всё полотно, видишь собравшихся женщин и мужчин на пологом невзрачном боценном изображении на холсте  женщин и мужчин. На этом полотне мужчины изображены несколько грубовато, а вот  женщины, напротив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#9",
      xs: "pictures/modal/rectangle-145-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-145-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-145-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-145-x4-min_optimized.jpg",
      description:
        "Оно её ещё тяготит. Только вот локоны непослушных светлых волос никак не гармонируют с её настроением. Женщина в красном стоит к ней спиной. Её левая рука в руке партнёра, правую она положила ему на плечо. Картина написана в 1899-1900 ноценном изображении на холсте  женщин и мужчин. На этом полотне мужчины изображены несколько грубовато, а вот  женщины, напротив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#10",
      xs: "pictures/modal/rectangle-146-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-146-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-146-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-146-x4-min_optimized.jpg",
      description:
        "Вообще, хочется заострить внимание на руках персонажей этой картины: они выглядят как-то своеобразно просто, а пальцы рук, как бы размыты. Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.   При первом взгляде, сразу на всё полотно, видишь собравшихся женщин и мужчин на пологом невзрачном берегу моря. Меня эта картина привлекла своеобразным изображением её персины изображены несколько грубовато, а вот  женщины, напротив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#11",
      xs: "pictures/modal/rectangle-147-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-147-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-147-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-147-x4-min_optimized.jpg",
      description:
        "Слева от  танцующих пар фигура молодой женщины в белом платье в жёлтых колечках и с жёлтым поясом. Волосы у неё, пожалуй, самые солнечные и пышные среди всех здесь собравшихся. Её черты лица хорошо видны, но взгляд обращён, как бы в самоё себя. Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.   При первом взгляде, сразу на всё полотно, видишь собравшихся жеотив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#12",
      xs: "pictures/modal/rectangle-148-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-148-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-148-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-148-x4-min_optimized.jpg",
      description:
        "Она не смотрит ни на кого, хотя и стоит сейчас рядом с  танцующими парами. Может девушка  здесь впервые, но заметно, что она готова любить. Единственные захудалые ростки с маленькими неприметными цветочками тут же рядом с ней на переднем плане. Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.   При первом взгляде, сразу на всё полотно, видишь собравшихся жотив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#13",
      xs: "pictures/modal/rectangle-149-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-149-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-149-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-149-x4-min_optimized.jpg",
      description:
        "Но она их тоже не замечает. Казалось бы, зачем их надо было рисовать? Так нет, художник их не пропустил почему-то? А может всё, что видел, то и показал нам? Картина написана в 1899-1900 годах и находится в национальной галерееужчин. На этом полотне мужчины изображены несколько грубовато, а вот  женщины, напротив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#14",
      xs: "pictures/modal/rectangle-150-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-150-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-150-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-150-x4-min_optimized.jpg",
      description:
        "Но она их тоже не замечает. Казалось бы, зачем их надо было рисовать? Так нет, художник их не пропустил почему-то? А может всё, что видел, то и показал нам? Картина написана в 1899-1900 годах и находится в национальной гале мужчин. На этом полотне мужчины изображены несколько грубовато, а вот  женщины, напротив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#15",
      xs: "pictures/modal/rectangle-151-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-151-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-151-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-151-x4-min_optimized.jpg",
      description:
        "Они пришли сюда по зову своей души. Они хотят любить, они готовы к этой любви. Здесь на холсте они красивы и стройны. Может только у светло-русого танцора партнёрша выглядит немного тяжеловатой. Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.   При первом взгляде, сразу на всё полотно, видишь собравшихся женщин и мужчин на пологом невзрачном  неравноценном изображении на холсте  женщин и мужчин. На этом полотне мужчины изображены несколько грубовато, а вот  женщины, напротив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#16",
      xs: "pictures/modal/rectangle-152-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-152-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-152-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-152-x4-min_optimized.jpg",
      description:
        "Да и то может оттого, что он её так поджал под себя, так перегнул, ч, а вот  женщины, напротив,  более детально. Я сразу же отметил странность художника в неравноценном изображении на холсте  женщин и мужчин. На этом полотне мужчины изображены несколько грубовато, а вот  женщины, напротив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#17",
      xs: "pictures/modal/rectangle-153-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-153-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-153-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-153-x4-min_optimized.jpg",
      description:
        "Все мужчины у Мунка изображены в чёрных костюмах и этакими уродцами.  Ммот», третий – светловолосый, сгорбился над своей женщиной, подмял её и при этом довольный чем-то растянул свои красные губы в неестественной улыбке, выставил свои поросячьи ноздри наверх, выкатил глаза и танцует, никого и ничего не замечая вокруг. ",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#18",
      xs: "pictures/modal/rectangle-154-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-154-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-154-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-154-x4-min_optimized.jpg",
      description:
        "Из трёх женщин на переднем плане, только одна имеет партнёра. Две друотив,  более детально. Я сразу же отметил странность художника в неравноценном изображении на холсте  женщин и мужчин. На этом полотне мужчины изображены несколько грубовато, а вот  женщины, напротив,  более детально.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#19",
      xs: "pictures/modal/rectangle-155-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-155-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-155-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-155-x4-min_optimized.jpg",
      description:
        "На картине художник робкими красками показал нам северное небо: оно сероглади. Из трёх женщин на переднем плане, только одна имеет партнёра. Две другие в ожидании встречи своей половины. В красном платье - любит, в белом с колечками готова к любви, а в чёрном - когда-то любила, но готова попытаться повторить всё заново. Мужчин, как всегда, мало, их не хватает... Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#20",
      xs: "pictures/modal/rectangle-156-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-156-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-156-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-156-x4-min_optimized.jpg",
      description:
        "В некоторых рецензиях отмечается, что это луна, но я живу на этой же широражён на морской поверхности. Из трёх женщин на переднем плане, только одна имеет партнёра. Две другие в ожидании встречи своей половины. В красном платье - любит, в белом с колечками готова к любви, а в чёрном - когда-то любила, но готова попытаться повторить всё заново. Мужчин, как всегда, мало, их не хватает... Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#21",
      xs: "pictures/modal/rectangle-157-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-157-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-157-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-157-x4-min_optimized.jpg",
      description:
        "В некоторых рецензиях отмечается, что это луна, но я живу на этой же широлюбит, в белом с колечками готова к любви, а в чёрном - когда-то любила, но готова попытаться повторить всё заново. Мужчин, как всегда, мало, их не хватает... Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#22",
      xs: "pictures/modal/rectangle-158-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-158-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-158-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-158-x4-min_optimized.jpg",
      description:
        "В некоторых рецензиях отмечается, что это луна, но я живу на этой же широте, где находятся Осло, Берген, Таллинн и Санкт- Петербург. В летнее время  луна  в этих местах находится гораздо выше. Этот свет как-то неестественно и нелепо изоблюбит, в белом с колечками готова к любви, а в чёрном - когда-то любила, но готова попытаться повторить всё заново. Мужчин, как всегда, мало, их не хватает... Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#23",
      xs: "pictures/modal/rectangle-159-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-159-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-159-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-159-x4-min_optimized.jpg",
      description:
        "В некоторых рецензиях отмечается, что это луна, но я живу на этой же широте, где находятся Осло, Берген, Таллинн и Санкт- Петербург. В летнее время  луна  в этих местах находится гораздо выше. Этот свет как-то неестественно и нелепо изоблюбит, в белом с колечками готова к любви, а в чёрном - когда-то любила, но готова попытаться повторить всё заново. Мужчин, как всегда, мало, их не хватает... Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#24",
      xs: "pictures/modal/rectangle-160-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-160-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-160-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-160-x4-min_optimized.jpg",
      description:
        "В некоторых рецензиях отмечается, что это луна, но я живу на этой же широте, где находятся Осло, Берген, Таллинн и Санкт- Петербург. В летнее время  луна  в этих местах находится гораздо выше. Этот свет как-то неестественно и нелепо изолюбит, в белом с колечками готова к любви, а в чёрном - когда-то любила, но готова попытаться повторить всё заново. Мужчин, как всегда, мало, их не хватает... Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#25",
      xs: "pictures/modal/rectangle-161-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-161-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-161-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-161-x4-min_optimized.jpg",
      description:
        "В некоторых рецензиях отмечается, что это луна, но я живу на этой же широте, где находятся Осло, Берген, Таллинн и Санкт- Петербург. В летнее время  луна  в этих местах находится гораздо выше. Этот свет как-то неестественно и нелепо изолюбит, в белом с колечками готова к любви, а в чёрном - когда-то любила, но готова попытаться повторить всё заново. Мужчин, как всегда, мало, их не хватает... Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#26",
      xs: "pictures/modal/rectangle-162-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-162-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-162-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-162-x4-min_optimized.jpg",
      description:
        "В некоторых рецензиях отмечается, что это луна, но я живу на этой же широте, где находятся Осло, Берген, Таллинн и Санкт- Петербург. В летнее время  луна  в этих местах находится гораздо выше. Этот свет как-то неестественно и нелепо изоюбит, в белом с колечками готова к любви, а в чёрном - когда-то любила, но готова попытаться повторить всё заново. Мужчин, как всегда, мало, их не хватает... Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#27",
      xs: "pictures/modal/rectangle-69-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-69-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-69-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-69-x4-min_optimized.jpg",
      description:
        "В некоторых рецензиях отмечается, что это луна, но я живу на этой же широлюбит, в белом с колечками готова к любви, а в чёрном - когда-то любила, но готова попытаться повторить всё заново. Мужчин, как всегда, мало, их не хватает... Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#28",
      xs: "pictures/modal/rectangle-70-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-70-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-70-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-70-x4-min_optimized.jpg",
      description:
        "В некоторых рецензиях отмечается, что это луна, но я живу на этой же широтюбит, в белом с колечками готова к любви, а в чёрном - когда-то любила, но готова попытаться повторить всё заново. Мужчин, как всегда, мало, их не хватает... Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#29",
      xs: "pictures/modal/rectangle-72-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-72-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-72-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-72-x4-min_optimized.jpg",
      description:
        "В некоторых рецензиях отмечается, что это луна, но я живу на этой же широтебит, в белом с колечками готова к любви, а в чёрном - когда-то любила, но готова попытаться повторить всё заново. Мужчин, как всегда, мало, их не хватает... Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
    {
      dataid: "slide#30",
      xs: "pictures/modal/rectangle-73-x1-min_optimized.jpg",
      m: "pictures/modal/rectangle-73-x2-min_optimized.jpg",
      l: "pictures/modal/rectangle-73-x3-min_optimized.jpg",
      xl: "pictures/modal/rectangle-73-x4-min_optimized.jpg",
      description:
        "В некоторых рецензиях отмечается, что это луна, но я живу на этой же широте, г в белом с колечками готова к любви, а в чёрном - когда-то любила, но готова попытаться повторить всё заново. Мужчин, как всегда, мало, их не хватает... Картина написана в 1899-1900 годах и находится в национальной галерее города Осло.",
      alt: "Картина",
      author: "Казимир Малевич",
      heading: "Женщина с граблями",
      year: "1931-1932",
    },
  ];

  gallery.forEach((item) =>
    item.addEventListener("click", (ev) => {
      ev.preventDefault();
      const dataOfModal = modalDataBase.find(
        (item) => item.dataid === ev.currentTarget.dataset.number
      );
      createModal(
        dataOfModal.xs,
        dataOfModal.m,
        dataOfModal.l,
        dataOfModal.xl,
        dataOfModal.description,
        dataOfModal.alt,
        dataOfModal.author,
        dataOfModal.heading,
        dataOfModal.year,
        modalContainer
      );
      document.body.classList.add("overflow");
      header.inert = true;
      main.inert = true;

      modalClose();
    })
  );

  function createModal(xs, m, l, xl, description, alt, author, heading, year, container) {
    const modalContainer = document.createElement("div")
    modalContainer.className = "modal__container"

    const modalWrap = document.createElement("article");
    modalWrap.className = "modal__wrap";

    const modalPictureWrap = document.createElement("div");
    modalPictureWrap.className = "modal__picture__wrap";

    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("type", "button");
    closeBtn.setAttribute("aria-label", "скрыть окно");
    closeBtn.setAttribute("autofocus", true);
    closeBtn.classList.add("modal__close-btn", "header-nav__link_style");

    const picture = document.createElement("picture");
    picture.className = "modal__img";
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
    img.setAttribute("src", xs);
    img.setAttribute("alt", alt);
    picture.append(source1920, source1024, source768, img);

    modalPictureWrap.append(closeBtn, picture);

    const modalContent = document.createElement("div");
    modalContent.className = "modal__content";

    const modalAuthor = document.createElement("p");
    modalAuthor.className = "modal__author";
    modalAuthor.innerText = author;

    const modalHeading = document.createElement("h2");
    modalHeading.className = "modal__heading";
    modalHeading.innerText = heading;

    const modalYear = document.createElement("span");
    modalYear.className = "modal__year";
    modalYear.innerText = year;

    const modalDesk = document.createElement("p");
    modalDesk.className = "modal_desc";
    modalDesk.innerText = description;

    modalContent.append(modalAuthor, modalHeading, modalYear, modalDesk)

    modalWrap.append(modalPictureWrap, modalContent);
    modalContainer.append(modalWrap)

    container.append(modalContainer);
  }

  function modalClose() {
    const closeBtn = document.querySelector(".modal__close-btn");
    const modal = document.querySelector(".modal__container");

    document.addEventListener("keydown", hideOnEsc);
    document.addEventListener("click", handleClick)

    function modalHide() {
      header.inert = false;
      main.inert = false;
      document.body.classList.remove("overflow");
      modal.remove();
      
      document.removeEventListener("keydown", hideOnEsc);
      document.removeEventListener("click", handleClick);
    }

    function hideOnEsc(ev) {
      if (ev.code == "Escape") {
        modalHide();
      }
    };

    function handleClick(ev) {
      if (ev.target === modal || ev.target === closeBtn) {
        modalHide();
      }
    }
  }
});
