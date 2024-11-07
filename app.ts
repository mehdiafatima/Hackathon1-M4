document.getElementById('resumeForm')!.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value || getRandomName();
    const email = (document.getElementById('email') as HTMLInputElement).value || getRandomEmail();
    const phone = (document.getElementById('phone') as HTMLInputElement).value || getRandomPhone();
    const aboutMe = (document.getElementById('aboutMe') as HTMLTextAreaElement).value || getRandomAboutMe();
    const education = (document.getElementById('education') as HTMLInputElement).value || getRandomEducation();
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',') || ["HTML", "CSS", "JavaScript"];
    const languages = (document.getElementById('languages') as HTMLInputElement).value.split(',') || ["English", "Spanish"];
    const expertise = (document.getElementById('expertise') as HTMLInputElement).value.split(',') || ["Frontend Development", "UI/UX Design"];
    
    const profilePicURL = (document.getElementById('profilePic') as HTMLInputElement).value || "pic3.png";

    document.getElementById('resumeName')!.textContent = name;
    document.getElementById('aboutMeText')!.textContent = aboutMe;
    document.getElementById('contactPhone')!.textContent = `📞 ${phone}`;
    document.getElementById('contactEmail')!.textContent = `✉️ ${email}`;
    
    const languagesList = document.getElementById('languagesList')!;
    languagesList.innerHTML = '';
    languages.forEach(lang => {
        const li = document.createElement('li');
        li.textContent = lang.trim();
        languagesList.appendChild(li);
    });

    const expertiseList = document.getElementById('expertiseList')!;
    expertiseList.innerHTML = '';
    expertise.forEach(exp => {
        const li = document.createElement('li');
        li.textContent = exp.trim();
        expertiseList.appendChild(li);
    });

    document.getElementById('educationText')!.textContent = education;

    const profilePic = document.getElementById('profilePicImage') as HTMLImageElement;
    profilePic.src = profilePicURL;

  
    document.getElementById('resumeSection')!.style.display = 'block';
});

function getRandomName(): string {
    return "John Doe";
}

function getRandomEmail(): string {
    return "john.doe@example.com";
}

function getRandomPhone(): string {
    return "+123-456-7890";
}

function getRandomAboutMe(): string {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae arcu sit amet nisl luctus varius.";
}

function getRandomEducation(): string {
    return "ABC University - Computer Science (2023)";
}
