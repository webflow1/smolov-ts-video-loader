import { VideoContainer } from "./VideoContainer.js";

const htmlButton = document.getElementById('btn');
if(htmlButton == undefined) {
    throw new Error("btn element is null");
}

htmlButton.addEventListener("click", function(e: MouseEvent) {
    VideoContainer.render();
})

