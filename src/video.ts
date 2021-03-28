const apiKey = "563492ad6f917000010000012b3ad65893e94c338d1e0b951fa5a507"

class VideoManager {


    static getVideoAPIData() {
        let request: Request = new Request(
            "https://api.pexels.com/videos/popular?per_page=3",
            {
                method: "GET",
                headers: {
                    "Authorization": apiKey
                }
            });


        fetch(request)
            .then(resp => resp.json())
            .then(jsonResp => this.render(jsonResp))
            .catch((err) => {
                console.log(`Pexels backend error: ${err}`);
            });

    }

    static render(jsonData) {
        console.log(jsonData);
        let videoData = jsonData["videos"][0]["video_files"][2];
        console.log(videoData)

        videoData.forEach((element) => {
            let videoHTML = document.createElement("video");
            videoHTML.src = element.link;
            document.getElementById('video-cnt').append(videoHTML);
        });

    }
}


document.getElementById('btn').addEventListener("click", function (e: MouseEvent) {
    VideoManager.getVideoAPIData();
})
