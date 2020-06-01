const gulp = require("gulp");
const apidoc = require("gulp-apidoc");

gulp.task("apidoc", (done) => {
    apidoc({
        src: "./api/server/routes",
        dest: "public/apidoc/"
    }, done);
});

gulp.task("watch", () => {
    gulp.watch(["./routes/**"], ["apidoc"]);
});