/*! jquery.audiofade.js — набор плагинов для плавного включения и выключения аудио
 *  © Артём Поликарпов, 2012 | https://github.com/artpolikarpov/audiofade
 */
(function ($) {
  var _options = {
    time: 333,
    volume: null,
    onComplete: null
  }
  $.fn.audioFadeOut = function (options) {
    options = $.extend({}, _options, options);
    console.log(options);
    this.each(function () {
      $(this).stop().animate({volume: 0}, options.time, function () {
        this.pause();
      });
    });
    return this;
  }
  $.fn.audioFadeIn = function (options) {
    options = $.extend({}, _options, options);
    console.log(options);
    this.each(function () {
      this.play();
      $(this).stop().animate({volume: 1}, options.time);
    });
    return this;
  }
  $.fn.audioFadeTo = function (options) {
    options = $.extend({}, _options, options);
    console.log(options);
    this.each(function () {
      $(this).stop().animate({volume: options.volume}, options.time, function () {
        if (options.onComplete) {
          options.onComplete.call(this);
        }
      });
    });
    return this;
  }
})(jQuery);