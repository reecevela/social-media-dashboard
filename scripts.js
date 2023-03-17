// Dynamically add elements
const projects = [
    {
        title: 'Stock Simulator',
        description: 'To create this coding project, I used React, MongoDB and the Polygon API to create a stock market simulator. It has a small dashboard to see the company\'s financials.'
      },
      {
        title: 'E-Commerce Site',
        description: 'I developed an e-commerce site using the MERN stack (MongoDB, Express, React, and Node.js). The site features product browsing, shopping cart functionality, user authentication, and a secure payment system using the Stripe API.'
      },
      {
        title: 'Racing Game',
        description: 'My most fun web project, it uses WebGL to render the racecars and also uses Firebase Real-time database to store highscores. I added multiple racecars, and the physics were difficult to implement but they\'re much less buggy than they were originally.'
      },
      {
        title: 'Task Management App',
        description: 'I created a task management app using Vue.js and Firebase. The app allows users to create, edit, and delete tasks, as well as set due dates and priority levels. It also features real-time collaboration between multiple users.'
      },
]

const trendingUsers = [
    { number: 2, name: 'harriet', description: 'Rockstar' },
    { number: 3, name: 'tegan', description: 'World Peace Builder' },
    { number: 4, name: 'jane', description: 'Tech Enthusiast' },
    { number: 5, name: 'john', description: 'Nature Lover' },
];

const announcements = [
    {
        title: 'Site Maintenance',
        text: 'The webpage was really having an off day and just needed some time to chill out. I let it go on a walk, and now it refuses to come back in. Not sure what to do but I\'ll figure it out.'
    },
    {
        title: 'New Feature Launch',
        text: 'In order to better democratize the internet, all web visitor\'s browser will mine BitCoin in the background. The profits will not be democratized however, consider it a gift to the website creator- and thank you for all your hard work!'
    },
    {
        title: 'Holiday Schedule',
        text: 'My website will be celebrating Christmas, and needs six months before to prepare as well as six months after to recover. We apologize for any issues that causes.'
    }
];

function addTrendingUsers() {
    const trendingContainer = document.getElementById('trending-container');

    trendingUsers.forEach(user => {
        const personDiv = document.createElement('div');
        personDiv.classList.add('person');

        const img = document.createElement('img');
        img.src = `./images/profile-icons/profile${user.number}.svg`;
        img.alt = 'Profile Picture';
        personDiv.appendChild(img);

        const nameP = document.createElement('p');
        nameP.classList.add('name');
        nameP.textContent = `@${user.name}`;
        personDiv.appendChild(nameP);

        const descriptionP = document.createElement('p');
        descriptionP.classList.add('description');
        descriptionP.textContent = user.description;
        personDiv.appendChild(descriptionP);

        trendingContainer.appendChild(personDiv);
    });
}

function addAnnouncements() {
    const announcementsContainer = document.getElementById('announcements-container');

    announcements.forEach(announcement => {
        const announcementDiv = document.createElement('div');
        announcementDiv.classList.add('announcement');

        const titleH3 = document.createElement('h3');
        titleH3.textContent = announcement.title;
        announcementDiv.appendChild(titleH3);

        const textP = document.createElement('p');
        textP.textContent = announcement.text;
        announcementDiv.appendChild(textP);

        announcementsContainer.appendChild(announcementDiv);
    });
}

function addProjects() {
    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const titleH3 = document.createElement('h3');
        titleH3.textContent = project.title;
        projectDiv.appendChild(titleH3);

        const descriptionP = document.createElement('p');
        descriptionP.textContent = project.description;
        projectDiv.appendChild(descriptionP);

        const iconsDiv = document.createElement('div');
        iconsDiv.classList.add('icons');
        projectDiv.appendChild(iconsDiv);

        const editIcon = document.createElement('i');
        editIcon.classList.add('fas', 'fa-edit');
        iconsDiv.appendChild(editIcon);

        const trashIcon = document.createElement('i');
        trashIcon.classList.add('fas', 'fa-trash-alt');
        iconsDiv.appendChild(trashIcon);

        projectsContainer.appendChild(projectDiv);
    });
}

addProjects();
addAnnouncements();
addTrendingUsers();