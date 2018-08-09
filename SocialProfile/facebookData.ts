//Facebook class
class Facebook {
    constructor(

        protected friends_count: {
            //Friends, followers etc. count
            no_of_friends: number,
            current_city_friends: number,
            no_of_follerwers: number,
            no_of_follwing: number
        },

        protected friend_info: {
            //Information about a friend
            friend_name: string,
            friends_total_friends?: number,
            mutual_friends?: number,
            friend_profile_url: string,
            friend_profile_photo_url: string,
            friend_no_of_followers?: number;
        },

        protected family_members: {
            //Family member information
            family_member_name?: string,
            family_member_profile_photo?: string,
            family_member_profile_url?: string,
            realtion?: string
        },

        protected blood_donations: {
            //blood donation information
            blood_group?: string,
            have_donated_blood?: boolean
        },

        protected cover_photo_url?: string,
        protected profile_photo_url?: string,
        protected bio?: string,
        protected about?: string,

        protected nick_name?: string,
        protected birth_name?: string,
        protected maiden_name?: string,
        protected alternative_spelling?: string,
        protected married_name?: string,
        protected father_name?: string,
        protected former_name?: string,
        protected name_with_title?: string,
        protected other_name?: string,
        protected name_showing_on_profile?: boolean,

        protected favorite_quotes?: string,
        protected languages_known?: string[],
        protected religious_views?: string,
        protected political_views?: string,
        protected relationship_status?: string,
        protected interested_in?: string
    ) {
        this.cover_photo_url = cover_photo_url;
        this.profile_photo_url = profile_photo_url;
        this.bio = bio;
        this.about = about;

        this.nick_name = nick_name;
        this.birth_name = birth_name;
        this.maiden_name = maiden_name;
        this.alternative_spelling = alternative_spelling;
        this.married_name = married_name;
        this.father_name = father_name;
        this.former_name = former_name,
        this.name_with_title = name_with_title;
        this.other_name = other_name;
        this.name_showing_on_profile = name_showing_on_profile;
        this.favorite_quotes = favorite_quotes;
        this.languages_known = languages_known;
        this.religious_views = religious_views;
        this.political_views = political_views;
        this.relationship_status = relationship_status;
        this.interested_in = interested_in;

        this.blood_donations.blood_group = blood_donations.blood_group;
        this.blood_donations.have_donated_blood = blood_donations.have_donated_blood;

        this.family_members.family_member_name = family_members.family_member_name;
        this.family_members.family_member_profile_photo = family_members.family_member_profile_photo;
        this.family_members.family_member_profile_url = family_members.family_member_profile_url;
        this.family_members.realtion = family_members.realtion;

        this.friends_count.current_city_friends = friends_count.current_city_friends;
        this.friends_count.no_of_follerwers = friends_count.no_of_follerwers;
        this.friends_count.no_of_follwing = friends_count.no_of_follerwers;
        this.friends_count.no_of_friends = friends_count.no_of_friends;

        this.friend_info.friend_name = friend_info.friend_name;
        this.friend_info.friend_profile_photo_url = friend_info.friend_profile_photo_url;
        this.friend_info.friend_profile_url = friend_info.friend_profile_url;
        this.friend_info.friends_total_friends = friend_info.friends_total_friends;
        this.friend_info.mutual_friends = friend_info.mutual_friends;
        this.friend_info.friend_no_of_followers = friend_info.friend_no_of_followers;

    }//construcor ends

    getCoverPhoto = () => {
        if (this.cover_photo_url)
            console.log("\nCover Photo: " + this.cover_photo_url);
        else
            console.log("\nCover Photo: Hidden or unavailable");
    }

    getProfilePhoto = () => {
        if (this.profile_photo_url)
            console.log("\nProfile Picture: " + this.profile_photo_url);
        else
            console.log("\nProfile Picture: Hidden or unavailable");
    }

    getBio = () => {
        if (this.bio)
            console.log("\nBio: " + this.bio);
        else
            console.log("\nBio: Hidden or unavailable");
    }

