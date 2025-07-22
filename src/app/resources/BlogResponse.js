const Resource = require('resources.js')

class BlogResponse extends Resource {
  async toArray () {
    return {
      id:this.id || '',  
      title: this.title || '',
      content: this.content || '',
      is_published: this.is_published || '',
      summary: this.summary || '',
      tags: this.tags || '',
      read_time: this.read_time || '',
      category: this.category || '',
    //   image_url: this.Images.image_url || '',
    }
  }
}

module.exports = BlogResponse
