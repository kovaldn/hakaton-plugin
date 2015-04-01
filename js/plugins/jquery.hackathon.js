(function($){
    $.fn.hackogin = function (options) {

        var options = $.extend({
            members: ['Вахрушев Антон', 'Сабанцев Владимир', 'Юрчик Олег', 'Моисеев Кирилл', 'Сигай Герман'],
            date: '27 марта 2015',
            number: '2'
        }, options);

        var list_of_members = '';
        for (var i = 0; i < options.members.length; i++) {
            list_of_members += '<li class="hackathonplug-modal__authors-list-item">' +
            options.members[i] +', ' +
            '</li>';
        }
        var divmodal = document.createElement('div');
        divmodal.className = 'hackathonplug-modal__overlay';

        divmodal.innerHTML = '' +
                        '<div class="hackathonplug-modal">' +
                            '<div class="hackathonplug-modal-wrapper">' +
                                '<a class="hackathonplug-modal__close" href="#">Закрыть</a>' +
                                '<div class="hackathonplug-modal__title">' +
                                    'Этот сайт сделан на Loftblog Хакатоне ' + options.number +
                                '</div>' +
                                '<div class="hackathonplug-modal__description">' +
                                    'Дорогой друг!' +
                                    'Сайт, на котором ты сейчас находишься, был сделан на Хакатоне от Loftblog.ru людьми, некоторые из которые впервые увидели друг друга. На всё про всё у них было не больше 5 часов. И в таких боевых условиях они создали то, что ты видишь на экране своего монитора.' +
                                    'Хочешь создавать такие же интересные проекты? Хочешь видеть своё имя рядом с именами крутых разработчиков и дизайнеров? Мы ждем тебя!' +
                                '</div>' +
                                '<div class="hackathonplug-modal__authors">' +
                                    '<div class="hackathonplug-modal__authors-title">Участники:</div>' +
                                        '<ul class="hackathonplug-modal__authors-list">' +
                                            list_of_members +
                                        '</ul>' +
                                    '</div>' +
                                '<div class="hackathonplug-modal__date">' +
                                    '<span class="hackathonplug-modal__date-span1">Дата хакатона:</span>' +
                                    '<span class="hackathonplug-modal__date-span2">' + options.date + '</span>' +
                                '</div>' +
                                '<div class="hackathonplug-modal__registration">' +
                                    '<a class="hackathonplug-modal__registration-link" href="http://eepurl.com/bihfKz">' +
                                        'Хочу на хакатон!' +
                                    '</a>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
        '';
        var linkbutton = document.createElement('div');
        linkbutton.className = 'hakaton';
        //linkbutton.attr('href', '#');
        linkbutton.innerHTML = '<div class="hakaton__mintext-num">#' + options.number + '</div>';

        document.body.appendChild(divmodal);
        document.body.appendChild(linkbutton);

        var
            button = $('body .hakaton'),
            popup = $('body .hackathonplug-modal__overlay'),
            close = $('body .hackathonplug-modal__close');

        var init = function(pos) {

            setPosition(pos);

            button.on('click', function () {
                showPopup();
            });

            close.on('click', function () {
                hidePopup();
            });
        };

        var showPopup = function() {
            popup.addClass('visible');
        };

        var hidePopup = function () {
            popup.removeClass('visible');
        };

        var setPosition = function (pos) {
            var position = pos || 'top-left';

            switch (pos) {
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
        };
        return this.each(init(options.position));
    };
})(jQuery);
