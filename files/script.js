$(document).ready(function() {

    "use strict";

    $(".streaming").hover(
        function() {
            $(this).find(".play-btn").css('background-color', 'black');
            $(this).find(".play-btn").css('color', 'white');
        }, function() {
            $(this).find(".play-btn").css('background-color', '#f0f0f0');
            $(this).find(".play-btn").css('color', '#777');
        }
    );

    $('#vk').on('click', function() {
        location.href = "https://vk.com/artist/magarich?z=audio_playlist-2000257052_16257052%2Ff110079f5bfefff69b";
    });

    $('#yandex').on('click', function() {
        location.href = "https://music.yandex.ru/album/23416809/track/107039197";
    });

    $('#spotify').on('click', function() {
        location.href = "https://open.spotify.com/album/6nFdnbP7YXhoghTSF29WFq";
    });

    $('#vkgroup').on('click', function() {
        location.href = "https://vk.com/magarich_music";
    });

     $('#apple').on('click', function() {
        location.href = "https://music.apple.com/album/id/1643435768";
     });

     $('#itunes').on('click', function() {
         location.href = "http://itunes.apple.com/album/id1643435768?ls=1&app=itunes";
      });

});