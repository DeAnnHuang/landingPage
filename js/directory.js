angular.module('titleApp', ['ngAnimate'])
    .controller('titleController', function() {
        var TList = this;

        TList.list = [{
            title: 'myMusic懂你想聽的',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis id molestiae quo excepturi odio in officia corporis eligendi repellat quam.',
            btn_text: '立刻下載'
        }, {
            title: 'myMusic懂你想聽的',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis id molestiae quo excepturi odio in officia corporis eligendi repellat quam.'

        }, {
            title: 'myMusic懂你想聽的',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis id molestiae quo excepturi odio in officia corporis eligendi repellat quam.'

        }, {
            title: 'myMusic懂你想聽的',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis id molestiae quo excepturi odio in officia corporis eligendi repellat quam.'

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
