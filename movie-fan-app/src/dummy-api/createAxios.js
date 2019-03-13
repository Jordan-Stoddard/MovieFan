import axios from 'axios'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTdjNTlkZWI2YTdiZjliNDBmYzU3YWQ5ZTFmZjQ2OSIsInN1YiI6IjVjN2RhMjdmYzNhMzY4NGE5NTE5NDg1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4f4CHjjoi-csj1QAK7A-q0oh5bYIZNkH0i8SVOKwn68'

export default axios.create({
    baseURL: 'https://api.themoviedb.org/',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})

