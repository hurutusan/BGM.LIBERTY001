document.addEventListener("DOMContentLoaded", function() {
    // 起動時のアニメーション
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.classList.add("show");
    });

    // スクロール時のアニメーション
    window.addEventListener("scroll", function() {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight / 5 * 4;

            if (boxTop < triggerPoint) {
                box.classList.add("show");
            } else {
                box.classList.remove("show");
            }
        });
    });
});
