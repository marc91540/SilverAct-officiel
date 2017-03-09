var apos = require('apostrophe')({
  shortName: 'SilverAct',
  title: 'SilverAct',

  // These are the modules we want to bring into the project.
  modules: {
    // This configures the apostrophe-users module to add an admin-level
    // group by default
    'apostrophe-users': {
      groups: [
        {
          title: 'guest',
          permissions: [ ]
        },
        {
          title: 'admin',
          permissions: [ 'admin' ]
        }
      ]
    },
    // This configures the apostrophe-assets module to push a 'site.less'
    // stylesheet by default
    'apostrophe-assets': {
      stylesheets: [
        {
          name: 'home'
        },
        {
          name: 'activity'
        },
        {
          name: 'responsive'
        },
        {
          name: 'reset-css'
        },
        {
          name: 'video-js'
        },
        {
          name: 'video-js.min'
        }, 
        {
          name: 'video.min'
        },
        {
          name:'http://fonts.googleapis.com/css?family=Lobster'
        },
        {
          name: 'http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic'
        }
      ],
      scripts : [
        {
          name: 'home'
        }
      ]
    },
    // This configures our default page template
    'apostrophe-pages': {
      types: [
        {
          name: 'home',
          label: 'Home'
        },
        {
          name: 'activite',
          label: 'Activite'
        }
      ]
    }
    // Add your modules and their respective configuration here!
  }

});
