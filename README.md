# Trifoia Front End Developer Test
Welcome to the Trifoia frontend developer test! This test is designed to be as open ended and enjoyable as possible, so remember to have fun with it!

# Task
Your task will be to recreate the [Trifoia Careers page](https://trifoia.com/careers), under the following guidelines. Please be sure to read this _entire_ README before beginning!
1. You will be provided with the copy to add to the page
2. You are _not_ allowed to use the official Trifoia colors (other than in the trifoia logo)
3. You are _not_ allowed to use the official Trifoia font family (fira-sans)
3. You must submit your work via git

Details on these guidelines can be found below

# Site Copy
Use the existing [careers page](https://trifoia.com/careers) for inspiration, but remember that you aren't allowed to use the same colors, so you will have to get creative!

Links on your page should navigate to the correct pages on the actual Trifoia website

## Header
Header should include tabs for the following pages:
- Who We Are
- What We Do
- How We Do It
- What's Happening

Should also include a header image / text that links to the home page, a link to the "Say Hello" Page, as well as Facebook, LinkedIn, and Twitter links. A Trifoia brand image is provided for convenience, but doesn't have to be used

## Body
The body of the page should have the following text (presented here in raw Markdown)
```
# Work with Trifoia
## About Trifoia
Trifoia is an equal opportunity employer committed to cultural diversity. Trifoia encourages all qualified individuals to apply, and does not discriminate on the basis of any protected status, including race, gender, veteran and disability status.

Trifoia is proud to offer a robust benefits package to eligible employees, including health insurance, retirement plans and paid time off.
---
## Current Open Positions
### Front End Developer
We are currently looking for a Front-End Developer who can advance our mission to craft exceptional digital learning experiences. We build media-rich websites and mobile applications for customers in need of customized training. The Front-End Developer will be responsible for programming and maintaining all aspects of the project’s front-end, user facing components. You will work closely with the Production Department and internal clients in the Research and Design Department to ensure delivery of quality projects that are on time and on budget.

The Front-End Developer has a deep understanding of responsive design principles (mobile first development); test driven development; development for accessibility, usability, and design; agile development practices; and predicting time required for projects. Strong competency in working collaboratively with small, diverse teams, working against tight deadlines, time management and tracking, attention to detail, and a growth mindset are required.

Reports to: Director of Production

Classification: Full-time non-exempt

Skills and Qualifications:
- Demonstrable Skill Using the Following Systems:
  - HTML
  - HTML Preprocessors (PUG, EJS)
  - CSS
  - CSS Methodologies (BEM, SMACSS, OOCSS)
  - CSS preprocessors (LESS, SCSS, PostCSS)
  - Modern CSS (Flexbox, Grid)
  - Modern JavaScript (ES6+)
  - Classic JavaScript (ES5)
  - Browser technology and quirks (Chrome, Safari, IE)
  - Build Tools (Make, Gulp, NPM Scripts)
  - Asset Bundlers (WebPack, Browserify)
  - Testing Frameworks (Mocha, Karma)
  - Git and GitHub
  - Microsoft Office Suite (Word, Excel, Outlook)
  - Remote working and communication tools (GoToMeeting, Slack, Asana)
  - Adobe Creative Suite
- Familiarity with the Following Systems:
  - Node.js
  - NPM
  - Wordpress
  - Virtual Machines (Virtual Box)
  - Video Streaming (dashjs)
- Skill / Familiarity with these systems is a bonus:
  - AWS (S3, EC2, CodeBuild, CodePipeline, etc)
  - Wordpress Theme Development
  - PHP
  - Ubuntu Server
  - xAPI
  - Learning Management Systems (Litmos, Canvas)
  - Learning Record Stores (Learning Locker)

To Apply:
This position is OPEN UNTIL FILLED

Please fill out the form below to apply. Don’t forget to attach your resume, cover letter and provide a link to your portfolio.

If you are selected for the candidate pool you will be asked to complete a skills assessment.
---
## Interested?
Trifoia is a team of content developers, instructional designers, technology experts, researchers, media producers, and storytellers who produce training content for maximum impact and reach.

Do you like to analyze problems and build solutions? Do you feel you have more to offer and would like to contribute to projects that help people? Do you take your work seriously but like to play and enjoy life?

If so, attach your resume and cover letter and drop us a line through the contact form below.
```

Implement your own dummy contact form with the following fields
- Email (required)
- Phone number (optional)
- Message (required)
- Resume File Upload (required)
- Cover Letter File Upload (required)

## Footer
The footer should have the following copyright text:
```
© 2018 Trifoia. All rights reserved.
```

As well as links to the following pages:
- Terms of Use
- Privacy Policy
- COI Policy
- Careers
- Projects

# Colors
The following Hex codes represent our six official "Trifoia" colors:
- ![#ff4d00](https://placehold.it/15/ff4d00/000000?text=+) `#ff4d00`
- ![#ffa400](https://placehold.it/15/ffa400/000000?text=+) `#ffa400`
- ![#c2e76b](https://placehold.it/15/c2e76b/000000?text=+) `#c2e76b`
- ![#00bc70](https://placehold.it/15/00bc70/000000?text=+) `#00bc70`
- ![#00acc8](https://placehold.it/15/00acc8/000000?text=+) `#00acc8`
- ![#0055b8](https://placehold.it/15/0055b8/000000?text=+) `#0055b8`

For the purposes of this exercise, use of these colors is **not allowed**. This is for your own protection, as well as to encourage creativity! You are allowed to use slight variants of these colors, but these exact hex codes are off limits

# Fonts
`fira-sans` is the font family used by Trifoia branding. Just like the Trifoia colors, the Trifoia font family is also off limits for this exercise

# Submission
Submission of materials will be conducted through Git, to show that you have some basic understanding of the Git / GitHub ecosystem. Please follow the following steps for development and submission
1. Fork the original Trifoia version of this project to your own Github account
2. Once on your own fork, go wild! Use whatever techniques and environments you are most comfortable with
3. When you are ready for final submission, make a pull request into the upstream branch with your name on it and your work will be reviewed

If building / running / looking at your work requires any special tools or steps, list those below. There is also space for any notes or feedback you would like to give

# Building
Fill in with your own build instructions

# Notes
TODO:
- [x] Header
- [x] Body
- [x] Footer
- [x] Colors
  - #7497E1
  - #6CEB74
  - #FFAA33
  - #202121
- [x] Font
- [x] Implement "Cool words"
- [x] Check accessibility
  - [x] color blind
  - [x] screen reader
- [x] Responsive
- [ ] Make build instructions
- [x] Host on github pages
