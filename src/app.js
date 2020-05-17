import * as _ from 'lodash/array';
import { ProjectList } from './App/ProjectList';

// eslint-disable-next-line no-undef
// globalThis.DEFAULT_VALUE = 'APPSIUS';

console.log(_.difference([1, 2], [2, 5]));

class App {
	static init() {
		const activeProjectsList = new ProjectList('active');
		const finishedProjectsList = new ProjectList('finished');

		activeProjectsList.setSwitchHandlerFunction(
			finishedProjectsList.addProject.bind(finishedProjectsList)
		);
		finishedProjectsList.setSwitchHandlerFunction(
			activeProjectsList.addProject.bind(activeProjectsList)
		);
	}
}

App.init();
