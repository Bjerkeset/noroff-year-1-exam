# Project Exam Bjerkeset

This is a standard blog website created for a hypothetical web development team. The primary features of the website are designed to collect customer data, specifically targeting user behavior and intentions. This will aid in understanding their needs and preferences, ultimately resulting in a more personalized and efficient user experience.

## Resources

- [Brief] https://fed-vocational-astro-course.vercel.app/en/exam-1/brief

- [Design] (https://www.figma.com/file/fUyB7KOpKcnfweVJu42HGU/Project-Exam?type=design&node-id=25%3A103&t=F6UBu64Xfu3XM2qg-1)

- [Production deploy] (https://fed1-exam-project-bjerkeset.vercel.app/)

- [GitHub] (https://github.com/Bjerkeset/fed1-exam-project-Bjerkeset)

- [Deployment CI] (https://vercel.com/bjerkeset/fed1-exam-project-bjerkeset)

- [API Docs] (https://www.sanity.io/docs)

- [API Endpoint] (https://npd35udx.api.sanity.io/v1/data/query/production)

## Report

FED Project Exam 1 Report
Author: Bendik Bjerkeset

Introduction

During this semester, I undertook the task of creating a blog website for a fictional web development team. The site's primary purpose was to act as a lead generation tool for the company, collecting useful customer information and serving as a platform to showcase the team's capabilities. The website features five main pages that users can navigate to learn more about the company's values, services, and expertise.

A standout feature is the price calculator, an interactive tool that estimates service costs based on user inputs. It serves to project a sense of professionalism, establish trust, and gather information about potential clients' needs. Another prominent feature is the blog section. Visitors can preview and explore the company's latest blog entries, gaining insights into industry trends and the team's perspectives.
The design strategically leads users towards a call-to-action (CTA), encouraging them to complete a contact form.

Theme Selection

The theme for the blog was selected to be primarily a dark theme, complemented with two colors - orange/gold and blue. These colors were used strategically for specific details and features. Orange/gold was used for primary details, while blue was designated for links and Call-to-Action buttons. The site's aesthetics, tone, and content were designed to appeal to potential clients, showcasing the team's technical abilities to deliver tailored, high-quality services.

Design Prototyping

For the prototyping phase, Figma was utilized to create a high and low-fidelity design. This allowed me to visualize and fine-tune the layout, design elements, and user flow before diving into the development process.

Front-End Development

The front-end of the website was developed using a combination of HTML, CSS, and JavaScript. CSS variables played a crucial role in ensuring standardization of colors and sizes across the site, contributing to a consistent look and feel.

In terms of JavaScript, ES6 was utilized to promote code reusability. This approach allowed for functions to be reused across different pages of the site, adhering to the DRY (Don't Repeat Yourself) principle, which enhances code maintainability and readability.

A significant portion of the HTML content was dynamically generated via JavaScript functions. This content was rendered based on the data received from the REST API, allowing for real-time updates and interactivity. This method of development enhanced the site's responsiveness and usability, ultimately leading to an improved user experience.

Back-End Development

The back-end of the project was developed using Sanity, a content management system. This choice came after an attempt to use Strapi, which proved challenging in the deployment phase due to database management issues. Sanity offered a seamless experience, and as a bonus, was free. The platform allows non-technical users to create their own types, while the developers can fetch the Sanity API to display it on the site.

User Experience

Ensuring a positive user experience was paramount in the design and development of the site. Responsiveness was achieved through CSS view-width and max-width configuration, as well as the use of REM and variable font sizes. This made the site accessible to users on various devices, from mobile phones to desktop computers.

User Testing and Feedback

Towards the end of the project, the website was shared with several individuals for user testing. Feedback was collected both verbally and through Hotjar, a behavior analytics tool installed on the site. This allowed for observation of user navigation patterns and identification of areas requiring improvement.

Conclusion

Building a blog website for a fictional web development team has been an engaging and educational process. Through this project, I was able to apply the skills and knowledge gained throughout the course, including front-end and back-end development, design prototyping, project management, and user experience design.

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:Bjerkeset/CA-Interaction-design-Bendik-Bjerkeset
```

```
cd fed1-exam-Bjerkeset
```

3. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run dev
```

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [x] A error message is present when the End-user encounters a error while viewing the index page.
- [x] A error message is present when the End-user encounters a error while viewing the details page.
- [x] As a customer I can view the title of the item on the browser tab for a details page.
- [x] As a customer I can view validation message when they input an incorrect name.
- [x] As a customer I can view validation message when they input an incorrect subject that is less than 15 characters.
- [x] As a customer I can view validation message when they input an incorrect Email address.
- [x] As a customer I can view a validation message when they input an incorrect physical address that is less than 25 characters long.
- [x] As a customer I want to be able to view the latest blog posts on the home page.
- [x] As a customer, I want to see a list of the first 10 blog posts on the blog section, so that I can quickly scan through the content and decide which posts I want to read.
- [x] As a customer I want to be able to view a list of all blog posts on the blog section.
- [x] As a customer I want A responsive website that can be As a customer, I want to ensure that the website is responsive and accessible so that I can access it on any device and easily navigate through it using any accessibility tools I need.
- [x] As a customer, I want to see a clear and visually appealing design on the website, so that I can easily read the content and engage with the website.
- [x] As a customer, I want to see a carousel/slider on the home page to display the latest blog posts, so that I can quickly access and view the latest content.
- [x] As a customer, I want to be able to click on a blog post and be taken to a page with specific details about that post, so that I can get more in-depth information about the topic.
- [x] As a customer, I want to be able to click on images in a blog post and see a larger version in a modal, so that I can view images in greater detail.
- [x] As a customer, I want to be able to easily contact the website owners through a contact form, so that I can reach out with any questions or feedback.
- [x] As a customer, I want to see error messages when I fill out the contact form incorrectly, so that I can correct my mistakes and successfully submit my message.

## End-user success criteria (Optional - 100%)

- [x] End-user can search for a specific item.
- [x] End-user can filter the list.
- [x] End-user can sort list by;
  - [x] Name ascending order
  - [x] Name descending order
- [x] Confirmation modal after custumer submits a successful contact form.
- [x] End-user can auto-fill the contact form using the browser auto-fill.
- [x] End-user can auto-fill the contact form using a password manager.
- [x] Validation still works when End-user uses copy and pastes into input fields.
- [x] End-user can see a postive feedback when they input correct info and pass validation.
- [x] End-user can experience pleasant animations.
- [x] End-user needs to prove there are human using a captcha feature on the contact form.
  - [x] Each item in the list has a staggered animation.
  - [x] Contact form success modal fades in.
- [x] End-user can view a custom favicon.
- [x] CSS uses variables
- [x] Code is dry - There are no repeating functions, variables.
- [x] My commit messages are relavant and make sense. [How to write good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [x] As a stakeholder, I want to view the website analytics.
- [x] As a stakeholder, I want to show my customers a disclamer on the website, so that they are aware of the terms and conditions of using the website.
- [x] As a customer, I want to ensure that my personal information submitted through the contact form is kept secure and not shared with any third-party entities.
- [x] As a customer, I want to be able to sort, filter, or search the blog posts, so that I can quickly find the content that is most relevant to me.
- [x] As a customer, I want to be able to submit comments on a blog post, so that I can engage with other readers and share my thoughts on the topic.

- [x] [End-user experiences a complete custom UI design.](https://www.figma.com/file/KExTTAE75DRhq2xTvapFR4/FED-Whiteboard?node-id=0%3A1&t=UItKehGgT8gRlibY-1)

  - [x] Is user-friendly
  - [x] Effective use of the pillars of design
    - [x] Typography
    - [x] Colour
    - [x] Composition
    - [x] Art Direction
    - [x] Motion
  - [x] Adhered to principles of design
    - [x] Contrast
    - [x] Balance and alignment
    - [x] Emphasis
    - [x] Proportion
    - [x] Hiearchy
    - [x] Repetition
    - [x] Ryhthem
    - [x] Pattern
    - [x] Negative space
    - [x] Movement

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [x] All pages have a meta description.
- [x] All pages have a valid title.
- [x] All pages import the correct css files.
- [x] All pages import the correct JS file.
- [x] Details page URL includes a query param.
- [x] My website makes a GET request to an API to get a list of results.
- [x] My website makes a GET request to an API to get details of one result.
- [x] Input fields have the following attributes;
- [x] All images have an alt tag;
  - [x] A name,
  - [x] A placeholder,
  - [x] A aria-describedby,
  - [x] Required
- [x] I have not copied Javascript code.
- [x] I have not used a Javascript library.
- [x] Removed all unused files.
- [x] Named all images properly.
- [x] Committed all my code to github.
- [x] My repo is publically viewable.
- [x] I've submitted/ written a report.
- [x] I've removed all todo notes in code.
- [x] I've removed all console logs in code.
- [x] Code is formatted correctly.
- [x] There are no red underlines in VSCode.
- [x] There are no error messages in the terminal when I run the project.
- [x] My code is indented correctly.
- [x] I've checked my report for grammer & spelling using grammerly or chatGPT
- [x] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [x] I've checked off every todo in this README.

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Open-props](https://open-props.style/) - Supercharged
  CSS variables.
- [Animate.css](https://animate.style/) - Just-add-water CSS animations

## Authors

- Bendik Bjerkeset (@Bjerkeset)
- Monde Sineke (@S3ak)

## Contact

Email: bendik@bjerkeset.dev
