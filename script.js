/* ==========================================
   Brandon Digital Card
   Premium Apple Interaction
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const shareButton = document.getElementById("shareButton");
    const card = document.querySelector(".card");

    // Create Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Native Share
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

                } catch (e) {

                    console.log("Share cancelled");

                }

            } else {

                copyLink();

            }

        });

    }

    // Ripple Press Effect

    document.querySelectorAll(".actionButton,.saveButton,.shareButton")
    .forEach(button=>{

        button.addEventListener("pointerdown",(e)=>{

            const ripple=document.createElement("span");

            ripple.className="ripple";

            const rect=button.getBoundingClientRect();

            ripple.style.left=(e.clientX-rect.left)+"px";

            ripple.style.top=(e.clientY-rect.top)+"px";

            button.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

    // Glass Spotlight

    if(card){

        card.addEventListener("pointermove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.setProperty("--x",x+"px");

            card.style.setProperty("--y",y+"px");

        });

    }

});

/* Copy Link */

function copyLink(){

    navigator.clipboard.writeText(window.location.href)

    .then(()=>{

        toast("Link copied");

    })

    .catch(()=>{

        toast("Unable to copy");

    });

}

/* Toast */

function toast(text){

    let t=document.createElement("div");

    t.className="toast";

    t.innerHTML=text;

    document.body.appendChild(t);

    requestAnimationFrame(()=>{

        t.classList.add("show");

    });

    setTimeout(()=>{

        t.classList.remove("show");

        setTimeout(()=>{

            t.remove();

        },300);

    },1800);

}