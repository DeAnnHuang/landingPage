var app = angular.module('App', ['ngAnimate']);
app.controller('Controller', function($scope) {
    var c = this;

    c.timer = 0;
    setInterval(function() {
        c.timer++;
        c.timer = c.timer % 4;
        $scope.$apply();//check ng all data binding.
    }, 8000);
    
    c.isCurrentSlideIndex = function(index) {
        return c.timer === index;
    };


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




    // TList.addPerson = function() {
    //     TList.list.push({
    //         name: dirList.name,
    //         age: dirList.age,
    //         img: 'http://placehold.it/55x55'
    //     });
    //     TList.name = '';
    //     TList.age = 0;
    // };
});
