const Resource = require('resources.js')

class LoginResponse extends Resource {
  async toArray () {
    return {
      id: this.user.id || '',
      name: this.user.name || '',
      role: this.user.role || '',
      tokens: {access: this.tokens.accessToken,refresh:this.tokens.refreshToken},
    }
  }
}

module.exports = LoginResponse