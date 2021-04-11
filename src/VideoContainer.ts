import { Api, HttpResponse, IApi, PexelsPopularVideoResponse, PexelsVideo } from "./Api.js";

const apiKey = "563492ad6f917000010000012b3ad65893e94c338d1e0b951fa5a507";



export class VideoContainer {
    private static pexelsApi: IApi = new Api();
    
    static render() {
        let request: Request = new Request(
            "https://api.pexels.com/videos/popular?per_page=3",
            {
                method: "GET",
                headers: {
                    "Authorization": apiKey
                },
            }
        );

        this.pexelsApi.getVideoAPIData<PexelsPopularVideoResponse>(request)
            .then((response: HttpResponse<PexelsPopularVideoResponse>) => {
                console.log(response);

                const htmlVideoCnt = <HTMLDivElement>document.getElementById('video-cnt');
                if(htmlVideoCnt == undefined) {
                    throw new Error("Video-cnt element is null");
                }

                if(response.status == 200) {
                    response.jsonBody?.videos.forEach((element: PexelsVideo) => {
                        let link = element.video_files[0].link;
                        this.renderVideo(link, htmlVideoCnt)
                    })
                } else {
                    throw new Error("unsuccessful status code");
                }
            })
            .catch(err => console.log(err));
    }

    static renderVideo(link: string, parentHTML: HTMLDivElement): void {
        let videoHTML = document.createElement("video");
        videoHTML.controls = true;
        videoHTML.src = link;
        parentHTML.appendChild(videoHTML);
    }
}
