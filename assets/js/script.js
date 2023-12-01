let chaptersObj = {
  intro: {
    subtitle: "Bonjour, voici mon jeu.",
    text: "Fait par William Rathier Mailly",
    boutons: [{ titre: "commencer", destination: "firstChapter" }],
  },
  firstChapter: {
    subtitle: "Debout l'athlète",
    //chatGpt
    text: "Liam doit se rendre a sa première pratique du camp d'entrainement professionnel.",
    media: "assets/images/joueur_intro.jpg",
    media_type: "img",
    boutons: [
      { titre: "boire un smoothie", destination: "camp" },
      { titre: "boire un verre d'eau", destination: "camp" },
      { titre: "boire une bière", destination: "biere" },
      { titre: "Recommencer", destination: "intro" },
    ],
  },
  biere: {
    subtitle: "Tu es pas très smat mon gars",
    text: "Tu te fais arrêter par la police pour conduite en état d'ébriété.",
    media: "assets/images/biere.jpg",
    media_type: "img",
    boutons: [
      { titre: "next", destination: "out" },
      { titre: "Recommencer", destination: "intro" },
    ],
  },
  camp: {
    subtitle: "Arriver au camp d'entrainement",
    //chatGpt
    text: "À son arrivée au camp d'entraînement, Liam a été accueilli par une équipe de légendes du sport, prête à lui enseigner les secrets de la glace pour devenir un futur champion.",
    media: "assets/images/arriver_au_camp.jpg",
    media_type: "img",
    boutons: [
      { titre: "oublier son bâton", destination: "theKey" },
      { titre: "ariver en retard", destination: "out" },
      { titre: "faire un échauffement", destination: "surLaGlace" },
      { titre: "Recommencer", destination: "intro" },
    ],
  },
  theKey: {
    subtitle: "tu es vraiment chanceux",
    text: "tu es tombé sur le directeur général a ta sorti de la chambre, vous avez beaucoup parlé et il a confiance en toi",
    media: "assets/images/confiance.jpg",
    media_type: "img",
    boutons: [
      { titre: "D'accord", destination: "firstChapter" },
      { titre: "recommencer", destination: "intro" },
    ],
  },
  surLaGlace: {
    subtitle: "tu es sur la glace pour l'entrainement",
    //chatGpt
    text: "Nerveux et excité, Liam a enfilé son chandail de pratique pour sa toute première pratique avec l'équipe de de la ligue majeure, réalisant enfin son rêve d'enfance qui est de jouer dans la grande ligue avec les pros.",
    media: "assets/videos/crosby_warmup.mp4",
    media_type: "video",
    boutons: [
      { titre: "tir partout", destination: "tirPartout" },
      { titre: "les partisans", destination: "partisans" },
      { titre: "etire toi", destination: "teamMeeting" },
      { titre: "Recommencer", destination: "intro" },
    ],
  },
  teamMeeting: {
    subtitle: "Bien choisi",
    text: "Les étirements aident à faire un bon entrainement. Tu es maintenant dois aller à la rencontre d'équipe.",
    media: "assets/videos/warmup_nhl.mp4",
    media_type: "video",
    boutons: [
      { titre: "manger le diner", destination: "diner" },
      { titre: "vas directement", destination: "rencontreDG" },
      { titre: "Faire une sieste", destination: "sieste" },
      { titre: "Recommencer", destination: "intro" },
    ],
  },
  rencontreDG: {
    subtitle: "La rencontre",
    text: "Le directeur gérnéral veut te voir et il a quelque chose d'important à te dire.",
    media: "assets/images/dg.jpg",
    media_type: "img",
    boutons: [
      { titre: "oui", destination: "fin" },
      { titre: "non", destination: "grosNon" },
    ],
  },
  fin: {
    subtitle: "Tu y es arrivé",
    text: "Tu fais maintenant parti de l'équipe tu peux enfin signer ton premier contrat professionnel.",
    media: "assets/videos/pingouins.mp4",
    media_type: "video",
    boutons: [{ titre: "recommencer", destination: "intro" }],
  },
  grosNon: {
    subtitle: "Tu n'es pas le bienvenue ici",
    text: "le directeur général de l'equipe ne veut pas te voir dans l'entourage de l'équipe tu n'as pas ta place.",
    media: "assets/images/dg-colere.jpg",
    media_type: "img",
    boutons: [
      { titre: "next", destination: "out" },
      { titre: "Recommencer", destination: "intro" },
    ],
  },
  sieste: {
    subtitle: "tu fais des dodos ?",
    text: "C'est le temps de jouer au hockey pas dormir.",
    media: "assets/images/dormir.jpg",
    media_type: "img",
    boutons: [
      { titre: "next", destination: "out" },
      { titre: "Recommencer", destination: "intro" },
    ],
  },
  diner: {
    subtitle: "Non, mais serieux",
    text: "Ton diner peut attendre mon homme",
    media: "assets/images/colere.jpg",
    media_type: "img",
    boutons: [
      { titre: "next", destination: "out" },
      { titre: "Recommencer", destination: "intro" },
    ],
  },
  tirPartout: {
    subtitle: "Bing Bang des pucks volent partout",
    text: "Tu tir partout comme un vrai tout croche.",
    media: "assets/images/rondelles.jpg",
    media_type: "img",
    boutons: [
      { titre: "next", destination: "out" },
      { titre: "Recommencer", destination: "intro" },
    ],
  },
  partisans: {
    subtitle: "Manque de jugement de ta part",
    text: "Non mais mon homme tu fais quoi reste concentrer sur la glace les partisans sont le moindre de tes soucis. Va les rejoindre dans les estrades si tu n'est pas pour jouer au hockey",
    media: "assets/images/colere.jpg",
    media_type: "img",
    boutons: [
      { titre: "next", destination: "out" },
      { titre: "Recommencer", destination: "intro" },
    ],
  },
  out: {
    subtitle: "tu es out le gros",
    //chatGpt
    text: "Après un camp décevant, Liam a été retranché de son équipe de hockey, laissant derrière lui des souvenirs indélébiles et une détermination à revenir plus fort.",
    media: "assets/images/decu.jpg",
    media_type: "img",
    boutons: [{ titre: "Recommencer", destination: "intro" }],
  },
};
let TwistSave = localStorage.getItem("twist");
const body = document.querySelector("body");
let CEOMet = TwistSave;
let muted = ((localStorage.getItem("MutedBox") || false) === 'true');
let muteBox = document.querySelector(".input");
const audioStart = new Audio("assets/audio/are-you-ready.mp3");
const gameOver = new Audio("assets/audio/game-over.wav");