    getAbout = () => {
        if (this.about)
            console.log("\nAbout: " + this.about);
        else
            console.log("\nAbout: Hidden or unavailable");
    }
    getNick_Name = () => {
        if (this.nick_name)
            console.log("\nNick Name: " + this.nick_name);
        else
            console.log("\nNick Name: Hidden or unavailable");

    }
    getBirth_Name = () => {
        if (this.birth_name)
            console.log("Birth Name: " + this.birth_name);
        else
            console.log("Birth Name: Hidden or unavailable");
    }
    getMaiden_Name = () => {
        if (this.maiden_name)
            console.log("Maiden Name: " + this.maiden_name);
        else
            console.log("Maiden Name: Hidden or unavailable");
    }
    getAlternativeSpelling = () => {
        if (this.alternative_spelling)
            console.log("Alternative Spelling of name: " + this.alternative_spelling);
        else
            console.log("Alternative Spelling: " + this.alternative_spelling);
    }
    getMarried_Name = () => {
        if (this.married_name)
            console.log("Married Name: " + this.married_name);
        else
            console.log("Maiden Name: " + this.maiden_name);
    }

    getFather_Name = () => {
        if (this.father_name)
            console.log("Father's Name: " + this.father_name);
        else
            console.log("Father's Name: Hidden or unavailable");
    }

    getFormer_Name = () => {
        if (this.former_name)
            console.log("Former Name: " + this.former_name);
        else
            console.log("Former Name: Hidden or unavailable")
    }

    getName_with_Title = () => {
        if (this.name_with_title)
            console.log("Name with title: " + this.name_with_title);
        else
            console.log("Name with title: Hidden or unavailable");
    }

    getOther_Name = () => {
        if (this.other_name)
            console.log("Other Name: ") + this.other_name;
        else
            console.log("Other Name: Hidden or unavailable");
    }

    isName_Visible_on_Profile = () => {
        if (this.nick_name || this.birth_name || this.maiden_name || this.alternative_spelling ||
            this.married_name || this.father_name || this.former_name ||
            this.name_with_title || this.other_name)

            console.log("Is nickname/birthname etc. visible on profile: " + this.name_showing_on_profile);
    }

    getFavorite_Quotes = () => {
        if (this.favorite_quotes)
            console.log("\nFavorite Quotes: " + this.favorite_quotes);
        else
            console.log("\nFavorite Quotes: Hidden or Unavailable");
    }

    getKnown_Languages = () => {
        if (this.languages_known)
            console.log("\nLanguages Known: " + this.languages_known.toString());
        else
            console.log("\nLanguages Known: Hidden or unavailable")
    }

    getReligiuos_Views = () => {
        if (this.religious_views)
            console.log("\nReligious Views: " + this.religious_views);
        else
            console.log("\nReligious Views: Hidden or unavailable");
    }

    getPolitical_Views = () => {
        if (this.political_views)
            console.log("\nPolitical Views: " + this.political_views);
        else
            console.log("\nPolitical Views: Hidden or unavailable")
    }

    getRelationship_Status = () => {
        if (this.relationship_status)
            console.log("\nRelationship Status: " + this.relationship_status);
        else
            console.log("\nRelationship status: Hidden or unavailable");
    }

    getInterested_In = () => {
        if (this.interested_in)
            console.log("\nInterested in: " + this.interested_in);
        else
            console.log("\nInterested in: Hidden or unavailable")
    }

    getBlood_DonationDetails = () => {
        if (this.blood_donations.blood_group) {
            console.log("\nBlood Group: " + this.blood_donations.blood_group);
            console.log("Have donated blood? " + this.blood_donations.have_donated_blood);
        }
        else
            console.log("\nBlood Group: Hidden or unavailable")
    }

    getFamily_Member_Details = () => {

        if (this.family_members.family_member_name) {
            console.log("\nFamily member details- ");
            console.log("Name: " + this.family_members.family_member_name);
            console.log("Relation: " + this.family_members.realtion);
            console.log("Profile url: " + this.family_members.family_member_profile_url);
            console.log("Profile Picture url: " + this.family_members.family_member_profile_url);
        }
        else
            console.log("\nFamily member details- Hidden or unavailable");
    }

