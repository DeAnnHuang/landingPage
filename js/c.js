var app = angular.module('App', ['ngAnimate', 'ngSanitize']);
app.controller('Controller', function($scope) {
    var c = this;


    c.isCurrentSlideIndex = function(index) {
        return c.timer === index;
    };


    c.w = true;
    if ($(window).width() <= 768) {
        c.w = false;
    }
    /**
     * [list description]for Clissification
     * @type {Array}
     */
    c.list = [{
        title: '綜合分類<br>新歌不漏接',
        detail: '熱門新歌，經典金曲通通分類好了，依你的喜好語系曲風，快速找到你想聽的歌。',
        btn_text: '免費試聽30天',
        img: 'img/Block3/1.png',
        GA: '畫面_綜合分類_免費30天'
    }, {
        title: '華語分類<br>最對我味',
        detail: '熱門新歌，經典金曲通通分類好了，依你的喜好語系曲風，快速找到你想聽的歌。',
        btn_text: '免費試聽30天',
        img: 'img/Block3/2.png',
        GA: '畫面_華語分類_免費30天'

    }, {
        title: '西洋分類<br>最對我味',
        detail: '熱門新歌，經典金曲通通分類好了，依你的喜好語系曲風，快速找到你想聽的歌。',
        btn_text: '免費試聽30天',
        img: 'img/Block3/3.png',
        GA: '畫面_西洋分類_免費30天'

    }, {
        title: '日韓分類<br>最對我味',
        detail: '熱門新歌，經典金曲通通分類好了，依你的喜好語系曲風，快速找到你想聽的歌。',
        btn_text: '免費試聽30天',
        img: 'img/Block3/4.png',
        GA: '畫面_日韓分類_免費30天'
    }];

    /**
     * [DotList description]for Dots
     * @type {ObjectArray}
     */

    c.DotMList = [{
        content: '流行',
        color: '#f24922',
        top: '5%',
        left: '0%',
        clicked: true
    }, {
        content: '藍調',
        color: '#f2b022',
        top: '40%',
        left: '-3%',
        clicked: false

    }, {
        content: '爵士',
        color: '#f24922',
        top: '0%',
        left: '59%',
        clicked: false

    }, {
        content: '國語',
        color: '#406618',
        top: '55%',
        left: '22%',
        clicked: false

    }, {
        content: '韓語',
        color: '#406618',
        top: '81%',
        left: '-2%',
        clicked: true

    }, {
        content: '雀躍',
        color: '#92278f',
        top: '58%',
        left: '63%',
        clicked: true
    }, {
        content: '輕快',
        color: '#440e62',
        top: '77%',
        left: '42%',
        clicked: false
    }, {
        content: '抒情',
        color: '#92278f',
        top: '32%',
        left: '58%',
        clicked: false
    }, {
        content: '古典',
        color: '#00aeef',
        top: '20%',
        left: '30%',
        clicked: true

    }];

    c.wClick = true;
    c.dotTimer3 = 0;
    setInterval(function() {
        c.wClick = !c.wClick;

        c.dotTimer3++;
        c.dotTimer3 = c.dotTimer3 % 9;
        c.DotMList[c.dotTimer3].clicked = !c.DotMList[c.dotTimer3].clicked;
        $scope.$apply();
    }, 2000);


    c.timer = 0;
    setInterval(function() {
        c.timer++;

        c.dotTimer2 = c.timer % 9;
        c.timer = c.timer % 4;
        c.DotMList[c.dotTimer2].clicked = !c.DotMList[c.dotTimer2].clicked;
        $scope.$apply(); //check ng all data binding.
    }, 4000);

    c.dotTimer = 0;
    setInterval(function() {
        c.dotTimer++;
        c.dotTimer = c.dotTimer % 9;
        c.DotMList[c.dotTimer].clicked = !c.DotMList[c.dotTimer].clicked;
        $scope.$apply(); //check ng all data binding.

    }, 800);

    $scope.ga = function(name) {
        return ga_event_mobile('<免費30天>產品宣傳頁', 'Click_免費30天', name);
    }
});
