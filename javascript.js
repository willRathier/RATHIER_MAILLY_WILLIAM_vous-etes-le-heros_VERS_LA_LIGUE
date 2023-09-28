let chaptersObj = {
  firstChapter: {
    subtitle: "intro",
    //chatGpt
    text: "Dans la ville de Northville, Liam, un jeune passionné de hockey, passait chaque instant libre sur la patinoire. Son rêve était simple : devenir une légende du hockey sur glace.",
    img: "assets/images/joueur_intro.jpg",
    option: [
      { titre: "boire un smoothie", destination: "goToChapter('out')" },
      { titre: "boire un verre d'eau", destination: "goToChapter('camp')" },
      { titre: "boire une bière", destination: "goToChapter('camp')" },
    ],
  },
  camp: {
    subtitle: "Arriver au camp d'entrainement",
    //chatGpt
    text: "À son arrivée au camp d'entraînement de hockey, Alex a été accueilli par une équipe de légendes du sport, prête à lui enseigner les secrets de la glace pour devenir un futur champion.",
    img: "assets/images/arriver_au_camp.jpg",
    option: [
      { titre: "oublier son baton", destination: "goToChapter('theKey')" },
      { titre: "arivver en retard", destination: "goToChapter('out')" },
      { titre: "faire un warm up", destination: "goToChapter('surLaGlace')" },
    ],
  },
  theKey: {
    subtitle: "tu es vraiment chanceux",
    text: "tu es tombé sur le directeur général a ta sorti de la chambre, vous avez beaucoup parlé et il a confiance en toi",
    img: "assets/images/confiance.jpg",
    option: [
      { titre: "recommencer", destination: "goToChapter('firstChapter')" },
    ],
  },
  surLaGlace: {
    subtitle: "tu es sur la glace pour l'entrainement",
    //chatGpt
    text: "Nerveux et excité, Lucas a enfilé son maillot professionnel pour sa toute première pratique avec l'équipe de hockey de la ligue majeure, réalisant enfin son rêve d'enfance sur la glace éclatante de l'aréna.",
    img: "assets/images/training.jpg",
  },
  out: {
    subtitle: "tu es out le gros",
    //chatGpt
    text: "Après une saison décevante, Jake a été retranché de son équipe de hockey bien-aimée, laissant derrière lui des souvenirs indélébiles et une détermination à revenir plus fort.",
    img: "assets/images/decu.jpg",
    option: [
      { titre: "recommencer", destination: "goToChapter('firstChapter')" },
    ],
  },
};

function goToChapter(chaptersObj) {
  console.log(chaptersObj[chapterName]["subtitle"]);
  console.log(chaptersObj[chapterName]["text"]);
}
