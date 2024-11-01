document.getElementById("infoButton")?.addEventListener("click", function() {
    const infoText = document.getElementById("infoText");
    if (infoText) {
        infoText.style.display = infoText.style.display === "none" ? "block" : "none";
    }
});
