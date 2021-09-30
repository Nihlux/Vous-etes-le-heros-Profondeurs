const chapitre1 = {
    subtitle: "Premiers pas",
    img: "assets/cave_split.jpg",
    text: "En entrant dans la mine abandonnée, vous rencontrez très tôt une bifurquation du chemin principal. Il se divise en deux chemins plus étroits. Vous pouvez soit emprunter le tunnel se dirigeant vers la gauche soit prendre celui de droite.",
    options: ["Prendre le tunnel de gauche" = {
        text: "Vous empruntez le chemin de gauche avant d'arriver dans une petite pièce éclairée au plafond par un trou permettant à la lumière du jour de passer. Vous apercevez sur un baril une lanterne et sur une table à côté, un paquet d'allumettes. Vous allumez la lanterne et retournez au chemin principal."
    }, "Prendre le tunnel de droite" = {
        text: "Vous empruntez le chemin de droite. Si vous n'avez pas trouvé la lanterne, vous trébuchez par dessus un clôture de sécurité et tombez dans un trou profond. Vous mourrez. Si vous avez trouvé la lanterne, vous arrivez à des escaliers descendants très bas et voyez une clôture de sécurité vous empêchant de tomber dans un gouffre.",
        action: goToChapter('embuscade')
    }]
}

const chapitre2 = {
    subtitle: "Embuscade",
    img: "assets/spider_ambush.jpg",
    text: "Au bas de l'escalier délabré, vous remarquez un changement au niveau de l'humidité de l'air. Lanterne à la main, vous éclairez le nouveau tunnel se présentant devant vous avant de vous y aventurer. Quelques minutes plus tard, le passage débouche enfin sur une très grande pièce ayant la forme d'un dome. Du sol sont émergées des tours de pierres portant, encastrées dans celles-ci, des pierres précieuses émanant une douce lueur verte ne vous permettant point d'apercevoir le plafond de la grotte. Au loin, vous apercevez différents tunnels à partir de l'entrée de la pièce. Tout semblait paisible alors que vous vous dirigiez vers le centre de la pièce, quand soudain, vous entendez un cliquetis vous glaçant les entrailles. Une araignée géante et poilue commence à descendre rapidement de sa toile devant vous et vous prend en embuscade! Vous apercevez un tunnel à votre gauche, puis un à votre droite. Vous vous faites aussi l'idée de lancer votre lanterne sur l'araignée pour tenter de la brûler. Finalement, vous avez aussi l'option d'affronter la créature monstrueuse à l'aide de votre épée.",
    options: ["S'enfuir par le tunnel de gauche" = {
        text: "Vous tentez de vous enfuir par le tunnel à la gauche que vous aviez aperçus plus tôt. Au bout de celui-ci se trouve un mur barricadé. Vous tentez vainement avec toute votre énergie de la défoncer. Vous lui donner des coups de pied, des coups de coude et des coups de tête, mais la barricade ne cède pas."
    }, "S'enfuir par le tunnel de droite" = {
        text: ""
    }, "Lancer la lanterne" = {
        text: ""
    }, "Affronter l'araignée" = {
        text: "",
        action: goToChapter('décision')
    }]
}

const chapitre3 = {
    subtitle: "Décision",
    img: "assets/adventurer_after_combat.jpg",
    text: "Après avoir battu et vaincu l'araignée géante, vous explorez vos options. Vous devez continuer votre route afin de trouver une issue à cette grotte maudite.",
    options: ["Prendre le tunnel de gauche", "Prend le tunnel de droite", "Explorer la pièce"]
}

const chapitre4 = {
    subtitle: "Repaire de l'araignée",
    img: "assets/spider_nest.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    options: ["Brûler le nid d'araignées", "Fuir vers la sortie"]
}

const chaptersObj = {
    slug: "premiers_pas",
    slug: "embuscade",
    slug: "décision",
    slug: "repaire_de_laraignée"
}

function goToChapter(chapterName) {
    const chapitre = chapterName;
    console.log(chapitre.subtitle);
    console.log(chapitre.text);
    console.log(chapitre.img);
}