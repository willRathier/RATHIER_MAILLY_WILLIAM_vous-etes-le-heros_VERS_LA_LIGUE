let chaptersObj = {
  firstChapter: {
    subtitle: "intro",
    //chatGpt
    text: "Dans la ville de Northville, Liam, un jeune passionné de hockey, passait chaque instant libre sur la patinoire. Son rêve était simple : devenir une légende du hockey sur glace.",
    img: "assets/images/joueur_intro.jpg",
    option: [
      { titre: "boire un smoothie", destination: "goToChapter('biere')" },
      { titre: "boire un verre d'eau", destination: "goToChapter('camp')" },
      { titre: "boire une bière", destination: "goToChapter('camp')" },
    ],
  },
  biere: {
    subtitle: "Tu es pas très smat mon gars",
    text: "Tu te fais arrêter par la police pour conduite en état d'ébriété.",
    option: [{ titre: "next", destination: "goToChapter('out')" }],
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
    option: [
      { titre: "tir partout", destination: "goToChapter('tirPartout')" },
      { titre: "les partisans", destination: "goToChapter('partisans')" },
      { titre: "etire toi", destination: "goToChapter('teamMeeting')" },
    ],
  },
  teamMeeting: {
    subtitle: "Bien choisi",
    text: "Les étirements aident à faire un bon entrainement. Tu es maintenant à la rencontre d'équipe.",
    img: "assets/images/meeting.jpg",
    option: [
      { titre: "manger le diner", destination: "goToChapter('diner')" },
      { titre: "vas directement", destination: "goToChapter('')" },
      { titre: "Faire une sieste", destination: "goToChapter('')" },
    ],
  },
  diner: {
    subtitle: "Non, mais serieux",
    text: "Ton diner peut attendre mon homme",
    img: "assets/img/colere.jpg",
    option: [{ titre: "next", destination: "goToChapter('out')" }],
  },
  tirPartout: {
    subtitle: "Bing Bang des pucks volent partout",
    text: "Tu tir partout comme un vrai tout croche.",
    img: "assets/img/rondelles.jpg",
    option: [{ titre: "next", destination: "goToChapter('out')" }],
  },
  partisans: {
    subtitle: "Manque de jugement de ta part",
    text: "Non mais mon homme tu fais quoi tu vas blesser quelqu'un.",
    img: "assets/img/colere.jpg",
    option: [{ titre: "next", destination: "goToChapter('out')" }],
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
