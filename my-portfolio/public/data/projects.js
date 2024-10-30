const projects = [
    {
        id: "CareGrade",
        description: "Reviews Website for Mental Health Resources, Populated SQL data base scraped Online and Google Maps API. Used Flask for backend, Jinja Template and Bootstrap for frontend, User can delete, add, search and edit reviews. Pytest for database and routing",
        git: "https://github.com/yayueLaurazhou/mental_health_resources_review_website",
        techs: ["Python", "Goolge API", "SQL", "HTML", "CSS", "Flask", "Jinja Template", "Bootstrap"],
        isSmall: false
    },
    {
        id: "The Diagonal Alley Bargains",
        description: "A dynamic website that allows user to login, logout, signup,add/delete items in cart, calculate total price. After login, User can post/delete/edit an item for sale. User can contact seller for an item interested, in a chat room that updates real time without refreshing the page. Implemented unit tests and integration tests using Django's build in TestCase and Client, E2E testing with Playwright.",
        git: "https://github.com/yayueLaurazhou/django_secondhand_ecommerce",
        live: " https://django-secondhand-ecommerce.onrender.com/",
        techs: ["Django", "Jinja", "HTML", "CSS", "JavaScript", "SQL", "Playwright"],
        isSmall: false
    },
    {
        id: "The Little Prince Diary",
        description: "An interactive website that is the little prince themed, user can add/search/filter/delete notes, add/delete tags/folders as categorization systems.Used Reducer for state management, Custom Hooks, Container Components and useContext to seperate concerns, localStorage for notes storage, and TypeScript for styling. Tested using Vitest for React components and Playwright for End to End testing.",
        git: "https://github.com/yayueLaurazhou/theLittlePrinceJournal/",
        techs: ["React"],
        hasImage: true,
    },
    {
        id: "ETL Project",
        description: "A team project that extracts data from a database, transforming the data into parquet format using AWS Lambda, and loading the data into an AWS RDS instance automatically on schedule. The pipeline logs the loading process automatically on AWS CloudWatch, and any failure triggers an email alert. Tested using Pytest, with mock and patch, and achieved test coverage rate 92%. Utilized Github Actions and Terraform for CI/CD, and MakeFile for set up virtual environment and run Terraform.",
        git: "https://github.com/padmapriyam/de-project-watershed",
        techs: ["Python", "AWS S3", "AWS CloudWatch", "AWS Lambda", "AWS RDS", "Terraform", "Github Action"],
        isSmall: false,
    },
    {
        id: "LSTM and BERT classification",
        description: "(In Progress) User can input a random text and, see the multiclass classification performance between LSTM and BERT.",
        git: "https://github.com/yayueLaurazhou/the_little_prince_diary",
        techs: ["BERT", "LSTM", "Pytorch", "React", "Docker", "FastAPI"],
        isSmall: false,
    },
    {
        id: "Java DataStructure",
        description: "Following the CS61B, I learnt using Java to design various data structure--lists, arrays, sets, trees, hash maps, graphs---and sorting algorithms. Developed a Tetris game as homework.",
        git: "https://github.com/yayueLaurazhou/CS61B-2024",
        isSmall: true,
    },
    {
        id: "Cleaning Rota",
        description: "A project that uses Twilio API and weather API to send customized messsages to flatmates in turn once a week",
        git: "https://github.com/yayueLaurazhou/cleaning_rota",
        isSmall: true,
    },
    {
        id: "NLP analysis",
        description: "NLP analysis using Python NLTK, Numpy and Matplotlib library to draw WordCloud, line charts and pie charts to analyze a word frequency and punctuation.",
        git: "https://github.com/yayueLaurazhou/NLP_project",
        isSmall: true,
    },

    {
        id: "London Renting",
        description: "Using Selenium to scrape the data of renting listings on various platforms such as Rightmove and combine them into a pdf",
        git: "https://github.com/yayueLaurazhou/london_renting_web_scrape",
        isSmall: true,
    },
    {
        id: "Boston Housing Price Prediction",
        description: "A Kaggle project that predicts the housing price of houses in Boston using Random Forest Regression using Python Numpy and Pandas",
        git: "https://www.kaggle.com/code/alyssachong/team-notebook-final",
        isSmall: true,
    }
];

export default projects;