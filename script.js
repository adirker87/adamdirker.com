document.addEventListener("DOMContentLoaded", function() {
    var jobTitles = document.querySelectorAll('.job-title');

    jobTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var description = this.nextElementSibling;
            description.classList.toggle('show-description');
        });
    });
});