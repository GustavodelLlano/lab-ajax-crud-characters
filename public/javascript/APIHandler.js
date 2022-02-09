class APIHandler {
  constructor () {
    
    this.axiosApp = axios.create({
      baseURL: "https://minions-api.herokuapp.com/characters"
    })
  }

  getFullList () {
    return this.axiosApp.get("/")
  }

  getOneRegister (id) {
    return this.axiosApp.get(`/${id}`)
  }

  createOneRegister (characterInfo) {
    return this.axiosApp.post("/", characterInfo)
  }

  updateOneRegister (id, info) {
    return this.axiosApp.put(`/${id}`, info)
  }

  deleteOneRegister (id) {
    return this.axiosApp.delete(`/${id}`)
  }
}
