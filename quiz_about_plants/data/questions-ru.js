const questions = [
    {
        id: 1,
        picture: "images/kamilica.png",
        correctAnswer: "Ромашка",
        explanation: "Ромашка - одно из самых лечебных и ароматных растений, которое находит широкое "+
        "применение при лечении различных заболеваний. Она особенно эффективна при "+
        "воспалениях кожи и слизистых оболочек и оказывает успокоительное действие при "+
        "нервозах и судорогах. В лечебных целях собирают цветочные головки, из которых чаще "+
        "всего готовят чай."
    },
    {
        id: 2,
        picture: "images/kopriva1.png",
        correctAnswer: "Крапива",
        explanation: "Крапива считается одним из самых лечебных растений в нашем регионе. Стебель и "+
        "листья покрыты жгучими волосками полными муравьиной кислоты, при соприкосновении "+
        "с которыми на коже образуются волдыри. Все части растения являются лекарственными, "+
        "особое значение придается ее способности эффективно повышать низкий уровень железа "+
        "в крови."
    },
    {
        id: 3,
        picture: "images/neven.png",
        correctAnswer: "Календула",
        explanation: "Календулу выращивают как декоративное и лекарственное растение. Чаще всего ее "+
        "применяют в виде \«мази из календулы\» для заживления ран и других кожных "+
        "заболеваний, в виде чая - для лечения желудка и кишечника."
    },
    {
        id: 4,
        picture: "images/maslacak (2).png",
        correctAnswer: "Одуванчик",
        explanation: "Одуванчик - травянистое растение с мясистым корнем и удлиненными, неправильно "+
        "надрезанными листьями, собранными в прикорневую розетку. Стебель полый, "+
        "наполненный млечным соком, а наверху - желтая цветочная головка. Все части растения "+
        "являются лекарственными, а листья также используются для приготовления салатов."

    },
    {
        id: 5,
        picture: "images/hmelj.png",
        correctAnswer: "Хмель",
        explanation: "В хмеле содержатся вещества, оказывающие успокоительное и снотворное действие. "+
        "Народный опыт и научные исследования показали, что хмель является отличным "+
        "средством от бессонницы, поэтому в последнее время с целью улучшения сна начали "+
        "производить подушки и матрасы, наполненные соцветиями хмеля."
    },
    {
        id: 6,
        picture: "images/vodopija.png",
        correctAnswer: "Цикорий",
        explanation: "Стебель цикория прямостоячий, угловатый, а корень толстый, веретенообразный. "+
        "Прикорневые листья сужены в черешок, а верхние - сидячие. Цветки крупные, светло- "+
        "голубого цвета. Применяется при проблемах с желудком, повышает аппетит. Когда-то "+
        "корень обжаривали и использовали как заменитель кофе."
    
    },
    {
        id: 7,
        picture: "images/istockphoto-612402456-170667a-removebg-preview.png",
        correctAnswer: "Плющ",
        explanation: "Плющ - древесный альпинист, который лазит по вертикальным или другим растениям, "+
        "используя воздушные корни. Благодаря своим исключительным лечебным свойствам, он "+
        "оказался одним из основных ингредиентов для лечения кашля и других респираторных "+
        "заболеваний."
  

    },
    {
        id: 8,
        picture: "images/crocus-one-first-spring-flowers-260nw-762940639-removebg-preview.png",
        correctAnswer: "Фиалка",
        explanation: "У нас растет несколько видов фиалок с красивыми фиолетовыми цветками. Но "+
        "лечебными свойствами обладает только душистая фиалка, поэтому другие виды не "+
        "собирают. Чай из цветков фиалки - отличное лекарство от кашля."
        
    },
    {
        id: 9,
        picture: "images/istockphoto-1180142132-612x612-removebg-preview.png",
        correctAnswer: "Красный клевер",
        explanation: "Красный клевер имеет прямой неразветвленный стебель, увенчанный красными "+
        "цветками, собранными в виде головок. В народной медицине его применяют против "+
        "экземы и других кожных заболеваний."
       
    },
    {
        id: 10,
        picture: "images/lipa.png",
        correctAnswer: "Липы",
        explanation: "Мы выделяем три вида липы: мелколистную, крупнолистную и липу серебристую. "+
        "Обладает лечебными свойствами, а также благодаря исключительному вкусу и аромату в "+
        "народе часто используется для приготовления чая."
       
    },
    {
        id: 11,
        picture: "images/nnana-removebg-preview1.png",
        correctAnswer: "Мята",
        explanation: "В природе существует несколько разных видов мяты, которые обладают лечебными "+
        "свойствами (перечная, длиннолистая, болотная, колосистая и т.д.). Мята широко "+
        "применяется при лечении проблем с желудком и кишечником."
        
       
    },
    {
        id: 12,
        picture: "images/mallow-flower-on-white-background-260nw-1712657380-removebg-preview.png",
        correctAnswer: "Мальва лесная",
        explanation: "Мальва лесная – лекарственное съедобное растение семейства Мальвовые. Является "+
        "отличным средством, способствующим растворению и выведению слизи при "+
        "заболеваниях органов дыхания."
       
    },
    {
        id: 13,
        picture: "images/hajdu-removebg-preview.png",
        correctAnswer: "Тысячелистник",
        explanation: "Измельченные листья тысячелистника – одно из самых эффективных средств для "+
        "остановки кровотечения и заживления ран. Чай из тысячелистника успешно лечит "+
        "заболевания кишечника и желудка, уменьшает вздутие живота, повышает аппетит и т.д."
       
    },
    {
        id: 14,
        picture: "images/w1-removebg-preview.png",
        correctAnswer: "Роза собачья",
        explanation: "Шиповник или собачья роза - колючий и разветвленный куст с красивыми розовыми "+
        "или белыми цветами с очень приятным запахом. Созревшие плоды имеют оранжево- "+
        "красный цвет и богаты витамином С, количество которого не уменьшается при варке. Чай "+
        "из шиповника укрепляет иммунитет и делает человеческий организм более устойчивым к "+
        "болезням."
       
    },
    {
        id: 15,
        picture: "images/",
        correctAnswer: "Трава дубровник",
        explanation: "В наших краях трава дубровник горный - очень ценное лекарственное растение. Про это "+
        "растение говорят: «дубровник горный живых из мертвых оживляет». Считается, что "+
        "бодрящий чай из травы дубровника горного лечит различные заболевания, особенно "+
        "органов пищеварения и дыхания."
       
    },
    {
        id: 16,
        picture: "images/360_F_111593254_LPpRCYUEgoij4f4g0GQgj1ptGn12ZwYl-removebg-preview.png",
        correctAnswer: "Бузина",
        explanation: "Бузина растет в виде куста или маленького дерева, украшенного крошечными белыми "+
        "ароматными цветками, собранными в большие соцветия на концах ветвей. Было доказано, "+
        "что чай из бузины является отличным средством от простуды и обладает потогонным "+
        "эффектом, в виде припарок используется при отеках."
    },
    {
        id: 17,
        picture: "images/image (8).png",
        correctAnswer: "Коровяк",
        explanation: "Коровяк растет везде вокруг нас, как сорняк. В первый год он образует большую "+
        "розетку из крупных листьев, на второй год стебель вырастает до 2 метров в высоту. "+
        "Листья покрыты войлочным опушением, а желтые цветы на верхушке стебля собраны в "+
        "длинный колос. Применяется против бронхита, астмы, кашля и болей в суставах."
    },
    {
        id: 18,
        picture: "images/Silver-birch-removebg-preview.png",
        correctAnswer: "Береза",
        explanation: "Береза ​​- дерево узнаваемое по белой коре, которая легко отслаивается и отделяется. "+
        "Листья треугольные, зубчатые по краям. Мужские цветки представляют собой поникшие "+
        "сережки, а женские - стоячие. Березовый сок считается лучшим средством против песка и "+
        "камней в почках, а лист - эффективным растительным лечебным средством для лечения "+
        "мочевыводящих путей."
    },
    {
        id: 19,
        picture: "images/shepherds-purse-capsella-bursapastoris-isolated-260nw-1958118127-removebg-preview.png",
        correctAnswer: "Пастушья сумка",
        explanation: "Пастушья сумка, или сумочник пастуший - травянистое растение с прямостоячим "+
        "стеблем. Листья розетки находятся на черешках, стеблевые листья - сидячие. Цветки "+
        "растения крошечные, собраны в кисти, а плоды имеют сердцевидно-треугольную форму. "+
        "Применяется как кровоостанавливающее средство."
    },
    {
        id: 20,
        picture: "images/image (9).png",
        correctAnswer: "Чистотел",
        explanation: "Чистотел - травянистое растение, которое растет как сорняк. При повреждении "+
        "растения из него вытекает млечный сок оранжевого цвета, имеющий пряно-горький запах "+
        "и вкус. Именно поэтому животные избегают его в своем рационе. Растение нашло "+
        "применение в народной медицине в качестве средства от желтухи, спазмов желудка, "+
        "заболеваний печени и др."
    },
    {
        id: 21,
        picture: "images/zalf-removebg-preview.png",
        correctAnswer: "Шалфей",
        explanation: "Шалфей является очень ценным растением в нашем регионе. Когда-то его называли "+
        "святой травой благодаря исключительным лечебным свойствам. В средневековой "+
        "медицинской школе в Салермо настолько ценили это растение, что говорили о нем: «Как "+
        "может умереть человек, у которого в саду растет шалфей?!»"
    },
    {
        id: 22,
        picture: "images/kantarion-removebg-preview.png",
        correctAnswer: "Зверобой",
        explanation: "Зверобой, благодаря своим целебным свойствам, используется с древних времен. "+
        "Стебель его крепкий и разветвленный с небольшими листьями, покрытыми маслянистыми "+
        "железками в виде точек. Зверобой снимает боль, оказывает расслабляющее действие, "+
        "масло зверобоя применяют при ожогах кожи, болях в спине и аллергии."
    },
    {
        id: 23,
        picture: "images/bs-removebg-preview.png",
        correctAnswer: "Алтей",
        explanation: "Алтей - это растение, вырастающее до 2 метров в высоту. У него разветвленный "+
        "мясистый корень, желтый снаружи и белый внутри. Помогает при кашле, бронхите, астме, "+
        "а также при заболеваниях органов пищеварения."
    },
    {
        id: 24,
        picture: "images/dobricica-removebg-preview1.png",
        correctAnswer: "Будра",
        explanation: "Славяне верят, что будра может сделать человека лучше! Благодаря своим лечебным "+
        "компонентам, она используется для лечения многих заболеваний, особенно при болезнях "+
        "органов дыхания."
    
    },
    {
        id: 25,
        picture: "images/wildst-removebg-preview.png",
        correctAnswer: "Земляника",
        explanation: "Земляника - известное и узнаваемое лесное растение, пользующееся большой "+
        "популярностью у населения. Чай из корня земляники используется для лечения диареи, а "+
        "листовой чай - для очистки крови."
    },
    {
        id: 26,
        picture: "images/majcinaD-removebg-preview.png",
        correctAnswer: "Тимьян",
        explanation: "Тимьян - небольшое кустарниковое или стелющееся растение, деревянистое снизу. "+
        "Ярко-розовые цветки собраны на концах ветвей в соцветия, обладают приятным "+
        "ароматом. Чай из тимьяна - излюбленное нашим народом лекарство."
    },
    {
        id: 27,
        picture: "images/zenskabokv.png",
        correctAnswer: "Подорожник большой",
        explanation: "Подорожник большой имеет широкие листья, густо усаженные в наземной розетке, из "+
        "которой вырастают один или несколько цветоносов. На верхушке цветоноса находится "+
        "длинное колосовидное соцветие. Эффективно останавливает кровотечение при "+
        "прикладывании свежего очищенного листа к порезу или ране на коже."
    },
    {
        id: 28,
        picture: "images/gavez-removebg-preview (2).png",
        correctAnswer: "Окопник",
        explanation: "Мазь из корня окопника можно наносить непосредственно на неочищенные раны на "+
        "коже, предотвращая воспаление. Доказано, что даже самые глубокие порезы заживают без "+
        "рубцов. Существует народное поверье, что из-за исключительных целебных свойств "+
        "окопника, если два пальца связать вместе корнем этого растения, то они срастутся."
    },
    {
        id: 29,
        picture: "images/malee-removebg-preview.png",
        correctAnswer: "Подорожник ланцетолистный",
        explanation: "Существует несколько различных видов подорожника, и все они обладают схожими "+
        "лечебными свойствами. У подорожника ланцетолистного узкие листья, собранные в "+ 
        "прикорневую розетку, из которой отходят несколько прямостоячих ребристых стеблей. На "+
        "их концах находятся коричневые головчатые или цилиндрические соцветия."
    },
    {
        id: 30,
        picture: "images/ss-removebg-preview.png",
        correctAnswer: "Первоцвет",
        explanation: "Существует множество видов первоцветов, не все из которых обладают лечебными "+
        "свойствами. Наибольшим лечебным эффектом обладает вид, имеющий стебли длиной до "+
        "20 см, на концах которых находится несколько темно-желтых цветков. Чай из первоцвета "+
        "рекомендуется употреблять при кашле, воспалении легких, он способствует выведению "+
        "слизи, снимает головные боли."
    }
];

export default questions