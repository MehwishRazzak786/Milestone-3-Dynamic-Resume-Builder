// Grabbing form elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const contactInput = document.getElementById('contact') as HTMLInputElement;
const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
const graduationInput = document.getElementById('graduation') as HTMLInputElement;
const intermediateInput = document.getElementById('intermediate') as HTMLInputElement;
const matriculationInput = document.getElementById('matriculation') as HTMLInputElement;
const currentJobInput = document.getElementById('current-job') as HTMLInputElement;
const previousJobInput = document.getElementById('previous-job') as HTMLInputElement;
const skillInput = document.getElementById('skill-input') as HTMLInputElement;
const addSkillBtn = document.getElementById('add-skill-btn') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;

// Grabbing display elements
const displayName = document.getElementById('display-name') as HTMLParagraphElement;
const displayEmail = document.getElementById('display-email') as HTMLParagraphElement;
const displayContact = document.getElementById('display-contact') as HTMLParagraphElement;
const displayProfilePic = document.getElementById('display-profile-pic') as HTMLImageElement;
const displayGraduation = document.getElementById('display-graduation') as HTMLParagraphElement;
const displayIntermediate = document.getElementById('display-intermediate') as HTMLParagraphElement;
const displayMatriculation = document.getElementById('display-matriculation') as HTMLParagraphElement;
const displayCurrentJob = document.getElementById('display-current-job') as HTMLParagraphElement;
const displayPreviousJob = document.getElementById('display-previous-job') as HTMLParagraphElement;
const displaySkillsList = document.getElementById('display-skills-list') as HTMLUListElement;

let skills: string[] = [];

// Function to dynamically add skills
addSkillBtn.addEventListener('click', () => {
    const skill = skillInput.value.trim();
    if (skill !== '') {
        skills.push(skill);
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
        skillInput.value = '';
    }
});

// Form submit event
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // Update personal information
    displayName.textContent = `Name: ${nameInput.value}`;
    displayEmail.textContent = `Email: ${emailInput.value}`;
    displayContact.textContent = `Contact: ${contactInput.value}`;
    displayProfilePic.src = profilePicInput.value || 'default.jpg';

    // Update education
    displayGraduation.textContent = `Graduation: ${graduationInput.value}`;
    displayIntermediate.textContent = `Intermediate: ${intermediateInput.value}`;
    displayMatriculation.textContent = `Matriculation: ${matriculationInput.value}`;

    // Update work experience
    displayCurrentJob.textContent = `Current Job: ${currentJobInput.value}`;
    displayPreviousJob.textContent = `Previous Job: ${previousJobInput.value}`;

    // Update skills
    displaySkillsList.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        displaySkillsList.appendChild(li);
    });
});
