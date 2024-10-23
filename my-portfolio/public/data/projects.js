const projects = [
    {
        id: "CareGrade",
        description: "Reviews Website for Mental Health Resources, Populated SQL data base scraped Online and Google Maps API",
        links: "Deplos/deplos.github.io",
        techs: ["Python ", "Goolge API", "SQL", "HTML", "CSS", "Flask", "Jinja Template"],
        isSmall: false
    },
    {
        id: "The Diagonal Alley Bargains",
        description: "A dynamic website that allows user to login, logout, signup,add/delete items in cart, calculate total price. After login, User can post/delete/edit an item for sale. User can contact seller for an item interested, in a chat room that updates real time without refreshing the page.",
        links: "https://github.com/yayueLaurazhou/django_secondhand_ecommerce",
        techs: ["Django", "Jinja", "HTML", "CSS", "JavaScript", "SQL"],
        isSmall: false
    },
    {
        id: "The Little Prince Diary",
        description: "An interactive website that is the little prince themed, user can add/search/filter/delete notes, add/delete tags/folders as categorization systems.",
        links: "https://github.com/yayueLaurazhou/theLittlePrinceJournal/",
        techs: ["react"],
        hasImage: true,
    },
    {
        id: "ETL Project",
        description: "A team project that extracts data from a database, transforming the data into parquet format using Lambda function, and loading the data into an AWS RDS instance for better analysis.",
        links: "https://github.com/padmapriyam/de-project-watershed",
        techs: ["Python", "AWS S3", "AWS CloudWatch", "AWS Lambda", "AWS RDS", "Terraform", "Github action"],
        isSmall: false,
    },
    {
        id: "LSTM and BERT classification",
        description: "(In Progress) User can input a random text and, see the multiclass classification performance between LSTM and BERT.",
        links: "https://github.com/yayueLaurazhou/the_little_prince_diary",
        techs: ["BERT", "LSTM", "Pytorch", "React", "docker", "Fastapi"],
        isSmall: false,
    },
    {
        id: "Java DataStructure",
        description: "Learn about ",
        links: "https://github.com/yayueLaurazhou/java_datastructure",
        isSmall: true,
    },
    {
        id: "cleaning rota",
        description: "A project that uses Twilio API and weather API to send messsages to flatmates once a week",
        links: "https://github.com/yayueLaurazhou/cleaning_rota",
        techs: ["Python"],
        isSmall: false,
    },
    {
        id: "NLP analysis",
        description: "NLP analysis on the text of the little prince",
        links: "https://github.com/yayueLaurazhou/NLP_project",
        techs: ["NLP", "Python", "NLTK", "spaCy", "Scikit-learn", "Pandas", "Numpy"],
        isSmall: false,
    },

    {
        id: "London Renting",
        description: "Using Selenium to scrape the data of renting listings on various platforms",
        techs: ["ts", "discordJs", "node"],
        isSmall: true,
    },
    {
        id: "Boston Housing Price",
        description: "A project that predicts the housing price of houses in Boston using Random Forest Regressor",
        techs: ["Python", "Scikit-learn", "Pandas", "Numpy"],
        isSmall: true,
    }
];

export default projects;