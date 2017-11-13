var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', { logging: false });


const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        // get() {
        //     const urlTitle = this.getDataValue('urlTitle');
        //     // console.log(this.getDataValue('title'))
        //     return this.getDataValue('title');
        // }
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false
        // set(val) {
        //     this.setDataValue(val.toLowerCase());
        // }

    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },

});

Page.hook("beforeValidate", function(page) { 
    
    if (page.title) { 
        page.urlTitle = page.title.replace(/\s/g, "_").replace(/\W/g, ""); 
        console.log (page.urlTitle);
    } else { 
        console.log('hook working');
        page.urlTitle = Math.random().toString(36).substring(2, 7); 
        console.log (page.urlTitle);
    } 
    // console.log (page.urlTitle);
    console.log(page);
});


const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});


    module.exports = {
        Page: Page,
        User: User,
        db: db
    };