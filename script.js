document.body.addEventListener("click", () => {
    document.getElementById("click").style.opacity = "0";
    document.getElementById("click").style.transform = "translateY(-15rem)";

    setTimeout(() => {
        document.getElementById("click").remove();
    }, 250);

    document.getElementById("audio").play();

    const container = document.querySelector('.container');

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');

        const startPos = Math.random() * window.innerWidth;
        raindrop.style.left = startPos + 'px';

        container.appendChild(raindrop);

        setTimeout(() => {
            raindrop.remove();
        }, 2500);
    }

    setInterval(createRaindrop, 100);

    var intervalI = 7;

    setInterval(() => {
        if (intervalI > 0) {
            setInterval(createRaindrop, 100);

            intervalI--;
        }
    }, 2000);

    var i = 1;

    const transparencyInterval = setInterval(() => {
        if (i > 0) {
            document.getElementById("style").innerText = `
                .raindrop {
                    background-color: rgba(255, 0, 0, ${i});
                }
            `;
            
            i = i - 0.1;
        }
    }, 5000);

    document.getElementById("audio").addEventListener("play", () => {
        setTimeout(() => {
            const titleContainer = document.createElement("div");
            titleContainer.className = "absolute-centre";
            titleContainer.classList.add("column");
            titleContainer.classList.add("text-center");
            document.body.appendChild(titleContainer);

            const header = document.createElement("h1");
            header.innerText = "HELL";
            header.style.fontFamily = "Bebas Neue";
            header.style.fontSize = "6rem";
            header.style.opacity = "0";
            header.style.transform = "translateY(15rem)";
            header.style.transition = "1s ease";
            titleContainer.appendChild(header);

            setTimeout(() => {
                header.style.opacity = "1";
                header.style.transform = "translateY(0rem)";

                setTimeout(() => {
                    header.style.opacity = "0";
                    header.style.transform = "translateY(-15rem)";

                    setTimeout(() => {
                        header.remove();

                        document.getElementById("style").innerText = `
                            .raindrop {
                                background-color: rgba(255, 0, 0, 1);
                                animation: falling ease-out 1.5s both reverse;
                            }
                        `;

                        setInterval(createRaindrop);
                        setInterval(createRaindrop);
                        setInterval(createRaindrop);
                    }, 1000);
                }, 15500);
            }, 250);
        }, 43750);
    })
});