// ======================================
// Brandon Chua Digital Business Card
// Apple Inspired
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const shareButton = document.getElementById("shareButton");

    // Native Share API
    if (shareButton) {

        shareButton.addEventListener("click", async () => {

            const shareData = {
                title: "Brandon Chua",
                text: "Director | Chua Tong Hin Marketing Sdn. Bhd.",
                url: window.location.href
            };

            if (navigator.share) {

                try {

                    await navigator.share(shareData);

                } catch (err) {

                    console.log("Share cancelled.");

                }

            } else {

                copyLink();

            }

        });

    }

    // Button press animation

    document.querySelectorAll(".actionButton,.saveButton,.shareButton")
        .forEach(button => {

            button.addEventListener("touchstart", () => {

                button.style.transform = "scale(.96)";

            }, { passive: true });

            button.addEventListener("touchend", () => {

                button.style.transform = "";

            });

            button.addEventListener("mouseleave", () => {

                button.style.transform = "";

            });

        });

});

// ===============================
// Copy URL
// ===============================

function copyLink() {

    navigator.clipboard.writeText(window.location.href)
        .then(() => {

            showToast("Link copied");

        })
        .catch(() => {

            prompt("Copy this link:", window.location.href);

        });

}

// ===============================
// Toast
// ===============================

function showToast(message) {

    let toast = document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {

        toast.classList.add("show");

    });

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 1800);

}