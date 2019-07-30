export const getCorrectQuestion = (pin, id) => {
  const answers = getLocalStorageArray(pin)
  const answer = answers.filter(answer => answer.questionId === id)
  if (answer.length > 0) return answer[0].answer
}

export const setAnswers = (pin, answer, questionId, correctAnswer) => {
  var Answers
  const answers = getLocalStorageArray(pin)
  Answers = answers ? answers : []

  const newAnswers = Answers.filter(answer => answer.questionId !== questionId)
  Answers = [...newAnswers, { answer, questionId, correctAnswer }]
  localStorage.setItem(
    pin,
    JSON.stringify([...newAnswers, { answer, questionId, correctAnswer }])
  )

  return Answers
}

export const getLocalStorageArray = localStorageKey => {
  return localStorage.getItem(localStorageKey)
    ? JSON.parse(localStorage.getItem(localStorageKey))
    : []
}