    getFriends_Count = () => {
        console.log("\nTotal friends: " + this.friends_count.no_of_friends);
        console.log("Current City Friends: " + this.friends_count.current_city_friends);
        console.log("No. of followers: " + this.friends_count.no_of_follerwers);
        console.log("No. of following: " + this.friends_count.no_of_follwing);
    }

    getFriend_Info = () => {
        console.log("\nFriend Information-");
        console.log("Name: " + this.friend_info.friend_name);
        console.log("No. of friends: " + this.friend_info.friends_total_friends);
        console.log("Mutual Friends: " + this.friend_info.mutual_friends);
        console.log("Profile Picture url: " + this.friend_info.friend_profile_photo_url);
        console.log("Profile url: " + this.friend_info.friend_profile_url);
        console.log("No. of followers: " + this.friend_info.friend_no_of_followers);
    }

    getAll_FacbookRelated_Information = () => {

        //this methods calls all of the above methods...
        this.getCoverPhoto();
        this.getProfilePhoto();
        this.getBio();
        this.getAbout();
        this.getNick_Name();
        this.getBirth_Name();
        this.getMaiden_Name();
        this.getAlternativeSpelling();
        this.getMarried_Name();
        this.getFather_Name();
        this.getFormer_Name();
        this.getName_with_Title();
        this.getOther_Name();
        this.isName_Visible_on_Profile();
        this.getFavorite_Quotes();
        this.getKnown_Languages();
        this.getReligiuos_Views();
        this.getPolitical_Views();
        this.getRelationship_Status();
        this.getInterested_In();
        this.getBlood_DonationDetails();
        this.getFamily_Member_Details();
        this.getFriends_Count();
        this.getFriend_Info();
    }

}//'Facebook' class ends

