$(document).ready(function(){

	var
		hackogin = (function(){

			var
				button = $('body .hakaton'),
				popup = $('body .hackathonplug-modal__overlay');

			return {
				init: function(obj){

					var
						_this = this;

					_this.setPosition(obj);

					button.on('click', function(){
					    _this.showPopup();
					});

					popup.on('click', function(){
						_this.hidePopup();
					});
				},

				showPopup: function(){
					popup.addClass('visible');
				},

				hidePopup: function() {
					popup.removeClass('visible');
				},

				setPosition: function(obj) {
					var position = obj.position || 'top-left';

					switch (obj.position) {
						case 'top-left' :
							button.attr('class', 'hakaton hakaton_top_left');
							break;

						case 'top-right' :
							button.attr('class', 'hakaton hakaton_top_right');
							break;

						case 'bottom-left' :
							button.attr('class', 'hakaton hakaton_bottom_left');
							break;

						case 'bottom-right' :
							button.attr('class', 'hakaton hakaton_bottom_right');
							break;

					}
				}
			}
		})();


		hackogin.init({
			position: 'top-left'
		});


}); // - > ready_end;
