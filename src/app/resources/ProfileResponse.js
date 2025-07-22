const Resource = require('resources.js')

class ProfileResponse extends Resource {
  async toArray () {
    return {
      name: this.name || '',
      role: this.role || '',
      email:this.email || "",
      account_status:this.account_status || '',
      bio:this.UserProfile.bio || '',
      profile_picture_url:this.UserProfile.profile_picture_url || '',
      website:this.UserProfile.website || '',
      location:this.UserProfile.location || '',
      birthdate:this.UserProfile.birthdate || '',
    }
  }
}

module.exports = ProfileResponse