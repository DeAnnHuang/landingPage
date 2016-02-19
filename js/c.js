var app = angular.module('App', ['ngAnimate', 'ngSanitize']);
app.controller('Controller', function($scope) {
    var c = this;
    var wClick = 2;

    c.timer = 0;
    setInterval(function() {
        c.timer++;
        c.timer = c.timer % 4;
        $scope.$apply(); //check ng all data binding.
    }, 8000);

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
        img:'img/Block3/1.png'
    }, {
        title: '華語分類<br>最對我味',
        detail: '熱門新歌，經典金曲通通分類好了，依你的喜好語系曲風，快速找到你想聽的歌。',
        btn_text: '免費試聽30天',
        img:'img/Block3/2.png'

    }, {
        title: '西洋分類<br>最對我味',
        detail: '熱門新歌，經典金曲通通分類好了，依你的喜好語系曲風，快速找到你想聽的歌。',
        btn_text: '免費試聽30天',
        img:'img/Block3/3.png'

    }, {
        title: '日韓分類<br>最對我味',
        detail: '熱門新歌，經典金曲通通分類好了，依你的喜好語系曲風，快速找到你想聽的歌。',
        btn_text: '免費試聽30天',
        img:'img/Block3/4.png'
    }];

    /**
     * [DotList description]for Dots
     * @type {Array}
     */

    c.DotPCList = [{
        content: '流行',
        color: '#f24922',
        top: '20%',
        left: '40%',
        click: true
    }, {
        content: 'R&B',
        color: '#f24922',
        top: '2%',
        left: '20%',
        click: false
    }, {
        content: '電音',
        color: '#f27a22',
        top: '8%',
        left: '5%',
        click: false
    }, {
        content: '藍調',
        color: '#f2b022',
        top: '34%',
        left: '22%',
        click: true

    }, {
        content: '美聲',
        color: 'darkorange',
        top: '40%',
        left: '35%',
        click: false
    }, {
        content: '爵士',
        color: '#f24922',
        top: '40%',
        left: '0%',
        click: false

    }, {
        content: '巴洛克古典樂',
        color: '#0072bc',
        top: '58%',
        left: '23%',
        click: false

    }, {
        content: '20世紀前古典',
        color: '#00aeef',
        top: '75%',
        left: '34%',
        click: false

    },{
        content: '古典時期古典',
        color: '#0072bc',
        top: '50%',
        left: '60%',
        click: false

    },  {
        content: '2010',
        color: '#004a80',
        top: '82%',
        left: '45%',
        click: false

    }, {
        content: '西洋',
        color: '#406618',
        top: '80%',
        left: '1%',
        click: false

    },{
        content: '亞洲',
        color: '#60902a',
        top: '54%',
        left: '5%',
        click: false

    },{
        content: '國語',
        color: '#406618',
        top: '74%',
        left: '15%',
        click: true

    }, {
        content: '韓語',
        color: '#406618',
        top: '89%',
        left: '-12%',
        click: false

    }, {
        content: '日語',
        color: '#406618',
        top: '83%',
        left: '25%',
        click: false

    }, {
        content: '雀躍',
        color: '#92278f',
        top: '60%',
        left: '70%',
        click: false
    },{
        content: '平靜',
        color: '#630460',
        top: '70%',
        left: '89%',
        click: false
    }, {
        content: '性感',
        color: '#440e62',
        top: '50%',
        left: '86%',
        click: false
    }, {
        content: '輕快',
        color: '#440e62',
        top: '78%',
        left: '74%',
        click: true
    }, {
        content: '抒情',
        color: '#92278f',
        top: '82%',
        left: '60%',
        click: false
    }, {
        content: '浪漫時期古典',
        color: '#00aeef',
        top: '63%',
        left: '45%',
        click: true

    }, {
        content: '搖滾',
        color: 'darkred',
        top: '27%',
        left: '10%',
        click: false

    }, {
        content: '沙發',
        color: '#f27a22',
        top: '35%',
        left: '48%',
        click: false

    }, {
        content: '亞洲',
        color: 'darkorange',
        top: '10%',
        left: '30%',
        click: false
    }];


    c.DotMList = [{
        content: '流行',
        color: '#f24922',
        top: '35%',
        left: '-12%',
        click: true
    }, {
        content: '藍調',
        color: '#f2b022',
        top: '41%',
        left: '16%',
        click: false

    }, {
        content: '爵士',
        color: '#f24922',
        top: '60%',
        left: '-15%',
        click: false

    }, {
        content: '巴洛克古典樂',
        color: '#0072bc',
        top: '55%',
        left: '30%',
        click: true

    }, {
        content: '國語',
        color: '#406618',
        top: '70%',
        left: '19%',
        click: false

    }, {
        content: '韓語',
        color: '#406618',
        top: '81%',
        left: '-12%',
        click: false

    }, {
        content: '日語',
        color: '#406618',
        top: '85%',
        left: '25%',
        click: true

    }, {
        content: '雀躍',
        color: '#92278f',
        top: '60%',
        left: '76%',
        click: false
    }, {
        content: '輕快',
        color: '#440e62',
        top: '73%',
        left: '54%',
        click: false
    }, {
        content: '抒情',
        color: '#92278f',
        top: '88%',
        left: '70%',
        click: false
    }, {
        content: '浪漫時期古典樂',
        color: '#00aeef',
        top: '40%',
        left: '53%',
        click: false

    }];


});
