// Brandon Business Card
// Premium Apple Style

document.addEventListener("DOMContentLoaded", () => {

    // Fade in
    document.body.classList.add("fade-in");

    // Share Button
    const shareButton = document.getElementById("shareButton");

    if (navigator.share) {

        shareButton.addEventListener("click", async () => {

            try {

                await navigator.share({

                    title: "Brandon Chua",

                    text: "Director | Chua Tong Hin Marketing Sdn. Bhd.",

                    url: window.location.href

                });

            } catch (err) {

                console.log(err);

            }

        });

    } else {

        shareButton.addEventListener("click", () => {

            navigator.clipboard.writeText(window.location.href);

            shareButton.innerHTML = "✅ Link Copied";

            setTimeout(() => {

                shareButton.innerHTML = "📤 Share";

            },2000);

        });

    }

    // Button Ripple Effect

    document.querySelectorAll(".btn").forEach(button=>{

        button.addEventListener("click",function(e){

            const circle=document.createElement("span");

            const diameter=Math.max(this.clientWidth,this.clientHeight);

            circle.style.width=diameter+"px";

            circle.style.height=diameter+"px";

            circle.style.left=e.offsetX-diameter/2+"px";

            circle.style.top=e.offsetY-diameter/2+"px";

            circle.classList.add("ripple");

            this.appendChild(circle);

            setTimeout(()=>{

                circle.remove();

            },600);

        });

    });

});