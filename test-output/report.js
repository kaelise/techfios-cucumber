$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/setcolor.feature");
formatter.feature({
  "line": 4,
  "name": "As a user I want to click on set skyBlue background button",
  "description": "so that the background color change to skyBlue;",
  "id": "as-a-user-i-want-to-click-on-set-skyblue-background-button",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Valid user should be able to set skyBlue backgroung",
  "description": "",
  "id": "as-a-user-i-want-to-click-on-set-skyblue-background-button;valid-user-should-be-able-to-set-skyblue-backgroung",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on techfios.com/test website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Set SkyBlue Background button;",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the background color will change to sky blue;",
  "keyword": "Then "
});
formatter.match({
  "location": "SetColorSteps.i_am_on_techfios_com_test_website()"
});
formatter.result({
  "duration": 18601777246,
  "status": "passed"
});
formatter.match({
  "location": "SetColorSteps.i_click_on_Set_SkyBlue_Background_button()"
});
formatter.result({
  "duration": 299486772,
  "status": "passed"
});
formatter.match({
  "location": "SetColorSteps.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 280660144,
  "status": "passed"
});
formatter.after({
  "duration": 1160340019,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Valid user should be able to set white backgroung",
  "description": "",
  "id": "as-a-user-i-want-to-click-on-set-skyblue-background-button;valid-user-should-be-able-to-set-white-backgroung",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on techfios.com/test website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on white Background button;",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the background color will change to white;",
  "keyword": "Then "
});
formatter.match({
  "location": "SetColorSteps.i_am_on_techfios_com_test_website()"
});
formatter.result({
  "duration": 9609196194,
  "status": "passed"
});
formatter.match({
  "location": "SetColorSteps.i_click_on_white_Background_button()"
});
formatter.result({
  "duration": 364181895,
  "status": "passed"
});
formatter.match({
  "location": "SetColorSteps.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 196422500,
  "status": "passed"
});
formatter.after({
  "duration": 1257238371,
  "status": "passed"
});
});