# Asciinough-Questions
### _Ember.js Independent Project 8.11.2017_
By Michelle Poterek

## Description
This is an Ember application much in the same vein as StackOverflow or Quora in which a user will be able to ask a question and receive answers from industry professionals.

## Planning

#### 1. Configuration/dependencies
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

  #### Installation

* `git clone https://github.com/PoterekM/asciinough-questions.git`
* `cd asciinough-questions`
* `npm install`

  #### Running / Development
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

#### 2. Program Specifications
* Questions should include the content of the question itself, an author, and additional notes.
* Answers should include the content of the answer and the author.
* Include a header and/or navbar that appears on all pages. It should contain the name of your site and a link to the home page, and other content such as social media, LinkedIn, etc.
* List all questions on the homepage, displaying only the question and the name of the author.
* Allow users to click a question, to be routed to another page containing additional information and question details.
* Allow users to add and edit questions.
* Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.

#### Development Work Flow
* Start with creating routes (about, FAQ, Admin, home) and display them in a navigation bar so it is easy to traverse webpage when developing.
* Build out index that will include:
  * questions
    * each question will be a link will display the username and title. A user will click on it to view a full question detail (move on to a question detail that will display full question)
  * a button to add a new question.
    * This will be a conditional statement for a form to appear when clicked. When saved this new question will display on the home page.
* Build out individual question page.
  * This will display the username, title, category, and body of the question.
  * Add ability to update or delete a question.
* Add a model for answers that will include username, level, and feedback.
  * once this is complete, a form to leave an answer will be available on an individual question page.
  * Add ability to update or delete an answer.
* Move on to styling page
* Ensure all unnecessary files are deleted (such as questions.json), refactor and ensure program is working as expected.



### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
