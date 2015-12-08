import {bootstrap, Component, View} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';
import {Footer} from './components/footer';

@Component({
	selector:'my-app'	
})
@View({
	directives: [NgFor, Footer],
	template: `
		<h1> My First Angular 2 App. It was made by {{ name }}</h1>
		<ul>
			<li *ng-for="#name of names">{{ name }}</li>
		</ul>
		<foot></foot>
	`
})
class AppComponent {
	name: string;
	names: string[];

	constructor() {
		this.name = 'Siarhei';
		this.names = ['Jogn','Lucy']
	}
}

bootstrap(AppComponent);
