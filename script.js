"use strict";

const quizForm = document.querySelector("#quiz-form");
const quizFeedback = document.querySelector("#quiz-feedback");

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const questions = [...quizForm.querySelectorAll(".quiz-question")];
  const unanswered = questions.some((question) => !question.querySelector("input:checked"));

  if (unanswered) {
    quizFeedback.textContent = "Ještě vyber odpověď u každé otázky.";
    quizFeedback.dataset.state = "error";
    return;
  }

  let score = 0;
  questions.forEach((question) => {
    const answer = question.dataset.answer;
    const selected = question.querySelector("input:checked").value;
    const isCorrect = selected === answer;

    question.classList.toggle("is-correct", isCorrect);
    question.classList.toggle("is-incorrect", !isCorrect);
    if (isCorrect) score += 1;
  });

  quizFeedback.dataset.state = "success";
  quizFeedback.textContent = `Máš ${score} z ${questions.length} správně. ${
    score === questions.length
      ? "Skvěle — algoritmické myšlení ti jde!"
      : "Zkus si projít otázky, které ještě potřebují doladit."
  }`;
});

quizForm.addEventListener("reset", () => {
  quizForm.querySelectorAll(".quiz-question").forEach((question) => {
    question.classList.remove("is-correct", "is-incorrect");
  });
  quizFeedback.textContent = "";
  delete quizFeedback.dataset.state;
});
