const apiKey = "563492ad6f917000010000012b3ad65893e94c338d1e0b951fa5a507"

interface PexelsVideoFiles {
    link: string;
    width: number;
    height: number;
}

interface PexelsVideo {
    image: string;
    video_files: PexelsVideoFiles[];
}

interface PexelsPopularVideoResponce {
    per_page: number;
    videos: PexelsVideo[];

}

class ApiManager {
    static async getVideoApiData<T>(request: Request): Promise<T> {
        const responce = await fetch(request);
        const body = await responce.json();
        return body;
    }
}


class VideoManager {

    static render() {

        let request: Request = new Request (
            "https://api.pexels.com/videos/popular?per_page=3",
            {
                method: "GET",
                headers: {
                    "Authorization": apiKey
                }
            }
        );

        ApiManager.getVideoApiData<PexelsPopularVideoResponce>(request)
            .then((response: PexelsPopularVideoResponce) => {
                console.log(response); 
                const htmlVideoCnt = <HTMLDivElement>document.getElementById('video-cnt');
                if (htmlVideoCnt == undefined) {
                    throw new Error("Video element is null")
                }
                
                response.videos.forEach((element: PexelsVideo) => {
                    let link = element.video_files[0].link;
                    this.renderVideo(link, htmlVideoCnt)
                })
            });


}

static renderVideo(link: string, parentHTML: HTMLDivElement): void {
    let videoHTML = document.createElement("video");
    videoHTML.controls = true;
    videoHTML.src = link;
    parentHTML.appendChild(videoHTML);

}
}


const htmlButton = document.getElementById('btn')
if (htmlButton == undefined) {
    throw new Error("btn element is null")
}

document.getElementById('btn')?.addEventListener("click", function (e: MouseEvent) {
    VideoManager.render();
})
