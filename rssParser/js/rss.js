
$(document).ready(function() {
    $.ajax({
        url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.pravda.com.ua%2Frss%2Fview_news%2F',
        type: 'get',
        success: function (data) {
            $('#indicator').hide();

            var titleStr = "";
            for (var i = 0; i < data.items.length; i++){
                $('#rssContent').append('<li class="title-news">' + data.items[i].title + '</li>');
                titleStr = titleStr + data.items[i].title + " ";
            }
            titleStr = excludeSymbols(titleStr);

            var mostWords = findMostWords (titleStr, 5);
              if (mostWords.length > 0) {
                  for (s = 0; s < mostWords.length; s++ )
                  $('.most-words').append('<li class="title-news">"' + mostWords[s][0] +
                      '" зустрічається: ' + mostWords[s].length + ' раз</li>');
              }

            var longShort = findLongShort(titleStr, 5, 5);
            if (longShort.length > 0) {
                if (longShort[0].length > 0){
                    for (f = 0; f < longShort[0].length; f++ )
                        $('.long-words').append('<li class="title-news">' + longShort[0][f] + '</li>');
                }
                if (longShort[1].length > 0){
                    for (g = 0; g < longShort[0].length; g++ )
                        $('.short-words').append('<li class="title-news">' + longShort[1][g] + '</li>');
                }
            }
        },
        error: function () {
            $('.rssContent').text('Failed to get feed');
        }
    });
});

function findMostWords(string, number) {
    var arr = string.toLowerCase().split(" "); // массив слов
    var finder = [];
    var strSearch = " " + string.toLowerCase().substr(0) + " ";
    for (var j = 0; j < arr.length; j++) {
        var reg = new RegExp('(' + " " + arr[j] + " " + ')', 'g');
        var find = strSearch.match(reg);
        if (find) {
            finder.push(find);
        }
        strSearch = strSearch.replace(reg, "");
    }
    finder.sort(function (a, b) {
        return b.length - a.length;
    });
    if (number >= 0) {
        var result = [];
        for (var k = 0; k < number; k++) {
            result.push(finder[k]);
        }
        return result;
    } else {
        return finder;
    }
}

function findLongShort(string, long, short) {
    var arr = string.toLowerCase().split(" "); // массив слов
    arr.sort(function (a, b) {
        return b.length - a.length;
    });
    var result = [];
    if (long >= 0){
        var longArr = [];
        for (var i = 0; i < long; i++){
            longArr.push(arr[i]);
        }
        result.push(longArr);
    }
    if (short >= 0){
        var shortArr = [];
        for (var j = arr.length - 2 ; j >  arr.length - 2 - short; j--){
            shortArr.push(arr[j]);
        }
        result.push(shortArr);
    }
    if (result.length >= 0){
        return result;
    }
}

function excludeSymbols(string) {
    var reg = /[(\–\-\+\?]/g;
    string = string.replace(reg, "");
    return string.replace(/\s+/g," ");
}