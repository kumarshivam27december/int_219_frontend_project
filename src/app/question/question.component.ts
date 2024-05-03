import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

}


export interface Question {
  numb: number;
  question: string;
  answer: string;
  options: string[];
}

const questions: Question[] = [
  {
    numb: 1,
    question: "What challenge did codepen have in the month of March 2023?",
    answer: "Buttons",
    options: ["Shape", "Buttons", "Texture", "The typography of quotes"],
  },
  // ... other questions remain the same
  {
    numb: 2,
    question: "What color shade is this hex #ffff00?",
    answer: "yellow",
    options: [
      "orange",
      "red",
      "yellow",
      "pink"
    ]
  },
    {
    numb: 3,
    question: "How does a FOR loop start?",
    answer: "for (i = 0; i <= 5; i++)",
    options: [
      "for (i = 0; i <= 5; i++)",
      "for (i <= 5; i++)",
      "for i = 1 to 5",
      "for (i = 0; i <= 5)"
    ]
  },
    {
    numb: 4,
    question: "How do you round the number 7.25, to the nearest integer?",
    answer: "Math.round(7.25)",
    options: [
      "Math.rnd(7.25)",
      "rnd(7.25)",
      "round(7.25)",
      "Math.round(7.25)"
    ]
  },
    {
    numb: 5,
    question: "What is the default value of the position property?",
    answer: "static",
    options: [
      "relative",
      "fixed",
      "static",
      "absolute"
    ]
  },
    {
    numb: 6,
    question: "How do you make each word in a text start with a capital letter?",
    answer: "text-transform:capitalize",
    options: [
      "text-transform:capitalize",
      "text-style:capitalize",
      "transform:capitalize",
      "You can't do that with css"
    ]
  },
    {
    numb: 7,
    question: "How do you group selectors?",
    answer: "Separate each selector with a comma",
    options: [
      "Separate each selector with a slash",
      "Separate each selector with a plus sign",
      "Separate each selector with a space",
      "Separate each selector with a comma"
    ]
  },
    {
    numb: 8,
    question: "How to write an IF statement in JavaScript?",
    answer: "if (i == 5)",
    options: [
      "if (i == 5)",
      "if i = 5 then",
      "if i = 5",
      "if i == 5 then"
    ]
  },
    {
    numb: 9,
    question: "How do you select all p elements inside a div element?",
    answer: "div p",
    options: [
      "p,div",
      "div.p",
      "div + p",
      "div p"
    ]
  },
  {
    numb: 10,
    question: "How can you detect the client's browser name?",
    answer: "navigator.appName",
    options: ["client.browserName", "client.navName", "navigator.appName", "browser.name"],
  },
];

// Selecting required elements (assuming class names haven't changed)
const start_btn: HTMLButtonElement = document.querySelector(".start_btn button")!;
const info_box: HTMLElement = document.querySelector(".info_box")!;
const exit_btn: HTMLElement = info_box.querySelector(".buttons .quit")!;
const continue_btn: HTMLElement = info_box.querySelector(".buttons .restart")!;
const quiz_box: HTMLElement = document.querySelector(".quiz_box")!;
const result_box: HTMLElement = document.querySelector(".result_box")!;
const option_list: HTMLElement = document.querySelector(".option_list")!;
const time_line: HTMLElement = document.querySelector("header .time_line")!;
const timeText: HTMLElement = document.querySelector(".timer .time_left_txt")!;
const timeCount: HTMLElement = document.querySelector(".timer .timer_sec")!;

// Export the questions array for potential use in other components
export { questions };
