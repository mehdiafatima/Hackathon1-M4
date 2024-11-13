
declare var html2pdf: any;

document.getElementById('resumeForm')!.addEventListener('submit', function(event) {
    event.preventDefault();

 
    const name = (document.getElementById('name') as HTMLInputElement).value || getRandomName();
    const email = (document.getElementById('email') as HTMLInputElement).value || getRandomEmail();
    const phone = (document.getElementById('phone') as HTMLInputElement).value || getRandomPhone();
    const aboutMe = (document.getElementById('aboutMe') as HTMLTextAreaElement).value || getRandomAboutMe();
    const education = (document.getElementById('education') as HTMLInputElement).value || getRandomEducation();
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',') || ["HTML", "CSS", "JavaScript"];
    const languages = (document.getElementById('languages') as HTMLInputElement).value.split(',') || ["English", "Spanish"];
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value || "No experience added yet.";

 
    const profilePicURL = (document.getElementById('profilePic') as HTMLInputElement).files?.[0];
    const profilePicSrc = profilePicURL ? URL.createObjectURL(profilePicURL) : "default-pic.png";

   
    document.getElementById('resumeName')!.textContent = name;
    document.getElementById('aboutMeText')!.textContent = aboutMe;
    document.getElementById('contactPhone')!.textContent = `📞 ${phone}`;
    document.getElementById('contactEmail')!.textContent = `✉️ ${email}`;
    document.getElementById('educationText')!.textContent = education;
    document.getElementById('experienceText')!.textContent = experience;


    const skillsList = document.getElementById('skillsList')!;
    skillsList.innerHTML = skills.map(skill => `<li>${skill.trim()}</li>`).join('');

    const languagesList = document.getElementById('languagesList')!;
    languagesList.innerHTML = languages.map(language => `<li>${language.trim()}</li>`).join('');

  
    document.getElementById('profilePicImage')!.setAttribute('src', profilePicSrc);

    document.getElementById('resumeSection')!.style.display = 'block';
});


document.getElementById('downloadBtn')!.addEventListener('click', function() {
    const resumeSection = document.getElementById('resumeSection')!;
    const downloadButton = document.getElementById('downloadBtn') as HTMLButtonElement;

  
    downloadButton.style.display = 'none';

    const options = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(resumeSection).save().then(() => {
      
        downloadButton.style.display = 'block';
    });
});

function getRandomName(): string {
    return 'John Doe';
}

function getRandomEmail(): string {
    return 'john.doe@example.com';
}

function getRandomPhone(): string {
    return '+123-456-7890';
}

function getRandomAboutMe(): string {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
}

function getRandomEducation(): string {
    return 'ABC University - Computer Science (2023)';
}
