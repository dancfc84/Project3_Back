// ? Error handling functionality will go in here.

export default function errorHandler(err, req, res, next) {

  if (err.name === "ValidationError") {

    const customErrors = {}

    for (const key in err.errors) {
      customErrors[key] = err.errors[key].message
    }
  
    console.log(customErrors);
  
    return res.status(422).json({
      message: "User has missing or invalid fields",
      errors: customErrors,
    })

  } else if (err.name === 'TypeError') {

    return res.status(422).json({
      message: "User has missing or invalid fields",
      errors: {
        email: "Email details are missing or invalid",
        password: "Password is missing or invalid",
      },
    })

  }

  res.status(500).json({ message: "There was an error" })
  next()

}