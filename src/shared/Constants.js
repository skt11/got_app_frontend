const dev = {
    API_URL: "http://localhost:3001"
}

const prod = {
    API_URL: "https://got-battles-backend.herokuapp.com"
}

export default process.env.NODE_ENV === "production" ? prod : dev