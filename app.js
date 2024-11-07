document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value || getRandomName();
    var email = document.getElementById('email').value || getRandomEmail();
    var phone = document.getElementById('phone').value || getRandomPhone();
    var aboutMe = document.getElementById('aboutMe').value || getRandomAboutMe();
    var education = document.getElementById('education').value || getRandomEducation();
    var skills = document.getElementById('skills').value.split(',') || ["HTML", "CSS", "JavaScript"];
    var languages = document.getElementById('languages').value.split(',') || ["English", "Spanish"];
    var expertise = document.getElementById('expertise').value.split(',') || ["Frontend Development", "UI/UX Design"];
    var profilePicURL = document.getElementById('profilePic').value || "pic3.png";
    document.getElementById('resumeName').textContent = name;
    document.getElementById('aboutMeText').textContent = aboutMe;
    document.getElementById('contactPhone').textContent = "\uD83D\uDCDE ".concat(phone);
    document.getElementById('contactEmail').textContent = "\u2709\uFE0F ".concat(email);
    var languagesList = document.getElementById('languagesList');
    languagesList.innerHTML = '';
    languages.forEach(function (lang) {
        var li = document.createElement('li');
        li.textContent = lang.trim();
        languagesList.appendChild(li);
    });
    var expertiseList = document.getElementById('expertiseList');
    expertiseList.innerHTML = '';
    expertise.forEach(function (exp) {
        var li = document.createElement('li');
        li.textContent = exp.trim();
        expertiseList.appendChild(li);
    });
    document.getElementById('educationText').textContent = education;
    var profilePic = document.getElementById('profilePicImage');
    profilePic.src = profilePicURL;

    document.getElementById('resumeSection').style.display = 'block';
});
function getRandomName() {
    return "John Doe";
}
function getRandomEmail() {
    return "john.doe@example.com";
}
function getRandomPhone() {
    return "+123-456-7890";
}
function getRandomAboutMe() {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae arcu sit amet nisl luctus varius.";
}
function getRandomEducation() {
    return "ABC University - Computer Science (2023)";
}
