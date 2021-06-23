let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("mousemove", (e) => {
        let halfWidth = box.clientWidth / 2,
            halfHeight = box.clientHeight / 2,
            mouseX = halfWidth + box.offsetLeft - e.pageX,
            mouseY = halfHeight + box.offsetTop - e.pageY,
            maxDeg = 10,
            image = box.querySelector("img");

        let degX = (mouseY / halfHeight) * -maxDeg + "deg";
        let degY = (mouseX / halfWidth) * maxDeg + "deg";
        box.setAttribute(
            "style",
            `transform: perspective(512px) rotateX(${degX}) rotateY(${degY});`
        );

        image.setAttribute(
            "style",
            `object-position: ${
                (box.offsetLeft + box.clientWidth - e.pageX) / -8 + 20
            }px ${(box.offsetTop + box.clientHeight - e.pageY) / -8 + 20}px`
        );
    });

    box.addEventListener("mouseout", () => {
        box.removeAttribute("style");
        box.querySelector("img").removeAttribute("style");
    });
});
