let chaptersObj = {
  firstChapter: {
    subtitle: "intro",
    //chatGpt
    text: "Dans la ville de Northville, Liam, un jeune passionné de hockey, passait chaque instant libre sur la patinoire. Son rêve était simple : devenir une légende du hockey sur glace.",
    img: "assetsimagesjoueur_intro.jpg",
    choix: ["oui", "non", "peut-être"],
  },
};

function goToChapter(chaptersObj) {
  console.log(chaptersObj[chapterName]["subtitle"]);
  console.log(chaptersObj[chapterName]["text"]);
}
