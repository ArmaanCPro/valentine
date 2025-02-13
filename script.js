const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
let noCount = 0;

const togepiGif = document.getElementById("togepi_gif");
const happy_gifs = ["resources/togepi-happy/togepi-happy_1.gif", "resources/togepi-happy/togepi-happy_2.gif",
    "resources/togepi-happy/togepi-happy_3.gif", "resources/togepi-happy/togepi-happy_super.gif"]

const sad_gifs = ["resources/togepi-sad/togepi-sad_1.gif", "resources/togepi-sad/togepi-sad_2.gif",
    "resources/togepi-sad/togepi-sad_3.gif"]

yesButton.addEventListener("click", () => {
    console.log("yes button clicked 💘");
    const displayArea = document.createElement("div");
    displayArea.textContent = "❤️";
    displayArea.style.marginTop = "20px";
    displayArea.style.fontSize = "18px";
    displayArea.style.color = "#ff69b4";

    // Append the display area to the body
    document.body.appendChild(displayArea);

    noButton.style.display = "none";

    togepiGif.src = happy_gifs[Math.floor(Math.random() * happy_gifs.length)];
});

noButton.addEventListener("click", () => {
    console.log("no button clicked 😔");
    noCount++;

    if (noCount === 12) {
        document.getElementById("noButton").style.display = "none";
    }

    yesButton.style.width = `${150 + 10 * noCount}px`;
    yesButton.style.height = `${50 + 10 * noCount}px`;
    yesButton.style.fontSize = `${14 + 2 * noCount}px`;

    noButton.style.width = `${120 - 10 * noCount}px`;
    noButton.style.height = `${50 - 4 * noCount}px`;
    noButton.style.fontSize = `${14 - noCount}px`;

    togepiGif.src = sad_gifs[Math.floor(Math.random() * sad_gifs.length)];
});