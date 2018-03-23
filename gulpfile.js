var gulp = require("gulp"),
  browserSync = require("browser-sync");

gulp.task("tunnel", function() {
  browserSync({
    server: {
      baseDir: "build"
    },
    //notify: false,
    open: false,
    tunnel: true,
    tunnel: "tarotum" //Demonstration page: http://projectmane.localtunnel.me
  });
});

gulp.task("default", ["browser-sync"]);
