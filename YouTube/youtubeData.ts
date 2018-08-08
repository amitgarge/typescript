//Channel class
class Channel {
    constructor(
        protected channel: string,
        protected isVerified: [string, number],
        protected category: string,
        protected isSubscribed: [string, number],
        protected isNotificationOn: [string, number],
        protected subscribers: string
    ) {
        this.channel = channel;
        this.isVerified = isVerified;
        this.category = category;
        this.isSubscribed = isSubscribed;
        this.isNotificationOn = isNotificationOn;
        this.subscribers = subscribers;
    } //Constructor ends

    getChannel = () => {
        console.log("Channel Name: " + this.channel);
    }
    isChannelVerified = () => {
        console.log("Channel Verified: " + this.isVerified["0"]);
    }
    getChannelCategory = () => {
        console.log("Channel Category: " + this.category);
    }

    isChannelSubscribedByUser = () => {
        console.log("Is Channel Subscribed by user: " + this.isSubscribed["0"]);
        if (this.isSubscribed["0"] === "Yes") {
            this.isChannelNotificationsOn();
        }
        else
            console.log("Are notifications ON: Channel Not subscribed");
    }

    isChannelNotificationsOn = () => {
        console.log("Are notifications ON: " + this.isNotificationOn["0"]);
    }

    getTotalChannelSubscribers = () => {
        console.log("Total Channel Subscribers: " + this.subscribers);
    }
}//class 'Channel' ends

//class Video
class Video extends Channel {
    constructor(
        //super class (Channel) Properties
        protected channel: string,
        protected isVerified: [string, number],
        protected category: string,
        protected isSubscribed: [string, number],
        protected isNotificationOn: [string, number],
        protected subscribers: string,

        //this class' Properties
        protected title: string,
        protected videoUrl: string,
        protected tags: string,
        protected publishedDate: string,
        protected length: string,
        protected descritpion: string,
        protected views: number,
        protected likes: number,
        protected dislikes: number,
        protected commentsCount: number,
        protected relatedVideos: {
            //Object related videos
            _title: string;
            _length: string;
            _channel: string;
            _published: string;
            _views: number;
            _isRecommendedForYou: [string, number];
            _isNew: [string, number];
            _isLiveNow: [string, number];
        }//object ends
    ) {
        //calling super class constructor
        super(channel, isVerified, category, isSubscribed, isNotificationOn, subscribers);

        //Initailizing this class' properties
        this.title = title;
        this.videoUrl = videoUrl;
        this.tags = tags;
        this.publishedDate = publishedDate;
        this.length = length;
        this.descritpion = descritpion;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.commentsCount = commentsCount;

        //initializing object - "relatedVideos"
        this.relatedVideos._title = relatedVideos._title;
        this.relatedVideos._length = relatedVideos._length;
        this.relatedVideos._channel = relatedVideos._channel;
        this.relatedVideos._published = relatedVideos._published;
        this.relatedVideos._views = relatedVideos._views;
        this.relatedVideos._isRecommendedForYou = relatedVideos._isRecommendedForYou;
        this.relatedVideos._isNew = relatedVideos._isNew;
        this.relatedVideos._isLiveNow = relatedVideos._isLiveNow;

    }//constructor ends

    getTitle = () => {
        console.log("Title: " + this.title);
    }
    getVideoUrl = () => {
        console.log("Video url: " + this.videoUrl);
    }

    getVideoTags = () => {
        console.log("tags: " + this.tags);
    }

    getVideoPublishedDate = () => {
        console.log("Published Date: " + this.publishedDate);
    }
    getVideoLength = () => {
        console.log("Video Length: " + this.length);
    }
    getVideoDescription = () => {
        console.log("Description: " + this.descritpion);
    }
    getTotalViews = () => {
        console.log("Views: " + this.views);
    }
    getTotalLikes = () => {
        console.log("Likes: " + this.likes);
    }
    getTotalDislikes = () => {
        console.log("Dislikes: " + this.dislikes);
    }
    getCommentsCount = () => {
        console.log("Total Comments: " + this.commentsCount);
    }
    getRelatedVideoInformation = () => {
        console.log("\nRelated Videos");
        console.log("Title: " + this.relatedVideos._title);
        console.log("Length: " + this.relatedVideos._length);
        console.log("Channel: " + this.relatedVideos._channel);
        console.log("Published Date: " + this.relatedVideos._published);
        console.log("Total Views: " + this.relatedVideos._views);
        console.log("Is Recommended for you? " + this.relatedVideos._isRecommendedForYou["0"]);
        console.log("Is new? " + this.relatedVideos._isNew["0"]);
        console.log("Is Live now? " + this.relatedVideos._isLiveNow["0"]);
    }
    getChannelInformaion = () => {
        //calling channel information methods
        this.getChannel();
        this.isChannelVerified();
        this.getChannelCategory();
        this.isChannelSubscribedByUser();
        this.getTotalChannelSubscribers();
    }

    getVideoInformation = () => {
        //calling video information methods
        this.getTitle();
        this.getVideoUrl();
        this.getVideoTags();
        this.getVideoPublishedDate();
        this.getVideoLength();
        this.getVideoDescription();
        this.getTotalViews();
        this.getTotalLikes();
        this.getTotalDislikes();
        this.getCommentsCount();
        this.getRelatedVideoInformation();
    }
}//class 'Video' ends

//creating the object of Video class
let angular = new Video("Hitesh Choudhary", ["Yes", 3], "Science and Technology", ["No", 3], ["No", 3], "11K", "Introduction to Angular", "some url", "#angular", "22 Jul 2017", "22:00", "Introduction to Angular 4.0", 1212, 121, 0, 121, { _title: "Angular 2", _length: "2:00", _channel: "Hitesh Choudhary", _published: "22 Jul 2018", _views: 100, _isRecommendedForYou: ["Yes", 3], _isNew: ["No", 3], _isLiveNow: ["No", 3] });

//using 'switch' calling the desired function
let choice = prompt("Choose any one of the following: \n\n1. Get Channel Information \n2. Get Video Information\n\nEnter your choice:");

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