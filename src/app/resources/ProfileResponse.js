const Resource = require('resources.js')

class ProfileResponse extends Resource {
  async toArray () {
    return {
      name: this.name || '',
      role: this.role || '',
      email:this.email || "",
      account_status:this.account_status || '',
      bio:this.profile.bio || '',
      profile_picture_url:this.profile.profile_picture_url || '',
      website:this.profile.website || '',
      location:this.profile.location || '',
       birthdate:this.profile.birthdate || '',
    }
  }
}

module.exports = ProfileResponse