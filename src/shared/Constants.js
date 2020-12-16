const dev = {
    API_URL: "http://localhost:3001"
}

const prod = {
    API_URL: "localhost:3001"
}

export default process.env.NODE_ENV === "production" ? prod : dev