class User_Information extends Facebook {
    //this class includes user's personal information
    constructor(
        //super class properties
        protected cover_photo_url: string,
        protected profile_photo_url: string,
        protected bio: string,
        protected about: string,
        protected nick_name: string,
        protected birth_name: string,
        protected maiden_name: string,
        protected alternative_spelling: string,
        protected married_name: string,
        protected father_name: string,
        protected former_name: string,
        protected name_with_title: string,
        protected other_name: string,
        protected name_showing_on_profile: boolean,
        protected favorite_quotes: string,
        protected languages_known: string[],
        protected religious_views: string,
        protected political_views: string,
        protected relationship_status: string,
        protected interested_in: string,
        protected blood_donations: {
            blood_group: string,
            have_donated_blood: boolean
        },
        protected family_members: {
            family_member_name: string,
            family_member_profile_photo: string,
            family_member_profile_url: string,
            realtion: string
        },
        protected friends_count: {
            no_of_friends: number,
            current_city_friends: number,
            no_of_follerwers: number,
            no_of_follwing: number
        },
        protected friend_info: {
            friend_name: string,
            friends_total_friends: number,
            mutual_friends: number,
            friend_profile_url: string,
            friend_profile_photo_url: string,
            friend_no_of_followers: number
        },

        //sub class properties
        protected name: string,
        protected date_of_birth: any,
        protected gender: string,
        protected current_city: string,
        protected home_town: string,

        protected work: {
            //current work details
            designation?: string,
            name_of_office?: string,
            location?: string,
            working_since?: string
        },
        protected contact_information: {
            mobilephone: number[],
            email: string[],
            facebook_url: string,
            phone_no?: number[]
        },
        protected Address: {
            address?: string,
            town_or_city?: string,
            zip?: number,
            neighbourhood?: string
        },
        protected previous_work: [{
            //previous work details
            designation?: string,
            name_of_office?: string,
            location?: string,
            working_since?: string
        }, {
                designation?: string,
                name_of_office?: string,
                location?: string,
                working_since?: string
            }],
        protected website_and_social_links: {
            website?: string[],
            public_Key?: string,
            social_link: {
                instagram?: string,
                linkedin?: string,
                twitter?: string
            }
        },
        protected university: {
            degree?: string,
            name_of_the_college?: string,
            location?: string,
            completed_in?: string
        },
        protected other_schools: [{
            name_of_the_school?: string,
            location?: string,
            completed_in?: string
        }, {
                name_of_the_school?: string,
                location?: string,
                completed_in?: string
            }],

        protected professional_skills?: string[],

        protected high_school?: {
            name_of_the_school?: string,
            location?: string,
            completed_in?: string
        },
        protected other_cities?: string[]

    ) {
        //constructor definition starts 
        super(
            friends_count, friend_info,
            family_members, blood_donations,
            cover_photo_url,
            profile_photo_url,
            bio, about, nick_name,
            birth_name, maiden_name,
            alternative_spelling,
            maiden_name,
            father_name, former_name,
            name_with_title, other_name, name_showing_on_profile,
            favorite_quotes, languages_known,
            religious_views,
            political_views,
            relationship_status, interested_in
        );

        this.name = name;
        this.date_of_birth = date_of_birth;
        this.gender = gender;
        this.current_city = current_city;
        this.home_town = home_town;
        this.other_cities = other_cities;
        this.work.designation = work.designation;
        this.work.name_of_office = work.name_of_office;
        this.work.location = work.location;
        this.work.working_since = work.working_since;

        for (let work of this.previous_work) {
            work.designation = work.designation;
            work.name_of_office = work.name_of_office;
            work.location = work.location;
            work.working_since = work.working_since;
        }
        this.professional_skills = professional_skills;

        this.university.degree = university.degree;
        this.university.name_of_the_college = university.name_of_the_college;
        this.university.location = university.location;
        this.university.completed_in = university.completed_in;

        this.high_school = high_school;

        for (let school of this.other_schools) {
            school.name_of_the_school = school.name_of_the_school;
            school.location = school.location;
            school.completed_in = school.completed_in;
        }

        this.contact_information.mobilephone = contact_information.mobilephone;
        this.contact_information.email = contact_information.email;
        this.contact_information.facebook_url = contact_information.facebook_url;
        this.contact_information.phone_no = contact_information.phone_no;
        this.Address.address = Address.address;
        this.Address.town_or_city = Address.town_or_city;
        this.Address.zip = Address.zip;
        this.Address.neighbourhood = Address.neighbourhood;

        this.website_and_social_links.website = website_and_social_links.website;
        this.website_and_social_links.public_Key = website_and_social_links.public_Key;

        this.website_and_social_links.social_link.instagram = website_and_social_links.social_link.instagram;
        this.website_and_social_links.social_link.linkedin = website_and_social_links.social_link.linkedin;
        this.website_and_social_links.social_link.twitter = website_and_social_links.social_link.twitter;

    }//constructor ends

    //Methods Definitions start
    getName = () => {
        console.log("\nName: " + this.name);
    }

    getDate_Of_Birth = () => {
        //"Date of birth" should in the format of 'mm-dd-yyyy'
        console.log("Date of birth: ");

        let dob = new Date(this.date_of_birth);
        let month = String(dob.getMonth() + 1);
        let day = String(dob.getDate());
        const year = String(dob.getFullYear());

        console.log(day + "/" + month + "/" + year);
        console.log("Age: " + this.getAge(dob));    //getAge(date) is called here
    }

