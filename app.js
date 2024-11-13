// document.getElementById('resumeForm')!.addEventListener('submit', function(event) {
//     event.preventDefault();
document.getElementById('resumeForm').addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Retrieve form values
    var name = document.getElementById('name').value || getRandomName();
    var email = document.getElementById('email').value || getRandomEmail();
    var phone = document.getElementById('phone').value || getRandomPhone();
    var aboutMe = document.getElementById('aboutMe').value || getRandomAboutMe();
    var education = document.getElementById('education').value || getRandomEducation();
    var skills = document.getElementById('skills').value.split(',') || ["HTML", "CSS", "JavaScript"];
    var languages = document.getElementById('languages').value.split(',') || ["English", "Spanish"];
    var experience = document.getElementById('experience').value || "No experience added yet.";
    // Handle image URL input
    var profilePicURL = (_a = document.getElementById('profilePic').files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePicSrc = profilePicURL ? URL.createObjectURL(profilePicURL) : "default-pic.png";
    // Update the resume section with the form values
    document.getElementById('resumeName').textContent = name;
    document.getElementById('aboutMeText').textContent = aboutMe;
    document.getElementById('contactPhone').textContent = "\uD83D\uDCDE ".concat(phone);
    document.getElementById('contactEmail').textContent = "\u2709\uFE0F ".concat(email);
    document.getElementById('educationText').textContent = education;
    document.getElementById('experienceText').textContent = experience;
    // Update skills and languages list
    var skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
    var languagesList = document.getElementById('languagesList');
    languagesList.innerHTML = languages.map(function (language) { return "<li>".concat(language.trim(), "</li>"); }).join('');
    // Set the profile picture
    document.getElementById('profilePicImage').setAttribute('src', profilePicSrc);
    // Display the resume section
    document.getElementById('resumeSection').style.display = 'block';
});
// Download resume as PDF with html2pdf
document.getElementById('downloadBtn').addEventListener('click', function () {
    var resumeSection = document.getElementById('resumeSection');
    var downloadButton = document.getElementById('downloadBtn');
    // Hide the download button before generating the PDF
    downloadButton.style.display = 'none';
    var options = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(resumeSection).save().then(function () {
        // Show the download button again after PDF is generated
        downloadButton.style.display = 'block';
    });
});
// Helper functions for default values
function getRandomName() {
    return 'John Doe';
}
function getRandomEmail() {
    return 'john.doe@example.com';
}
function getRandomPhone() {
    return '+123-456-7890';
}
function getRandomAboutMe() {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
}
function getRandomEducation() {
    return 'ABC University - Computer Science (2023)';
}
