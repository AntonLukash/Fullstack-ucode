document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img[data-src]");
    const message = document.getElementById("message");
    let loadedImagesCount = 0;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute("data-src");
                img.setAttribute("src", src);
                img.removeAttribute("data-src");
                loadedImagesCount++;
                updateMessage();
                observer.unobserve(img);
            }
        });
    });

    images.forEach((img) => {
        observer.observe(img);
    });

    function updateMessage() {
        message.textContent = `Images loaded: ${loadedImagesCount}`;
        message.style.display = "block";

        if (loadedImagesCount === images.length) {
            message.classList.add("success");
            setTimeout(() => {
                message.style.display = "none";
            }, 3000);
        }
    }
});

