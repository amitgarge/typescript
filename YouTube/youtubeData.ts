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
        
        protected Usercomment:{
            username?:string,
            comment?:string,
            date?: string,
            likes?:number,
            dislikes?:number,
            reply_count:number,
            
            reply:{   
                username?:string,
                reply_message?:string,
                reply_date:string,
                reply_likes?:number,
                reply_dislikes?:number
            }
        },
        
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

        this.Usercomment.username=Usercomment.username;
        this.Usercomment.comment=Usercomment.comment;
        this.Usercomment.date=Usercomment.date;
        this.Usercomment.likes=Usercomment.likes;
        this.Usercomment.dislikes=Usercomment.dislikes;
        this.Usercomment.reply_count=Usercomment.reply_count;

        this.Usercomment.reply.username=Usercomment.reply.username;
        this.Usercomment.reply.reply_message=Usercomment.reply.reply_message;
        this.Usercomment.reply.reply_date=Usercomment.reply.reply_date;
        this.Usercomment.reply.reply_likes=Usercomment.reply.reply_likes;
        this.Usercomment.reply.reply_dislikes=Usercomment.reply.reply_dislikes;

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

    getUserComments=()=>{
        console.log("\nComments: ");
        console.log("User name: " + this.Usercomment.username);
        console.log("Comment: " + this.Usercomment.comment);
        console.log("Date: "+this.Usercomment.date);
        console.log("Likes: " + this.Usercomment.likes);
        console.log("Dislikes: " + this.Usercomment.dislikes);
        console.log("No. of replies: "+this.Usercomment.reply_count);
        
        console.log("\nComment Replies:");
        console.log("User name: " + this.Usercomment.reply.username);
        console.log("Reply: "+ this.Usercomment.reply.reply_message);
        console.log("Date: "+ this.Usercomment.reply.reply_date);
        console.log("Likes: " + this.Usercomment.reply.reply_likes);
        console.log("Dislikes: " + this.Usercomment.reply.reply_dislikes);        
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

    getAll_Video_Related_Information = () => {
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

        this.getChannel();
        this.isChannelVerified();
        this.getChannelCategory();
        this.isChannelSubscribedByUser();
        this.getTotalChannelSubscribers();
        this.getUserComments();
        this.getRelatedVideoInformation();
    }
}//class 'Video' ends

//creating the object of Video class
let angular = new Video("Hitesh Choudhary", ["Yes", 3], "Science and Technology", 
              ["No", 3], ["No", 3], "11K", "Introduction to Angular", "some url", 
              "#angular", "22 Jul 2017", "22:00", "Introduction to Angular 4.0", 1212, 121, 0, 121,
              { 
                username:"Sachin Kale", 
                comment:"Nice Information,keep it up !", date:"23 Jul 2017",
                likes: 1,dislikes: 0,reply_count: 1,
                reply:{ 
                    username:"Hitesh Choudhary",
                    reply_message:"Thanks for watching!",
                    reply_date:"23 Jul 2017",
                    reply_likes:1,
                    reply_dislikes:0
                }
             }, 
             { _title: "Angular 2", _length: "2:00", _channel: "Hitesh Choudhary", 
                _published: "22 Jul 2018", _views: 100, _isRecommendedForYou: ["Yes", 3], 
                _isNew: ["No", 3], _isLiveNow: ["No", 3] 
             });

//calling method to get all information about video and channel
angular.getAll_Video_Related_Information();