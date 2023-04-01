// add button to side menu
Hooks.on("renderActorDirectory", (_app, html) => {
  if (game.user.isGM) {
    const button = jQuery(`<button class="generator-btn"><i class="fas fa-pepper-hot"></i> Order the Special</button>`);
    html.find(".generator-btn").remove();

    html.find(".directory-footer").append(button);

          button.on("click", (ev) => {
    });
  }
});