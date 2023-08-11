const BASE_URL = "https://api.github.com/users"

export const getUser = async(value: string) => {
  return fetch(`${BASE_URL}/${value}`)
}