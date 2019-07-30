import jwt from "jsonwebtoken"
export const jwttokencreator = options => {
  const { role, email } = options

  return jwt.sign(options, process.env.JWT_SECRET, { expiresIn: "1d" })
}

export const getResult = data => {
  if (data) {
    const correctAnswers = data.filter(
      question => question.answer === question.correctAnswer
    )
    return Math.floor((correctAnswers.length / data.length) * 100)
  } else throw new Error("No Data")
}
