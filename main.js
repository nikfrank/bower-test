angular.module('nik.zippy', [])
    .component({
        template: '<div ng-click="$ctrl.open = !$ctrl.open; $ctrl.onZip({isOpen: $ctrl.open})">'+
                    '<span>zip</span>'+
                    '<div ng-show="$ctrl.open">body</div>'+
                  '</div>',

        controller: function(){
            this.open = false;
        },
        bindings: {
            onZip: '&'
        }
    });