let chapterSave = localStorage.getItem("chapter");

muteBox.checked = muted;

muteBox.addEventListener("click", function () {
  muted = muteBox.checked;
  localStorage.setItem("MutedBox", muted);
});

if (CEOMet == undefined) {
  CEOMet = false;
}

if (chapterSave == undefined) {
  goToChapter("intro");
} else {
  goToChapter(chapterSave);
}

function goToChapter(chapterName) {
  let titre = document.querySelector("h2");
  let text = document.querySelector(".para1");
  let media = document.querySelector(".media");
  const btn = document.querySelector(".option");
  var msg = new SpeechSynthesisUtterance();
  const audio = new Audio("assets/audio/click.wav");

  btn.innerHTML = "";

  localStorage.setItem("chapter", chapterName);

  if (chapterName in chaptersObj) {
    titre.innerText = chaptersObj[chapterName].subtitle;
    text.innerText = chaptersObj[chapterName].text;

    media.innerHTML = "";

    if (chaptersObj[chapterName].media_type == "img") {
      media.innerHTML = `<img src="${chaptersObj[chapterName].media}">`;
    } else {
      const video = document.createElement("video");
      video.src = chaptersObj[chapterName].media;
      video.loop = true;
      media.appendChild(video);
      video.play();
    }
    msg.text = chaptersObj[chapterName].subtitle;
    if (muted == false) {
      window.speechSynthesis.speak(msg);
    }

    for (let i = 0; i < chaptersObj[chapterName].boutons.length; i++) {
      if (chapterName == "rencontreDG" && CEOMet == false && i == 0) {
        continue;
      }

      console.log(chaptersObj[chapterName].boutons[i].destination);
      const nouveauBtn = document.createElement("button");
      nouveauBtn.textContent = chaptersObj[chapterName].boutons[i].titre;

      nouveauBtn.addEventListener("mouseenter", function () {
        var choix = new SpeechSynthesisUtterance();
        choix.text = chaptersObj[chapterName].boutons[i].titre;
        if (muted == false) {
          window.speechSynthesis.speak(choix);
        }
      });
      nouveauBtn.addEventListener("click", () => {
        goToChapter(chaptersObj[chapterName].boutons[i].destination);
        if (muted == false) {
          audio.play();
        }
      });
      nouveauBtn.lastChild.addEventListener("click", function () {
        localStorage.clear();
        goToChapter(chaptersObj[chapterName].boutons[i].destination);
      });
      btn.appendChild(nouveauBtn);
    }
  } else console.log("ce n'est pas un chapitre 🤡");

  if (chapterName == "theKey") {
    CEOMet = true;
    localStorage.setItem("twist", CEOMet);
  }
  if (chapterName == "fin" || chapterName == "out") {
    CEOMet = false;
    localStorage.setItem("twist", CEOMet);
  }
  if (chapterName == "firstChapter") {
    if (muted == false) {
      audioStart.play();
    }
  }
  if (chapterName == "out") {
    if (muted == false) {
      gameOver.play();
    }
  }
}

/*console.log(chaptersObj[chapterName].subtitle);
  console.log(chaptersObj[chapterName].text);
  for (let i = 0; i < chaptersObj[chapterName].boutons.length; i++) {
    console.log(chaptersObj[chapterName].boutons[i].destination);
  }
}*/
