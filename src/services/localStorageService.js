class LocalStorageServices {
  static service = new LocalStorageServices();
  keys = {
    TOKEN: "token",
  };
  saveToken(accessToken) {
    localStorage.setItem(this.keys.TOKEN, accessToken);
  }
  getToken() {
    localStorage.getItem(this.keys.TOKEN);
  }
}
export default LocalStorageServices.service;
