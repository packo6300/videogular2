var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var core_2 = require('videogular2/core');
var controls_1 = require('videogular2/controls');
var overlay_play_1 = require('videogular2/overlay-play');
var CuePointsPlayer = (function () {
    function CuePointsPlayer() {
        this.cuePointData = {};
        this.sources = [
            {
                src: "http://static.videogular.com/assets/videos/videogular.mp4",
                type: "video/mp4"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.ogg",
                type: "video/ogg"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.webm",
                type: "video/webm"
            }
        ];
    }
    CuePointsPlayer.prototype.onEnterCuePoint = function ($event) {
        this.cuePointData = JSON.parse($event.text);
    };
    CuePointsPlayer.prototype.onExitCuePoint = function ($event) {
        this.cuePointData = {};
    };
    CuePointsPlayer = __decorate([
        core_1.Component({
            selector: 'cue-points-player',
            templateUrl: 'src/cue-points-player.html',
            directives: [
                core_2.VgPlayer,
                overlay_play_1.VgOverlayPlay,
                controls_1.VgControls,
                controls_1.VgPlayPause,
                controls_1.VgPlaybackButton,
                controls_1.VgScrubBar,
                controls_1.VgScrubBarCurrentTime,
                controls_1.VgScrubBarBufferingTime,
                controls_1.VgScrubBarCuePoints,
                controls_1.VgMute,
                controls_1.VgFullscreen,
                core_2.VgCuePoints,
                common_1.NgFor,
                common_1.NgIf
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CuePointsPlayer);
    return CuePointsPlayer;
})();
exports.CuePointsPlayer = CuePointsPlayer;
//# sourceMappingURL=cue-points-player.js.map