    getAge = (dob: Date): number => {

        //calculating the age
        let today = new Date();
        let birthDate = dob;
        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    getGender = () => {
        console.log("Gender: " + this.gender);
    }

    getCurrent_City = () => {
        console.log("Current City: " + this.current_city);
    }

    getHome_Town = () => {
        console.log("Home Town: " + this.home_town);
    }

    getOther_Cities = () => {
        if (this.other_cities)
            console.log("\nPlaces liven in: " + this.other_cities.toString());
        else
            console.log("\nPlaces lived in: Hidden or unavailable.");

    }

    getWork = () => {
        if (this.work) {
            console.log("\nCurrent Work Details: ");

            if (this.work.designation)
                console.log("\nDesignation: " + this.work.designation);
            else
                console.log("Designation: Hidden or unavailable");

            if (this.work.name_of_office)
                console.log("\nName of the Office/Company: " + this.work.name_of_office + ", " + this.work.location);
            else
                console.log("\nName of the office/Company: Hidden or unavailable");

            if (this.work.working_since)
                console.log("\nWorking here since: " + this.work.working_since);
            else
                console.log("\nWorking since: Hidden or unavailable");
        }
        else
            console.log("\nCurrent Work Details: Hidden or unavailable");
    }

    getPrevious_Work = () => {
        if (this.previous_work) {
            console.log("\nPrevious Work details: ");
            for (const work of this.previous_work) {

                if (work.designation)
                    console.log("\nDesignation: " + work.designation);
                else
                    console.log("Designation: Hidden or unavailable");

                if (work.name_of_office)
                    console.log("Name of the Office/Company: " + work.name_of_office + ", " + work.location);
                else
                    console.log("Name of the Office/Company: Hidden or unavailable");

                if (work.working_since)
                    console.log("Working here since: " + work.working_since);
                else
                    console.log("Working here since: Hidden or unavailable");
            }
        } else
            console.log("\nPrevious work details: Hidden or unavailable");
    }

    getProfessional_Skills = () => {
        if (this.professional_skills)
            console.log("\nProfessional Skills: " + this.professional_skills);
        else
            console.log("\nProfessional Skills: Hidden or unavailable");
    }

    getUniversity = () => {
        if (this.university) {
            console.log("\nUniversity details: ");
            if (this.university.degree)
                console.log("\nDegree: " + this.university.degree);
            else
                console.log("\nDegree: Hidden or unavailable");

            if (this.university.name_of_the_college)
                console.log("\nName of the college: " + this.university.name_of_the_college + ", " + this.university.location);
            else
                console.log("\nName of the college: Hidden or unavailable");

            if (this.university.completed_in)
                console.log("\nYear: " + this.university.completed_in);
            else
                console.log("\nYear: Hidden or unavailable");
        } else
            console.log("\nUniversity Details: Hidden or unavailable");
    }

    getHigh_School = () => {
        if (this.high_school) {
            console.log("\nHigh School details: ");
            if (this.high_school.name_of_the_school)
                console.log("\nName of the school: " + this.high_school.name_of_the_school + ", " + this.high_school.location);
            else
                console.log("\nName of the school: Hidden or unavailable");

            if (this.high_school.completed_in)
                console.log("Year: " + this.high_school.completed_in);
            else
                console.log("Year: Hidden or unavailable");
        } else
            console.log("\nHigh school details: Hidden or unavailable");
    }

    getOther_Schools = () => {
        if (this.other_schools) {
            console.log("\nPrevious School details: ");

            for (const school of this.other_schools) {
                if (school.name_of_the_school)
                    console.log("\nName of the school: " + school.name_of_the_school + ", " + school.location);
                else
                    console.log("Name of the school: Hidden or unavailable");

                if (school.completed_in)
                    console.log("Year: " + school.completed_in);
                else
                    console.log("Year: Hidden or unavailable");
            }
        } else
            console.log("\nPrevious School details: Hidden or unavailable");
    }

    getContact_Information = () => {

        console.log("\nContact Information: ");
        console.log("Mobile no(s). " + this.contact_information.mobilephone.toString());
        console.log("Email ID(s): " + this.contact_information.email.toString());
        console.log("Facebook URL: " + this.contact_information.facebook_url);
        if (this.contact_information.phone_no)
            console.log("\nPhone no: " + this.contact_information.phone_no.toString());
        else
            console.log("\nPhone no: Hidden or unavailable");
    }

    getAddress = () => {
        if (this.Address) {
            if (this.Address.address)
                console.log("\nAddress: " + this.Address.address + ", " + this.Address.town_or_city);
            else
                console.log("\nAddress: Hidden or unavaiable")
            if (this.Address.zip)
                console.log("Zip: " + this.Address.zip);
            else
                console.log("Neighbourhood: " + this.Address.neighbourhood);
        } else
            console.log("\nAddress Details: Hidden or unavailable");
    }

    getWebsite_And_Social_Links = () => {
        if (this.website_and_social_links.website)
            console.log("\nWebsite(s): " + this.website_and_social_links.website.toString());
        else
            console.log("\nWebsite(s): Hidden or unavailable");

        if (this.website_and_social_links.public_Key)
            console.log("Public Key: " + this.website_and_social_links.public_Key);
        else
            console.log("Public Key: Hidden or unavailable");


        if (this.website_and_social_links.social_link) {
            console.log("\nSocial Links details: ");

            if (this.website_and_social_links.social_link.instagram)
                console.log("Instagram url: " + this.website_and_social_links.social_link.instagram);
            else
                console.log("Instagram url: Hidden or unavailable");

            if (this.website_and_social_links.social_link.linkedin)
                console.log("LinkedIn url: " + this.website_and_social_links.social_link.linkedin);
            else
                console.log("LinkedIn url: Hidden or unavailable");

            if (this.website_and_social_links.social_link.twitter)
                console.log("Twitter: " + this.website_and_social_links.social_link.twitter);
            else
                console.log("Twitter: Hidden or unavailable");
        } else
            console.log("\nSocial Links details: Hidden or unavailable");
    }

    getAll_User_Information = () => {

        //calling all the above methods
        this.getName();
        this.getDate_Of_Birth();
        this.getGender();
        this.getCurrent_City();
        this.getHome_Town();
        this.getOther_Cities();
        this.getWork();
        this.getPrevious_Work();
        this.getProfessional_Skills();
        this.getUniversity();
        this.getHigh_School();
        this.getOther_Schools();
        this.getContact_Information();
        this.getAddress();
        this.getWebsite_And_Social_Links();
    }

}//class 'User_Information' ends

/* Creating the object of the class "User_Information" */

let user1 = new User_Information("//url", "//url", "Hey there! this is Akash", "Hey there! this is Akash", 
    "","", "", "", "", "", "", "", "", true, "Impossible is nothing",
    ["English", "Marathi", "Hindi","Telugu"], "Hindu", "BJP", "single", "Men and women",
    { blood_group: "B+", have_donated_blood: false },
    {
        family_member_name: "Akshay Patil",
        family_member_profile_photo: "//url",
        family_member_profile_url: "//url",
        realtion: "Brother"
    },
    { no_of_friends: 100, current_city_friends: 44, no_of_follerwers: 55, no_of_follwing: 1 },
    {
        friend_name: "Yogesh Arak",
        friends_total_friends: 500,
        mutual_friends: 23,
        friend_profile_url: "//url",
        friend_profile_photo_url: "//url",
        friend_no_of_followers: 55
    },
    "Akash Patil", "11/19/1993", "Male", "Pune, Maharashta", "Latur,Maharashtra",
    {
        designation: "",
        name_of_office: "",
        location: "",
        working_since: ""
    },
    {
        mobilephone: [9850759812, 9860123512],
        email: ["akash.patil45@gmail.com"],
        facebook_url: "//url",
        phone_no: [912044557799, 912089898787]
    },
    {
        address: "SadashivPeth",
        town_or_city: "Pune",
        zip: 411001,
        neighbourhood: "",
    },

    [{
        designation: "",
        name_of_office: "",
        location: "",
        working_since: ""
    }, {
        designation: "",
        name_of_office: "",
        location: "",
        working_since: ""
    }],
    {
        website: ["//url", "//url"],
        public_Key: "*KEY*",
        social_link: {
            instagram: "//url",
            linkedin: "//url",
            twitter: ""
        }
    },
    {
        degree: "MCA",
        name_of_the_college: "MIT",
        location: "Pune, Maharashtra",
        completed_in: "2018"
    },
    [{
        name_of_the_school: "Yoganand",
        location: "Pune",
        completed_in: "2005"
    }, {
        name_of_the_school: "Keshavraj",
        location: "Latur",
        completed_in: "2002",
    }],
    ["html", "css", "MEAN"],
    {
        name_of_the_school: "CTMK",
        location: "Jalna",
        completed_in: "2008"
    },
    ["Jalna", "Partur"]
);//object declaration ends

//calling the two methods of each class 
user1.getAll_User_Information();
user1.getAll_FacbookRelated_Information();