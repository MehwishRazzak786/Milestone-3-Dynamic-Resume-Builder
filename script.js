// Grabbing form elements
var form = document.getElementById('resume-form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var contactInput = document.getElementById('contact');
var profilePicInput = document.getElementById('profile-pic');
var graduationInput = document.getElementById('graduation');
var intermediateInput = document.getElementById('intermediate');
var matriculationInput = document.getElementById('matriculation');
var currentJobInput = document.getElementById('current-job');
var previousJobInput = document.getElementById('previous-job');
var skillInput = document.getElementById('skill-input');
var addSkillBtn = document.getElementById('add-skill-btn');
var skillsList = document.getElementById('skills-list');
// Grabbing display elements
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayContact = document.getElementById('display-contact');
var displayProfilePic = document.getElementById('display-profile-pic');
var displayGraduation = document.getElementById('display-graduation');
var displayIntermediate = document.getElementById('display-intermediate');
var displayMatriculation = document.getElementById('display-matriculation');
var displayCurrentJob = document.getElementById('display-current-job');
var displayPreviousJob = document.getElementById('display-previous-job');
var displaySkillsList = document.getElementById('display-skills-list');
var skills = [];
// Function to dynamically add skills
addSkillBtn.addEventListener('click', function () {
    var skill = skillInput.value.trim();
    if (skill !== '') {
        skills.push(skill);
        var li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
        skillInput.value = '';
    }
});
// Form submit event
form.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    // Update personal information
    displayName.textContent = "Name: ".concat(nameInput.value);
    displayEmail.textContent = "Email: ".concat(emailInput.value);
    displayContact.textContent = "Contact: ".concat(contactInput.value);
    //displayProfilePic.src = profilePicInput.value || 'images/pic.jpg';
    displayProfilePic.src = ((_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(profilePicInput.files[0]) : 'images/pic.jpg';
    // Function to handle file input and preview image
    profilePicInput.addEventListener('change', function (event) {
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                displayProfilePic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
        else {
            // If no file selected, use default image
            displayProfilePic.src = 'images/pic.jpg'; // Replace with the path to your default image
        }
    });
    // Update education
    displayGraduation.textContent = "Graduation: ".concat(graduationInput.value);
    displayIntermediate.textContent = "Intermediate: ".concat(intermediateInput.value);
    displayMatriculation.textContent = "Matriculation: ".concat(matriculationInput.value);
    // Update work experience
    displayCurrentJob.textContent = "Current Job: ".concat(currentJobInput.value);
    displayPreviousJob.textContent = "Previous Job: ".concat(previousJobInput.value);
    // Update skills
    displaySkillsList.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill;
        displaySkillsList.appendChild(li);
    });
});
