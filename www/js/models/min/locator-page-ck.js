/* Locator Page */nzp.LocatorPage=Backbone.Model.extend({defaults:{apiKey:"a7f0c7b0b123012f06d2000c29b44ac0",noResults:15},url:function(){return"http://api.nzpost.co.nz/locator/api/locations?api_key="+this.get("apiKey")+"&type=Postbox+Lobby&type=Dropbox&type=Postbox&type=PostShop&nearby_latitude="+this.get("lat")+"&nearby_longitude="+this.get("lng")+"&lat1=&lng1=&lat2=&lng2=&keyword=&max="+this.get("noResults")+"&format=jsonp&callback=?"},parse:function(e){var t={postshop:[],postbox:[],postboxlobby:[],postother:[],closestPlaces:[]};_.each(e,function(e){switch(e.type.toLowerCase()){case"postshop":t.postshop.push(e);break;case"postbox":t.postbox.push(e);break;case"postbox lobby":t.postboxlobby.push(e);break;default:t.postother.push(e)}},this);t.postshop&&t.postshop.length>0&&t.closestPlaces.push(t.postshop[0]);t.postbox&&t.postbox.length>0&&t.closestPlaces.push(t.postbox[0]);t.postboxlobby&&t.postboxlobby.length>0&&t.closestPlaces.push(t.postboxlobby[0]);t.postother&&t.postother.length>0&&t.closestPlaces.push(t.postother[0]);return t}});