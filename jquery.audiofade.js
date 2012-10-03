/*! jquery.audiofade.js — набор плагинов для плавного включения и выключения аудио
 *  © Артём Поликарпов, 2012 | https://github.com/artpolikarpov/audiofade
 */
(function ($) {
  var time = 333;
  $.fn.audioFadeOut = function (options) {
    options = $.extend({time: time}, options);
    this.each(function () {
      $(this).stop().animate({volume: 0}, options.time, function () {
        this.pause();
        if (options.onComplete) {
          options.onComplete.call(this);
        }
      });
    });
    return this;
  };
  $.fn.audioFadeIn = function (options) {
    options = $.extend({volume: 1, time: time}, options);
    this.each(function () {
      this.play();
      $(this).stop().animate({volume: options.volume}, options.time, function () {
        if (options.onComplete) {
          options.onComplete.call(this);
        }
      });
    });
    return this;
  };
  $.fn.audioFadeTo = function (options) {
    options = $.extend({time: time}, options);
    this.each(function () {
      $(this).stop().animate({volume: options.volume}, options.time, function () {
        if (options.onComplete) {
          options.onComplete.call(this);
        }
      });
    });
    return this;
  };
})(jQuery);