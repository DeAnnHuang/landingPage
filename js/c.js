var app = angular.module('App', ['ngAnimate']);
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

    /**
     * [list description]for Clissification
     * @type {Array}
     */
    c.list = [{
        title: '分類1',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis id molestiae quo excepturi odio in officia corporis eligendi repellat quam.',
        btn_text: '免費試聽30天'
    }, {
        title: '分類2',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis id molestiae quo excepturi odio in officia corporis eligendi repellat quam.',
        btn_text: '免費試聽30天'

    }, {
        title: '分類3',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis id molestiae quo excepturi odio in officia corporis eligendi repellat quam.',
        btn_text: '免費試聽30天'

    }, {
        title: '分類4',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis id molestiae quo excepturi odio in officia corporis eligendi repellat quam.',
        btn_text: '免費試聽30天'
    }];

    /**
     * [DotList description]for Dots
     * @type {Array}
     */

    c.DotList = [{
        content: '流行',
        btn_text: '免費試聽30天',
        color: 'darkorange',
        top: '10%',
        left: '20%',
        click:false
    }, {
        content: '搖滾',
        btn_text: '免費試聽30天',
        color: 'darkred',
        top: '20%',
        left: '10%',
        click:false

    }, {
        content: '國語',
        btn_text: '免費試聽30天',
        color: 'darkorange',
        top: '30%',
        left: '50%',
        click:false

    }, {
        content: '亞洲',
        btn_text: '免費試聽30天',
        color: 'darkorange',
        top: '10%',
        left: '30%',
        click:false
    }];



});
