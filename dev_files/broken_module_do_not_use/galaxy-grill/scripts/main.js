import generateRandom from "./generateRandom.js";
import generateCharacter from "./generateCharacter.js";
import generateSynthetic from "./generateSynthetic.js";


// add buttons to menu
Hooks.on("renderActorDirectory", (_app, html) => {
  if (game.user.isGM) {
    const random = jQuery(`<button class="generateRandom-btn"><i class="fas fa-pepper-hot"></i> Order the Special</button>`);
    //const character = jQuery(`<button class="generateCharacter-btn"><i class="fas fa-pepper-hot"></i> Character</button>`);
    //const synthetic = jQuery(`<button class="generateSynthetic-btn"><i class="fas fa-pepper-hot"></i> Synthetic</button>`);
    html.find(".generateRandom-btn").remove();
    //html.find(".generateCharacter-btn").remove();
    //html.find(".generateSynthetic-btn").remove();

    html.find(".directory-footer").append(random);
      random.on("click", (ev) => {
        generateRandom();
    });
    //html.find(".directory-footer").append(character);
    //  character.on("click", (ev) => {
    //    generateCharacter();
    //});
    //html.find(".directory-footer").append(synthetic);
    //  synthetic.on("click", (ev) => {
    //    generateSynthetic();
    //});
  }
});
