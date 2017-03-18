var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var testGulpFn= function(){
	console.log(" .... Hola gulp! ...... ");
}
//1.- Se asigna el nombre de la tarea y ejecuta una tarea
gulp.task('test-gulp', testGulpFn);

gulp.task('browserSync', () =>{ 
	browserSync.init({
		server:{
			baseDir:''
		}
	})
});

//3.- ejecuta un conjunto de tareas  y al final realiza una funcion
gulp.task('dev', ['browserSync', 'test-gulp'], ()=>{
	gulp.watch('index.html', browserSync.reload);
});


//2.- Una tarea que invoque otras tareas
gulp.task('default',['test-gulp', 'browserSync']);
