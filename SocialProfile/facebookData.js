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
//Facebook class
var Facebook = /** @class */ (function () {
    function Facebook(friends_count, friend_info, family_members, blood_donations, cover_photo_url, profile_photo_url, bio, about, nick_name, birth_name, maiden_name, alternative_spelling, married_name, father_name, former_name, name_with_title, other_name, name_showing_on_profile, favorite_quotes, languages_known, religious_views, political_views, relationship_status, interested_in) {
        var _this = this;
        this.friends_count = friends_count;
        this.friend_info = friend_info;
        this.family_members = family_members;
        this.blood_donations = blood_donations;
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
        this.former_name = former_name;
        this.name_with_title = name_with_title;
        this.other_name = other_name;
        this.name_showing_on_profile = name_showing_on_profile;
        this.favorite_quotes = favorite_quotes;
        this.languages_known = languages_known;
        this.religious_views = religious_views;
        this.political_views = political_views;
        this.relationship_status = relationship_status;
        this.interested_in = interested_in;
        this.getCoverPhoto = function () {
            if (_this.cover_photo_url)
                console.log("Cover Photo: " + _this.cover_photo_url);
            else
                console.log("Cover Photo: Hidden or unavailable");
        };
        this.getProfilePhoto = function () {
            if (_this.profile_photo_url)
                console.log("Profile Picture: " + _this.profile_photo_url);
            else
                console.log("Profile Picture: Hidden or unavailable");
        };
        this.getBio = function () {
            if (_this.bio)
                console.log("Bio: " + _this.bio);
            else
                console.log("Bio: Hidden or unavailable");
        };
        this.getAbout = function () {
            if (_this.about)
                console.log("About: " + _this.about);
            else
                console.log("About: Hidden or unavailable");
        };
        this.getNick_Name = function () {
            if (_this.nick_name)
                console.log("Nick Name: " + _this.nick_name);
            else
                console.log("Nick Name: Hidden or unavailable");
        };
        this.getBirth_Name = function () {
            if (_this.birth_name)
                console.log("Birth Name: " + _this.birth_name);
            else
                console.log("Birth Name: Hidden or unavailable");
        };
        this.getMaiden_Name = function () {
            if (_this.maiden_name)
                console.log("Maiden Name: " + _this.maiden_name);
            else
                console.log("Maiden Name: Hidden or unavailable");
        };
        this.getAlternativeSpelling = function () {
            if (_this.alternative_spelling)
                console.log("Alternative Spelling of name: " + _this.alternative_spelling);
            else
                console.log("Alternative Spelling: " + _this.alternative_spelling);
        };
        this.getMarried_Name = function () {
            if (_this.married_name)
                console.log("Married Name: " + _this.married_name);
            else
                console.log("Maiden Name: " + _this.maiden_name);
        };
        this.getFather_Name = function () {
            if (_this.father_name)
                console.log("Father's Name: " + _this.father_name);
            else
                console.log("Father's Name: Hidden or unavailable");
        };
        this.getFormer_Name = function () {
            if (_this.former_name)
                console.log("Former Name: " + _this.former_name);
            else
                console.log("Former Name: Hidden or unavailable");
        };
        this.getName_with_Title = function () {
            if (_this.name_with_title)
                console.log("Name with title: " + _this.name_with_title);
            else
                console.log("Name with title: Hidden or unavailable");
        };
        this.getOther_Name = function () {
            if (_this.other_name)
                console.log("Other Name: ") + _this.other_name;
            else
                console.log("Other Name: Hidden or unavailable");
        };
        this.isName_Visible_on_Profile = function () {
            if (_this.nick_name || _this.birth_name || _this.maiden_name || _this.alternative_spelling ||
                _this.married_name || _this.father_name || _this.former_name ||
                _this.name_with_title || _this.other_name)
                console.log("Is nickname/birthname etc. visible on profile: " + _this.name_showing_on_profile);
        };
        this.getFavorite_Quotes = function () {
            if (_this.favorite_quotes)
                console.log("Favorite Quotes: " + _this.favorite_quotes);
            else
                console.log("Favorite Quotes: Hidden or Unavailable");
        };
        this.getKnown_Languages = function () {
            if (_this.languages_known)
                console.log("Languages Known: " + _this.languages_known.toString());
            else
                console.log("Languages Known: Hidden or unavailable");
        };
        this.getReligiuos_Views = function () {
            if (_this.religious_views)
                console.log("Religious Views: " + _this.religious_views);
            else
                console.log("Religious Views: Hidden or unavailable");
        };
        this.getPolitical_Views = function () {
            if (_this.political_views)
                console.log("Political Views: " + _this.political_views);
            else
                console.log("Political Views: Hidden or unavailable");
        };
        this.getRelationship_Status = function () {
            if (_this.relationship_status)
                console.log("Relationship Status: " + _this.relationship_status);
            else
                console.log("Relationship status: Hidden or unavailable");
        };
        this.getInterested_In = function () {
            if (_this.interested_in)
                console.log("Interested in: " + _this.interested_in);
            else
                console.log("Interested in: Hidden or unavailable");
        };
        this.getBlood_DonationDetails = function () {
            if (_this.blood_donations.blood_group) {
                console.log("Blood Group: " + _this.blood_donations.blood_group);
                console.log("Have donated blood? " + _this.blood_donations.have_donated_blood);
            }
            else
                console.log("Blood Group: Hidden or unavailable");
        };
        this.getFamily_Member_Details = function () {
            if (_this.family_members.family_member_name) {
                console.log("Family member details- ");
                console.log("Name: " + _this.family_members.family_member_name);
                console.log("Relation: " + _this.family_members.realtion);
                console.log("Profile url: " + _this.family_members.family_member_profile_url);
                console.log("Profile Picture url: " + _this.family_members.family_member_profile_url);
            }
            else
                console.log("Family member details- Hidden or unavailable");
        };
        this.getFriends_Count = function () {
            console.log("Total friends: " + _this.friends_count.no_of_friends);
            console.log("Current City Friends: " + _this.friends_count.current_city_friends);
            console.log("No. of followers: " + _this.friends_count.no_of_follerwers);
            console.log("No. of following: " + _this.friends_count.no_of_follwing);
        };
        this.getFriend_Info = function () {
            console.log("Friend Information-");
            console.log("Name: " + _this.friend_info.friend_name);
            console.log("No. of friends: " + _this.friend_info.friends_total_friends);
            console.log("Mutual Friends: " + _this.friend_info.mutual_friends);
            console.log("Profile Picture url: " + _this.friend_info.friend_profile_photo_url);
            console.log("Profile url: " + _this.friend_info.friend_profile_url);
            console.log("No. of followers: " + _this.friend_info.friend_no_of_followers);
        };
        this.getAll_FacbookRelated_Information = function () {
            //this methods calls all of the above methods...
            _this.getCoverPhoto();
            _this.getProfilePhoto();
            _this.getBio();
            _this.getAbout();
            _this.getNick_Name();
            _this.getBirth_Name();
            _this.getMaiden_Name();
            _this.getAlternativeSpelling();
            _this.getMarried_Name();
            _this.getFather_Name();
            _this.getFormer_Name();
            _this.getName_with_Title();
            _this.getOther_Name();
            _this.isName_Visible_on_Profile();
            _this.getFavorite_Quotes();
            _this.getKnown_Languages();
            _this.getReligiuos_Views();
            _this.getPolitical_Views();
            _this.getRelationship_Status();
            _this.getInterested_In();
            _this.getBlood_DonationDetails();
            _this.getFamily_Member_Details();
            _this.getFriends_Count();
            _this.getFriend_Info();
        };
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
    } //construcor ends
    return Facebook;
}()); //'Facebook' class ends
var User_Information = /** @class */ (function (_super) {
    __extends(User_Information, _super);
    //this class includes user's personal information
    function User_Information(
    //super class properties
    cover_photo_url, profile_photo_url, bio, about, nick_name, birth_name, maiden_name, alternative_spelling, married_name, father_name, former_name, name_with_title, other_name, name_showing_on_profile, favorite_quotes, languages_known, religious_views, political_views, relationship_status, interested_in, blood_donations, family_members, friends_count, friend_info, 
    //sub class properties
    name, date_of_birth, gender, current_city, home_town, work, contact_information, Address, previous_work, website_and_social_links, university, other_schools, professional_skills, high_school, other_cities) {
        var _this = 
        //constructor definition starts 
        _super.call(this, friends_count, friend_info, family_members, blood_donations, cover_photo_url, profile_photo_url, bio, about, nick_name, birth_name, maiden_name, alternative_spelling, maiden_name, father_name, former_name, name_with_title, other_name, name_showing_on_profile, favorite_quotes, languages_known, religious_views, political_views, relationship_status, interested_in) || this;
        _this.cover_photo_url = cover_photo_url;
        _this.profile_photo_url = profile_photo_url;
        _this.bio = bio;
        _this.about = about;
        _this.nick_name = nick_name;
        _this.birth_name = birth_name;
        _this.maiden_name = maiden_name;
        _this.alternative_spelling = alternative_spelling;
        _this.married_name = married_name;
        _this.father_name = father_name;
        _this.former_name = former_name;
        _this.name_with_title = name_with_title;
        _this.other_name = other_name;
        _this.name_showing_on_profile = name_showing_on_profile;
        _this.favorite_quotes = favorite_quotes;
        _this.languages_known = languages_known;
        _this.religious_views = religious_views;
        _this.political_views = political_views;
        _this.relationship_status = relationship_status;
        _this.interested_in = interested_in;
        _this.blood_donations = blood_donations;
        _this.family_members = family_members;
        _this.friends_count = friends_count;
        _this.friend_info = friend_info;
        _this.name = name;
        _this.date_of_birth = date_of_birth;
        _this.gender = gender;
        _this.current_city = current_city;
        _this.home_town = home_town;
        _this.work = work;
        _this.contact_information = contact_information;
        _this.Address = Address;
        _this.previous_work = previous_work;
        _this.website_and_social_links = website_and_social_links;
        _this.university = university;
        _this.other_schools = other_schools;
        _this.professional_skills = professional_skills;
        _this.high_school = high_school;
        _this.other_cities = other_cities;
        //Methods Definitions start
        _this.getName = function () {
            console.log("Name: " + _this.name);
        };
        _this.getDate_Of_Birth = function () {
            //"Date of birth" should in the format of 'mm-dd-yyyy'
            console.log("Date of birth: ");
            var dob = new Date(_this.date_of_birth);
            var month = String(dob.getMonth() + 1);
            var day = String(dob.getDate());
            var year = String(dob.getFullYear());
            console.log(day + "/" + month + "/" + year);
            console.log("Age: " + _this.getAge(dob)); //getAge(date) is called here
        };
        _this.getAge = function (dob) {
            //calculating the age
            var today = new Date();
            var birthDate = dob;
            var age = today.getFullYear() - birthDate.getFullYear();
            var month = today.getMonth() - birthDate.getMonth();
            if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };
        _this.getGender = function () {
            console.log("Gender: " + _this.gender);
        };
        _this.getCurrent_City = function () {
            console.log("Current City: " + _this.current_city);
        };
        _this.getHome_Town = function () {
            console.log("Home Town: " + _this.home_town);
        };
        _this.getOther_Cities = function () {
            if (_this.other_cities)
                console.log("Places liven in: " + _this.other_cities.toString());
            else
                console.log("Places lived in: Hidden or unavailable.");
        };
        _this.getWork = function () {
            if (_this.work) {
                console.log("Current Work Details: ");
                if (_this.work.designation)
                    console.log("Designation: " + _this.work.designation);
                else
                    console.log("Designation: Hidden or unavailable");
                if (_this.work.name_of_office)
                    console.log("Name of the Office/Company: " + _this.work.name_of_office + ", " + _this.work.location);
                else
                    console.log("Name of the office/Company: Hidden or unavailable");
                if (_this.work.working_since)
                    console.log("Working here since: " + _this.work.working_since);
                else
                    console.log("Working since: Hidden or unavailable");
            }
            else
                console.log("Current Work Details: Hidden or unavailable");
        };
        _this.getPrevious_Work = function () {
            if (_this.previous_work) {
                console.log("Previous Work details: ");
                for (var _i = 0, _a = _this.previous_work; _i < _a.length; _i++) {
                    var work = _a[_i];
                    if (work.designation)
                        console.log("Designation: " + work.designation);
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
            }
            else
                console.log("Previous work details: Hidden or unavailable");
        };
        _this.getProfessional_Skills = function () {
            if (_this.professional_skills)
                console.log("Professional Skills: " + _this.professional_skills);
            else
                console.log("Professional Skills: Hidden or unavailable");
        };
        _this.getUniversity = function () {
            if (_this.university) {
                console.log("University details: ");
                if (_this.university.degree)
                    console.log("Degree: " + _this.university.degree);
                else
                    console.log("Degree: Hidden or unavailable");
                if (_this.university.name_of_the_college)
                    console.log("Name of the college: " + _this.university.name_of_the_college + ", " + _this.university.location);
                else
                    console.log("Name of the college: Hidden or unavailable");
                if (_this.university.completed_in)
                    console.log("Year: " + _this.university.completed_in);
                else
                    console.log("Year: Hidden or unavailable");
            }
            else
                console.log("University Details: Hidden or unavailable");
        };
        _this.getHigh_School = function () {
            if (_this.high_school) {
                console.log("High School details: ");
                if (_this.high_school.name_of_the_school)
                    console.log("Name of the school: " + _this.high_school.name_of_the_school + ", " + _this.high_school.location);
                else
                    console.log("Name of the school: Hidden or unavailable");
                if (_this.high_school.completed_in)
                    console.log("Year: " + _this.high_school.completed_in);
                else
                    console.log("Year: Hidden or unavailable");
            }
            else
                console.log("High school details: Hidden or unavailable");
        };
        _this.getOther_Schools = function () {
            if (_this.other_schools) {
                console.log("Previous School details: ");
                for (var _i = 0, _a = _this.other_schools; _i < _a.length; _i++) {
                    var school = _a[_i];
                    if (school.name_of_the_school)
                        console.log("Name of the school: " + school.name_of_the_school + ", " + school.location);
                    else
                        console.log("Nam of the school: Hidden or unavailable");
                    if (school.completed_in)
                        console.log("Year: " + school.completed_in);
                    else
                        console.log("Year: Hidden or unavailable");
                }
            }
            else
                console.log("Previous School details: Hidden or unavailable");
        };
        _this.getContact_Information = function () {
            console.log("Contact Information: ");
            console.log("Mobile no(s). " + _this.contact_information.mobilephone.toString());
            console.log("Email ID(s): " + _this.contact_information.email.toString());
            console.log("Facebook URL: " + _this.contact_information.facebook_url);
            if (_this.contact_information.phone_no)
                console.log("Phone no: " + _this.contact_information.phone_no.toString());
            else
                console.log("Phone no: Hidden or unavailable");
        };
        _this.getAddress = function () {
            if (_this.Address) {
                if (_this.Address.address)
                    console.log("Address: " + _this.Address.address + ", " + _this.Address.town_or_city);
                else
                    console.log("Address: Hidden or unavaiable");
                if (_this.Address.zip)
                    console.log("Zip: " + _this.Address.zip);
                else
                    console.log("Neighbourhood: " + _this.Address.neighbourhood);
            }
            else
                console.log("Address Details: Hidden or unavailable");
        };
        _this.getWebsite_And_Social_Links = function () {
            if (_this.website_and_social_links.website)
                console.log("Website(s): " + _this.website_and_social_links.website.toString());
            else
                console.log("Website(s): Hidden or unavailable");
            if (_this.website_and_social_links.public_Key)
                console.log("Public Key: " + _this.website_and_social_links.public_Key);
            else
                console.log("Public Key: Hidden or unavailable");
            if (_this.website_and_social_links.social_link) {
                console.log("Social Links details: ");
                if (_this.website_and_social_links.social_link.instagram)
                    console.log("Instagram url: " + _this.website_and_social_links.social_link.instagram);
                else
                    console.log("Instagram url: Hidden or unavailable");
                if (_this.website_and_social_links.social_link.linkedin)
                    console.log("LinkedIn url: " + _this.website_and_social_links.social_link.linkedin);
                else
                    console.log("LinkedIn url: Hidden or unavailable");
                if (_this.website_and_social_links.social_link.twitter)
                    console.log("Twitter: " + _this.website_and_social_links.social_link.twitter);
                else
                    console.log("Twitter: Hidden or unavailable");
            }
            else
                console.log("Social Links details: Hidden or unavailable");
        };
        _this.getAll_User_Information = function () {
            //calling all the above methods
            _this.getName();
            _this.getDate_Of_Birth();
            _this.getGender();
            _this.getCurrent_City();
            _this.getHome_Town();
            _this.getOther_Cities();
            _this.getWork();
            _this.getPrevious_Work();
            _this.getProfessional_Skills();
            _this.getUniversity();
            _this.getHigh_School();
            _this.getOther_Schools();
            _this.getContact_Information();
            _this.getAddress();
            _this.getWebsite_And_Social_Links();
        };
        _this.name = name;
        _this.date_of_birth = date_of_birth;
        _this.gender = gender;
        _this.current_city = current_city;
        _this.home_town = home_town;
        _this.other_cities = other_cities;
        _this.work.designation = work.designation;
        _this.work.name_of_office = work.name_of_office;
        _this.work.location = work.location;
        _this.work.working_since = work.working_since;
        for (var _i = 0, _a = _this.previous_work; _i < _a.length; _i++) {
            var work_1 = _a[_i];
            work_1.designation = work_1.designation;
            work_1.name_of_office = work_1.name_of_office;
            work_1.location = work_1.location;
            work_1.working_since = work_1.working_since;
        }
        _this.professional_skills = professional_skills;
        _this.university.degree = university.degree;
        _this.university.name_of_the_college = university.name_of_the_college;
        _this.university.location = university.location;
        _this.university.completed_in = university.completed_in;
        _this.high_school = high_school;
        for (var _b = 0, _c = _this.other_schools; _b < _c.length; _b++) {
            var school = _c[_b];
            school.name_of_the_school = school.name_of_the_school;
            school.location = school.location;
            school.completed_in = school.completed_in;
        }
        _this.contact_information.mobilephone = contact_information.mobilephone;
        _this.contact_information.email = contact_information.email;
        _this.contact_information.facebook_url = contact_information.facebook_url;
        _this.contact_information.phone_no = contact_information.phone_no;
        _this.Address.address = Address.address;
        _this.Address.town_or_city = Address.town_or_city;
        _this.Address.zip = Address.zip;
        _this.Address.neighbourhood = Address.neighbourhood;
        _this.website_and_social_links.website = website_and_social_links.website;
        _this.website_and_social_links.public_Key = website_and_social_links.public_Key;
        _this.website_and_social_links.social_link.instagram = website_and_social_links.social_link.instagram;
        _this.website_and_social_links.social_link.linkedin = website_and_social_links.social_link.linkedin;
        _this.website_and_social_links.social_link.twitter = website_and_social_links.social_link.twitter;
        return _this;
    } //constructor ends
    return User_Information;
}(Facebook)); //class 'User_Information' ends
/* Creating the object of the class "User_Information" */
var user1 = new User_Information("some url", "some url", "this is amit", "this is amit", "", "", "", "", "", "", "", "", "", true, "Impossible is nothing", ["English", "Marathi", "Hindi"], "Hindu", "BJP", "single", "Men and women", { blood_group: "A-", have_donated_blood: false }, {
    family_member_name: "Anil Garge",
    family_member_profile_photo: "some url",
    family_member_profile_url: "some url",
    realtion: "Uncle"
}, { no_of_friends: 74, current_city_friends: 44, no_of_follerwers: 5, no_of_follwing: 2 }, {
    friend_name: "Yogesh Arak",
    friends_total_friends: 500,
    mutual_friends: 23,
    friend_profile_url: "some url",
    friend_profile_photo_url: "some url",
    friend_no_of_followers: 55
}, "Amit Garge", "05/19/1992", "Male", "Aurangabad, Maharashta", "Latur,Maharashtra", {
    designation: "MEAN Stack Develoer",
    name_of_office: "Microsoft",
    location: "Pune",
    working_since: "2016"
}, {
    mobilephone: [8087269946, 8999079064],
    email: ["amit.garge19@gmail.com", "ameet.garge@gmail.com"],
    facebook_url: "some url",
    phone_no: [9898, 89898]
}, {
    address: "N-4,cidco",
    town_or_city: "Aurangabad",
    zip: 431001,
    neighbourhood: ""
}, [{
        designation: "",
        name_of_office: "",
        location: "",
        working_since: ""
    }, {
        designation: "",
        name_of_office: "",
        location: "",
        working_since: ""
    }], {
    website: ["some url", "some url"],
    public_Key: "some key",
    social_link: {
        instagram: "some link",
        linkedin: "some link",
        twitter: "some link"
    }
}, {
    degree: "MCA",
    name_of_the_college: "MIT Aurangabad",
    location: "Aurangabad, Maharashtra",
    completed_in: "2016"
}, [{
        name_of_the_school: "Yoganand",
        location: "Partur",
        completed_in: "2005"
    }, {
        name_of_the_school: "Keshavraj",
        location: "Latur",
        completed_in: "2002"
    }], ["html", "css", "MEAN"], {
    name_of_the_school: "CTMK",
    location: "Jalna",
    completed_in: "2008"
}, ["Jalna", "Partur"]); //object declaration ends
//calling the two methods of each class 
user1.getAll_User_Information();
user1.getAll_FacbookRelated_Information();
