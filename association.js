const User=require("./src/app/models/user");
const UserProfile=require("./src/app/models/UserProfile");
const Blog=require("./src/app/models/Blog");
const BlogImages=require("./src/app/models/BlogImages");

//one to one
User.hasOne(UserProfile,{
    foreignKey:'user_id',
    as:'profile',
})

UserProfile.belongsTo(User,{
     foreignKey:'user_id',
     as:'user info',
})


//one to many 

User.hasMany(Blog,{
    foreignKey:'id',
    as:'blog',
})

Blog.belongsTo(User,{
     foreignKey:'author_id',
     as:'User',
})

// one to one

Blog.hasOne(BlogImages,{
    foreignKey:'id',
    as:'Images',
})

BlogImages.belongsTo(Blog,{
    foreignKey:'blog_id',
    as:'Blogs',
});