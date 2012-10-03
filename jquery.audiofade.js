/*! jquery.audiofade.js — набор плагинов для плавного включения и выключения аудио
 *  © Артём Поликарпов, 2012 | https://github.com/artpolikarpov/audiofade
 */
(function ($) {
  var _options = {
    time: 333,
    volume: null
  }
  $.fn.audioFadeOut = function (options) {
    options = $.extend({}, _options, options);
    this.each(function () {
      $(this).stop().animate({volume: 0}, options.time, function () {
        this.pause();
      });
    });
  }
  $.fn.audioFadeIn = function (options) {
    options = $.extend({}, _options, options);
    this.each(function () {
      this.play();
      $(this).stop().animate({volume: 1}, options.time);
    });
  }
  $.fn.audioFadeTo = function (options) {
    options = $.extend({}, _options, options);
    this.each(function (options) {
      this.play();
      $(this).stop().animate({volume: options.volume}, options.time);
    });
  }
})(jQuery);