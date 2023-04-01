// add button to side menu
Hooks.on("renderActorDirectory", (_app, html) => {
  if (game.user.isGM) {
    const generateButton = jQuery(`<button class="generator-btn"><i class="fas fa-fire"></i> Generate Player Sheet</button>`);
    html.find(".generator-btn").remove();

    html.find(".directory-footer").append(generateButton);

    generateButton.on("click", (ev) => {
      ev.preventDefault();
      let generator = new NPCGenerator({
        classesJSON: classesJSON,
        languagesJSON: languagesJSON,
        namesJSON: namesJSON,
        personalityTraitsJSON: personalityTraitsJSON,
        plotHooksJSON: plotHooksJSON,
        professionsJSON: professionsJSON,
        racesJSON: racesJSON,
        sexJSON: sexJSON,
        listJSON: listJSON,
      });
      generator.render(true);
    });
  }
});