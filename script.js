// Spider effect when mouse moves
document.addEventListener("mousemove", function(e) {
    let spider = document.createElement("div");
    spider.classList.add("spider");
    document.body.appendChild(spider);

    spider.style.left = e.clientX + "px";
    spider.style.top = e.clientY + "px";

    setTimeout(() => {
        spider.remove(); // Remove after animation
    }, 500);
});
