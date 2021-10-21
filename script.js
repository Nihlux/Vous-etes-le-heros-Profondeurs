let lanternFound = false;

const chaptersObj = {
    premiers_pas: chapitre1 = {
        subtitle: "Premiers pas",
        img: "assets/cave_split.jpg",
        text: "En entrant dans la mine abandonnée, vous rencontrez très tôt une bifurquation du chemin principal. Il se divise en deux chemins plus étroits. Vous pouvez soit emprunter le tunnel se dirigeant vers la gauche soit prendre celui de droite.",
        options: [
            {
                text: "Prendre le tunnel de gauche. Vous empruntez le chemin de gauche avant d'arriver dans une petite pièce éclairée au plafond par un trou permettant à la lumière du jour de passer. Vous apercevez sur un baril une lanterne et sur une table à côté, un paquet d'allumettes. Vous allumez la lanterne et retournez au chemin principal."
            },  
            {
                text: "Prendre le tunnel de droite. Vous empruntez le chemin de droite. Si vous n'avez pas trouvé la lanterne, vous trébuchez par dessus un clôture de sécurité et tombez dans un trou profond. Vous mourrez. Si vous avez trouvé la lanterne, vous arrivez à des escaliers descendants très bas et voyez une clôture de sécurité vous empêchant de tomber dans un gouffre.",
                action: "goToChapter('embuscade')"
            }
        ]
    },
    embuscade: chapitre2 = {
        subtitle: "Embuscade",
        img: "assets/spider_ambush.jpg",
        text: "Au bas de l'escalier délabré, vous remarquez un changement au niveau de l'humidité de l'air. Lanterne à la main, vous éclairez le nouveau tunnel se présentant devant vous avant de vous y aventurer. Quelques minutes plus tard, le passage débouche enfin sur une très grande pièce ayant la forme d'un dome. Du sol sont émergées des tours de pierres portant, encastrées dans celles-ci, des pierres précieuses émanant une douce lueur verte ne vous permettant point d'apercevoir le plafond de la grotte. Au loin, vous apercevez différents tunnels à partir de l'entrée de la pièce. Tout semblait paisible alors que vous vous dirigiez vers le centre de la pièce, quand soudain, vous entendez un cliquetis vous glaçant les entrailles. Une araignée géante et poilue commence à descendre rapidement de sa toile devant vous et vous prend en embuscade! Vous apercevez un tunnel à votre gauche, puis un à votre droite. Vous vous faites aussi l'idée de lancer votre lanterne sur l'araignée pour tenter de la brûler. Finalement, vous avez aussi l'option d'affronter la créature monstrueuse à l'aide de votre épée.",
        options: [
            {
                text: "S'enfuir par le tunnel de gauche. Vous tentez de vous enfuir par le tunnel à votre gauche que vous aviez aperçu plus tôt. Vous échappez votre épée en courant, mais vous ne vous arrêtez pas en sachant que l'araignée n'est pas très loin derrière vous. Au bout de celui-ci se trouve un mur barricadé. Vous tentez vainement avec toute votre énergie de la défoncer. Vous lui donner des coups de pied, des coups de coude et des coups de tête, mais la barricade ne cède pas."
            }, 
            {
                text: "S'enfuir par le tunnel de droite. Vous tentez de vous enfuir par le tunnel à votre droite que vous aviez aperçu plus tôt. Vous courrez de toutes vos forces et l'araignée vous manque de peu. Vous entrez dans le tunnel de droite qui, par chance, est plus étroit et empêche l'araignée de vous atteindre. Vous continuez à marcher et arrivez malheureusement à une impasse sans issues. Un dilemme se présente à vous. Mourrir de faim ou mourrir par l'araignée mourrant de faim."
            }, 
            {
                text: "Lancer la lanterne. La lanterne, dans un élan, quitte votre main et se fracasse contre le sol aux pieds de l'araignée. Rien ne brûle et vous n'y voyez plus rien. Un des pattes de l'araignée vous empale et vous tue."
            },
            {
                text: "Affronter l'araignée. Vous prenez votre courage à deux mains et vous vous décidez d'affronter cet horrible monstre. Vous remportez le combat et décidez de vous reposer un peu avant de continuer votre chemin.",
                action: "goToChapter('décision')"
            }
        ]
    },
    décision: chapitre3 = {
        subtitle: "Décision",
        img: "assets/adventurer_after_combat.jpg",
        text: "Après avoir battu et vaincu l'araignée géante, vous explorez vos options. Vous devez continuer votre route afin de trouver une issue à cette grotte maudite.",
        options: [
            {
                text: "Prendre le tunnel de gauche.",
                action: "goToChapter('repaire_de_laraignée')"
            }, 
            {
                text: "Prendre le tunnel de droite. Vous empruntez le chemin de droite, mais faites vite demi-tour lorsqu'au bout du chemin vous arrivez à une impasse."
            },  
            {
                text: "Vous décider d'explorer la vaste pièce et trouvez une hache. Vous vous questionnez sur quel tunnel emprunter."
            }
        ]
    },
    repaire_de_laraignée: chapitre4 = {
        subtitle: "Repaire de l'araignée",
        img: "assets/spider_nest.jpg",
        text: "Vous empruntez le chemin de gauche, mais faites vite demi-tour lorsqu'au bout du chemin vous êtes face à une barricade dont vous êtes incapable de détruire à l'épée. Cependant, si vous avez explorer la pièce et trouvé la hache, vous brisez la barricade et continuez à avancer aux travers de ces grottes maudites. Derrière la barricade, vous retrouvez à votre droite le nid de l'araignée rempli de toiles d'araignée et de pochettes comportant les oeuf d'araignées. À votre gauche vous voyez un rideau d'eau couler. Vous vous dites que vous êtes derrière un chute d'eau. Vous pouvez soit vous enfuir en sautant au travers de la chute d'eau pour atterir dans l'eau tout au bas ou de mettre le feu au nid d'araignées et, ensuite, de vous enfuir.",
        options: [
            {
                text: "Brûler le nid d'araignées. Vous mettez le feu au nid de l'araignée géante. De retour en ville, vous êtes bien récompensés pour avoir libéré la mine abandonnée de tout danger."
            },
            {
                text: "Fuir vers la sortie. Vous fuyez vers la sortie au plus vite et rentrez à votre domicile tard le soir. Les bébés de l'araignée géante connaissent votre trace et viennent vous tuer dans votre sommeil."
            }
        ]
    }
}

function goToChapter(chapterName) {
    let chapter = chaptersObj[chapterName];
    console.log(chapter.subtitle);
    console.log(chapter.text);
    console.log(chapter.img);

    let subtitle = document.getElementById("subtitle");
    subtitle.innerText = chapter.subtitle;
    let text = document.getElementById("text");
    text.innerText = chapter.text;
    let image = document.getElementById("image");
    image.src = chapter.img;

    let buttons = document.getElementById("boutons");
    let button = "";
    let options = chapter.options
    for (i = 0; i < chaptersObj[chapterName].options.length; i++){
        let choix = options[i];
        button += `<button onclick="${choix.action}">${choix.text}</button>`;
    }
    buttons.innerHTML = button;
}