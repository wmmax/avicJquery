



(function($) {
    $.fn.taskManager = function() {
        var $this = $(this);
        var delSelector = 'delete';
        var addSelector = 'add';
        var btnWrapper = 'btn-group';
        var taskWrapper = 'task-group';
        var delAllSelector = 'delete-all';
        
        
        function construct(){
            constructBody();
            addTask('New task here!');
            eventListeners();
        }
        
        function constructBody(){
            addTaskWrapper();
            addButtons();
        }




        function addTask(title){
            var taskContent = [
                '<div class="task">',
                    '<input name="is_completed[]" type="checkbox">',
                    '<input name="title[]" type="text" value="'+ title +'">',
                    '<div type="button" class="'+ delSelector +'"></div>',
                    '</div>',
                ].join("\n");

            $this.find('.'+ taskWrapper).prepend(taskContent);
        }

        function deleteTask(){
            console.log('deleted.');
            $(this).parent().remove();
        }


        function deleteAllTasks(){
            console.log('deleted.');
            $this.find('.'+ taskWrapper).empty();
        }




        function addButtons(){
            wrapperContent = [
                '<div class="'+ btnWrapper +'">',
                    '<button class="popup-toggle" type="button">Add new</button>',
                    '<button class="'+ delAllSelector +'" type="button">Clear all</button>',
                    '<button type="submit">Send</button>',
                '</div>'
            ].join("\n");

            $this.append(wrapperContent);
        }

        function addTaskWrapper(){
            wrapperContent = [
                '<div class="'+ taskWrapper +'">',
                '</div>'
            ];

            $this.append(wrapperContent);
        }




        function eventListeners(){
            $('body').on('click', '.' + delSelector, deleteTask);
            $('body').on('click', '.' + delAllSelector, deleteAllTasks);
            $('body').on('click', '.' + addSelector, function(){
                value = $('#text-input').val();
                if (value != ''){
                    addTask(value);
                    $('#text-input').val('');
                } else {
                    alert('please enter something')
                }
                
            });
        }


        return construct();
    };
}(jQuery));