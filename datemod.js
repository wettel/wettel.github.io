if (Date.parse(document.lastModified) != 0) {
	var modiDate = new Date(document.lastModified);
	var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	document.write("Last modified on: ");
	document.write(modiDate.getDate() + " ");
	document.write(monthName[modiDate.getMonth()] + " ");
	document.write(modiDate.getFullYear());
}