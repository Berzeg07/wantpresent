module.exports = function() {
    $.gulp.task('serve', function() {
        $.bs.init({
            server: {
                baseDir: "./build",
                index: "invite.html"
            }
        });
    });
}
