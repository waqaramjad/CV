
var resumeData = document.getElementsByClassName('resumeData');


var resume =  {
// main page skills
    name : 'Waqar Amjad',
    mainPageSkills: 'Software Developer | Web Developer | Mobile Developer',
// about us
    about:'I am waqar Amjad , student of Softwate Engineering from Karachi Unievrsity ,Ubit. Passionate about to learn and work on new technology .I have a experience in Java and we projects',
// resume 
    university :' University Of Karachi,Ubit <br> BS(Software Engineering) <br>2016-2019',
    College: 'Bahria College NORE-1 , Karachi <br>Pre-Enginnering<br>2013-2015' ,
    School : 'EAB PN Haroon Bahria Colleg , Karachi',
    Saylani :'Mobile and web App Development using React',
//  location
    livingPlace:'Karachi , Pakistan'   

}

resumeData[0].innerHTML = resume.name;
resumeData[1].innerHTML = resume.mainPageSkills;
resumeData[2].innerHTML = resume.about;
resumeData[3].innerHTML = resume.university;
resumeData[4].innerHTML = resume.College;
resumeData[5].innerHTML = resume.School;
resumeData[6].innerHTML = resume.Saylani;
// resumeData[7].innerHTML = resume.livingPlace;

console.log(resumeData);