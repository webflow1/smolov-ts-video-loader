var apiKey = "563492ad6f917000010000012b3ad65893e94c338d1e0b951fa5a507";
var VideoManager = /** @class */ (function () {
    function VideoManager() {
    }
    VideoManager.getVideoAPIData = function () {
        var _this = this;
        var request = new Request("https://api.pexels.com/videos/popular?per_page=3", {
            method: "GET",
            headers: {
                "Authorization": apiKey
            }
        });
        fetch(request)
            .then(function (resp) { return resp.json(); })
            .then(function (jsonResp) { return _this.render(jsonResp); })["catch"](function (err) {
            console.log("Pexels backend error: " + err);
        });
    };
    VideoManager.render = function (jsonData) {
        console.log(jsonData);
        var videoData = jsonData["videos"][0]["video_files"][2];
        console.log(videoData);
        videoData.forEach(function (element) {
            var videoHTML = document.createElement("video");
            videoHTML.src = element.link;
            document.getElementById('video-cnt').append(videoHTML);
        });
    };
    return VideoManager;
}());
document.getElementById('btn').addEventListener("click", function (e) {
    VideoManager.getVideoAPIData();
});
