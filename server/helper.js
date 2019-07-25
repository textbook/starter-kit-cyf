import jwt  from 'jsonwebtoken'
export const jwttokencreator = (options) => {
    const { role, email } = options
    console.log(options)
    
     return jwt.sign(options, process.env.JWT_SECRET, {expiresIn: "1d"})
} 