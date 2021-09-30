const chapitre1 = {
    subtitle: "Premiers pas",
    text: "En entrant dans la mine abandonnée, vous rencontrez très tôt une bifurquation du chemin principal. Il se divise en deux chemins plus étroits. Vous pouvez soit emprunter le tunnel se dirigeant vers la gauche soit prendre celui de droite.",
    img: "assets/cave_split"
}

const chapitre2 = {
    subtitle: "Embuscade",
    text: "Au bas de l'escalier délabré, vous remarquez un changement au niveau de l'humidité de l'air. Lanterne à la main, vous éclairez le nouveau tunnel se présentant devant vous avant de vous y aventurer. Quelques minutes plus tard, le passage débouche enfin sur une très grande pièce ayant la forme d'un dome. Du sol sont émergées des tours de pierres portant, encastrées dans celles-ci, des pierres précieuses émanant une douce lueur verte ne vous permettant point d'apercevoir le plafond de la grotte. Au loin, vous apercevez différents tunnels à partir de l'entrée de la pièce. Tout semblait paisible alors que vous vous dirigiez vers le centre de la pièce, quand soudain, vous entendez un cliquetis vous glaçant les entrailles. Une araignée géante et poilue commence à descendre rapidement de sa toile devant vous et vous prend en embuscade! Vous apercevez un tunnel à votre gauche, puis un à votre droite. Vous vous faites aussi l'idée de lancer votre lanterne sur l'araignée pour tenter de la brûler. Finalement, vous avez aussi l'option d'affronter la créature monstrueuse à l'aide de votre épée.",
    img: "assets/spider_ambush"
}

const chapitre3 = {
    subtitle: "Décision",
    text: "Après avoir battu et vaincu l'araignée géante, vous explorez vos options. Vous devez continuer votre route afin de trouver une issue à cette grotte maudite.",
    img: "assets/adventurer_after_combat"
}

const chapitre4 = {
    subtitle: "Repaire de l'araignée",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    img: "assets/spider_nest"
}

const chaptersObj = {
    slug: "chapitre_1",
    slug: "chapitre_2",
    slug: "chapitre_3",
    slug: "chapitre_4"
}

function goToChapter(chapterName) {
    console.log(chapterName.subtitle);
    console.log(chapterName.text);
    console.log(chapterName.img);
}