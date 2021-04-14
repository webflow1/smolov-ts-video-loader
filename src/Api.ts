class HttpApi {
    static async request<T>(request: Request): Promise<HttpResponse<T>> {
        const response: HttpResponse<T> = await fetch(request);
        response.jsonBody = await response.json();
        return response;
    }
}

export interface PexelsVideoFiles {
    link: string;
    width: number;
    height: number;
}

export interface PexelsVideo {
    image: string;
    video_files: PexelsVideoFiles[];
}

export interface PexelsPopularVideoResponse {
    per_page: number;
    videos: PexelsVideo[];
}

export interface HttpResponse<T> extends Response {
    jsonBody?: T;
}


export interface IApi {
    getVideoAPIData<T>(request: Request): Promise<HttpResponse<T>>;
}

export class Api implements IApi {
    public async getVideoAPIData<T>(request: Request): Promise<HttpResponse<T>> {
        return HttpApi.request(request)
    }
}

// const PexelsApi = new Api();
const VideoJson = [{
    per_page: 1,
    videos: [
        {
            image: "somename1",
            video_files: [
                {
                    link: "somelink1920",
                    width: 1920;
                    height: 1080;
                },
                {
                    link: "somelink1280",
                    width: 1280;
                    height: 720;
                }
            ]
        },
        {
            image: "somename2",
            video_files: [
                {
                    link: "somelink1920",
                    width: 1920;
                    height: 1080;
                },
                {
                    link: "somelink1280",
                    width: 1280;
                    height: 720;
                }
            ]
        }
    ]
}]

// const someJSON = [{
//     name: "Ivan",
//     age: 25,
//     education: {
//         base: "school",
//         high: {
//             1: "some1",
//             2: "some2",
//         },
//     },
// }
// ]

// interface Person {
//     name: string
//     age: number
//     education: Education
// }
// interface Education {
//     base: string
//     hight: Univercity
// }

// interface Univercity {
//     1: string
//     2: string

// }
