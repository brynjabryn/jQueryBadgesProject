(function($) {
    function addCourse(courseItem) {
        var badgesDiv = $(document.body).find('#badges'),
            title = courseItem.title,
            titleTag = '<h3>' + title + '</h3>',
            badgeImage = courseItem.badge,
            badgeTag = '<img src="' + badgeImage + '" />',
            courseUrl = courseItem.url,
            courseUrlTag = '<a href="' + courseUrl + '" target="_blank" class="btn btn-primary">See Course</a>';

        if (title && badgeImage) {
            badgesDiv.append('<div class="course">' + titleTag + badgeTag + courseUrlTag + '</div>');
        }

    }

    $.ajax({
        type: "GET",
        url: "https://www.codeschool.com/users/brynja.json",
        data: {
            format: "json"
        },
        dataType: "jsonp",
        success: function(data) {

            var response = data,
                completed = [],
                completed = response.courses.completed;

            console.log("----- Courses Data Returned -----");
            console.log(response);

            completed.forEach(addCourse);
        },
        error: function() {
            console.log("An error occurred while trying to retrieve data.");
        }
    });


})(jQuery);
