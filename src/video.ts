const apiKey = "563492ad6f917000010000012b3ad65893e94c338d1e0b951fa5a507"

interface PexelsVideoFiles {
    link: string;
    width: number;
    height: number;
} 

interface PexelsVideo {
    image:string;
    video_files: PexelsVideoFiles[];
}

interface PexelsPopularVideoResponce {
    per_page: number;
    videos: PexelsVideo[];

}

class ApiManager {
    static async getVideoApiData( request: Request): Promise<any> {


    } 
}


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

    static render(jsonData: any) {
        console.log(jsonData)
        let videoData = jsonData["videos"];
        
        
        const htmlVideoCnt = document.getElementById('video-cnt'); 
        if (htmlVideoCnt == undefined) {
            throw new Error ("Video element is null")
        }
        videoData.forEach((element: any) => {
            let link = element["video_files"][0]["link"];

            let videoHTML = document.createElement("video");
            videoHTML.src = link;
            videoHTML.controls = true;
            htmlVideoCnt.append(videoHTML);            
        });
    }
}

const htmlButton  = document.getElementById('btn')
if (htmlButton == undefined) {
    throw new Error("btn element is null")
}

document.getElementById('btn')?.addEventListener("click", function (e: MouseEvent) {
    VideoManager.getVideoAPIData();
})
