import { DateUtils } from './../utils/dateutils';

class WidgetJW {

	static doWork(allDate: Date[]) {
		console.log('Avant...');
		console.table(allDate);
		const sortedDate = DateUtils.sortAll(allDate);
		console.log('Après...');
		console.log(sortedDate);
	}

}
