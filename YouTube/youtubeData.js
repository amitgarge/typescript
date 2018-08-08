var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Channel class
var Channel = /** @class */ (function () {
    function Channel(channel, isVerified, category, isSubscribed, isNotificationOn, subscribers) {
        var _this = this;
        this.channel = channel;
        this.isVerified = isVerified;
        this.category = category;
        this.isSubscribed = isSubscribed;
        this.isNotificationOn = isNotificationOn;
        this.subscribers = subscribers;
        this.getChannel = function () {
            console.log("Channel Name: " + _this.channel);
        };
        this.isChannelVerified = function () {
            console.log("Channel Verified: " + _this.isVerified["0"]);
        };
        this.getChannelCategory = function () {
            console.log("Channel Category: " + _this.category);
        };
        this.isChannelSubscribedByUser = function () {
            console.log("Is Channel Subscribed by user: " + _this.isSubscribed["0"]);
            if (_this.isSubscribed["0"] === "Yes") {
                _this.isChannelNotificationsOn();
            }
            else
                console.log("Are notifications ON: Channel Not subscribed");
        };
        this.isChannelNotificationsOn = function () {
            console.log("Are notifications ON: " + _this.isNotificationOn["0"]);
        };
        this.getTotalChannelSubscribers = function () {
            console.log("Total Channel Subscribers: " + _this.subscribers);
        };
        this.channel = channel;
        this.isVerified = isVerified;
        this.category = category;
        this.isSubscribed = isSubscribed;
        this.isNotificationOn = isNotificationOn;
        this.subscribers = subscribers;
    } //Constructor ends
    return Channel;
}()); //class 'Channel' ends
//class Video
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(
    //super class (Channel) Properties
    channel, isVerified, category, isSubscribed, isNotificationOn, subscribers, 
    //this class' Properties
    title, videoUrl, tags, publishedDate, length, descritpion, views, likes, dislikes, commentsCount, relatedVideos //object ends
    ) {
        var _this = 
        //calling super class constructor
        _super.call(this, channel, isVerified, category, isSubscribed, isNotificationOn, subscribers) || this;
        _this.channel = channel;
        _this.isVerified = isVerified;
        _this.category = category;
        _this.isSubscribed = isSubscribed;
        _this.isNotificationOn = isNotificationOn;
        _this.subscribers = subscribers;
        _this.title = title;
        _this.videoUrl = videoUrl;
        _this.tags = tags;
        _this.publishedDate = publishedDate;
        _this.length = length;
        _this.descritpion = descritpion;
        _this.views = views;
        _this.likes = likes;
        _this.dislikes = dislikes;
        _this.commentsCount = commentsCount;
        _this.relatedVideos = relatedVideos;
        _this.getTitle = function () {
            console.log("Title: " + _this.title);
        };
        _this.getVideoUrl = function () {
            console.log("Video url: " + _this.videoUrl);
        };
        _this.getVideoTags = function () {
            console.log("tags: " + _this.tags);
        };
        _this.getVideoPublishedDate = function () {
            console.log("Published Date: " + _this.publishedDate);
        };
        _this.getVideoLength = function () {
            console.log("Video Length: " + _this.length);
        };
        _this.getVideoDescription = function () {
            console.log("Description: " + _this.descritpion);
        };
        _this.getTotalViews = function () {
            console.log("Views: " + _this.views);
        };
        _this.getTotalLikes = function () {
            console.log("Likes: " + _this.likes);
        };
        _this.getTotalDislikes = function () {
            console.log("Dislikes: " + _this.dislikes);
        };
        _this.getCommentsCount = function () {
            console.log("Total Comments: " + _this.commentsCount);
        };
        _this.getRelatedVideoInformation = function () {
            console.log("\nRelated Videos");
            console.log("Title: " + _this.relatedVideos._title);
            console.log("Length: " + _this.relatedVideos._length);
            console.log("Channel: " + _this.relatedVideos._channel);
            console.log("Published Date: " + _this.relatedVideos._published);
            console.log("Total Views: " + _this.relatedVideos._views);
            console.log("Is Recommended for you? " + _this.relatedVideos._isRecommendedForYou["0"]);
            console.log("Is new? " + _this.relatedVideos._isNew["0"]);
            console.log("Is Live now? " + _this.relatedVideos._isLiveNow["0"]);
        };
        _this.getChannelInformaion = function () {
            //calling channel information methods
            _this.getChannel();
            _this.isChannelVerified();
            _this.getChannelCategory();
            _this.isChannelSubscribedByUser();
            _this.getTotalChannelSubscribers();
        };
        _this.getVideoInformation = function () {
            //calling video information methods
            _this.getTitle();
            _this.getVideoUrl();
            _this.getVideoTags();
            _this.getVideoPublishedDate();
            _this.getVideoLength();
            _this.getVideoDescription();
            _this.getTotalViews();
            _this.getTotalLikes();
            _this.getTotalDislikes();
            _this.getCommentsCount();
            _this.getRelatedVideoInformation();
        };
        //Initailizing this class' properties
        _this.title = title;
        _this.videoUrl = videoUrl;
        _this.tags = tags;
        _this.publishedDate = publishedDate;
        _this.length = length;
        _this.descritpion = descritpion;
        _this.views = views;
        _this.likes = likes;
        _this.dislikes = dislikes;
        _this.commentsCount = commentsCount;
        //initializing object - "relatedVideos"
        _this.relatedVideos._title = relatedVideos._title;
        _this.relatedVideos._length = relatedVideos._length;
        _this.relatedVideos._channel = relatedVideos._channel;
        _this.relatedVideos._published = relatedVideos._published;
        _this.relatedVideos._views = relatedVideos._views;
        _this.relatedVideos._isRecommendedForYou = relatedVideos._isRecommendedForYou;
        _this.relatedVideos._isNew = relatedVideos._isNew;
        _this.relatedVideos._isLiveNow = relatedVideos._isLiveNow;
        return _this;
    } //constructor ends
    return Video;
}(Channel)); //class 'Video' ends
//creating the object of Video class
var angular = new Video("Hitesh Choudhary", ["Yes", 3], "Science and Technology", ["No", 3], ["No", 3], "11K", "Introduction to Angular", "some url", "#angular", "22 Jul 2017", "22:00", "Introduction to Angular 4.0", 1212, 121, 0, 121, { _title: "Angular 2", _length: "2:00", _channel: "Hitesh Choudhary", _published: "22 Jul 2018", _views: 100, _isRecommendedForYou: ["Yes", 3], _isNew: ["No", 3], _isLiveNow: ["No", 3] });
//using 'switch' calling the desired function
var choice = prompt("Choose any one of the following: \n\n1. Get Channel Information \n2. Get Video Information\n\nEnter your choice:");
switch (choice) {
    case "1":
        angular.getChannelInformaion();
        break;
    case "2":
        angular.getVideoInformation();
        break;
    default:
        console.log("Enter a valid choice");
}
