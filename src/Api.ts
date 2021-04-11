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

export class Api implements IApi{
    public async getVideoAPIData<T>(request: Request): Promise<HttpResponse<T>> {
        return HttpApi.request(request)
    }
}

// const PexelsApi = new Api();

