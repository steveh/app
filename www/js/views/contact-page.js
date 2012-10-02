/* ---------------------------------------------------------------------------------------------------------
 
 	Contact Page
	* temporary content
 
---------------------------------------------------------------------------------------------------------*/

	
	nzp.ContactPageView = Backbone.View.extend({        	
		
		tagName: 'div',
		className: 'page',
		id: 'contact-page',

		template: _.template($('#tmp-contact').html()),

		initialize: function() {
			_.bindAll(this, "render", "processEmail"); 
			this.render();       			
		},

		events: {
			"click #support-email" : "processEmail" 
		},

		render: function(){
			this.$el.html(this.template({}));
		},

		processEmail: function(e) {
	 		e.preventDefault();
			
			var args = {
	 			toRecipients: 'nzpost@custhelp.com'
	 		};		 				 		
			
			Cordova.exec(null, null, "EmailComposer", "showEmailComposer", [args]);	
		}

	});
