
    var feed = new Instafeed({
        get: 'user',
        userId: '3525383132',
        clientId: '960d25385c4a48b4a59cb371638397b0',
        accessToken:'3525383132.1677ed0.b1e12d230e17468980dcc5789516c356',
        resolution:'standard_resolution',
        sortBy:'most-liked',
        template: '<div class="col-sm-6 col-md-6 col-lg-4 p-3" style="padding-bottom:15px;"><a href="{{image}}"><div class="imgcontainer"><img src="{{image}}" /></div></a></div>'
    });
    feed.run();
    
 // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery-item').magnificPopup({
    type:'image',
    
      delegate: 'a',
      gallery:{
        enabled:true
      }
    });

      
