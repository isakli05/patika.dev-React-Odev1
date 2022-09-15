import axios from 'axios'

async function getData(userID) {
    const { data: user } = (await axios(`https://jsonplaceholder.typicode.com/users/${userID}`))

    const { data: post } = (await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`))

    const usersPost=["user:",user, "posts:",[...post]]
    return usersPost
}

export default getData;