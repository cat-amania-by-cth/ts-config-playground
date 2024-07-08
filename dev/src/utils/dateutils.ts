
class DateUtils {

	static sortAll(allDate: Date[]) {
		return allDate.sort(
			(leftDate, rightDate) => leftDate.getTime() - rightDate.getTime()
		);
	}

}

export { DateUtils };