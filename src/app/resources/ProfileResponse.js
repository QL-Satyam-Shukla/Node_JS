const Resource = require('resources.js')

class ProfileResponse extends Resource {
  async toArray () {
    return {
      id: this.id || '',
      name: this.name || '',
      role: this.role || '',
      account_status:this.account_status || '',
    }
  }
}

module.exports = ProfileResponse