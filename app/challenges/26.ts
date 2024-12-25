/*
Santa Claus has already delivered all the presents! Now he's reviewing the productivity reports of the elves. But there's a problem: the Product Owner, Mrs. Claus 🧑‍🎄✨, needs to quickly understand if the elves met the estimated times. They are doing Agile Scream.

To help Mrs. Claus, your task is to calculate the completed percentage of each task and return it rounded to the nearest whole number. This will allow her to better plan for the next Christmas and keep everyone happy.
*/

function getCompleted(timeWorked: string, totalTime: string): string {
	const toSeconds = (time: string): number => {
		const [hours, minutes, seconds] = time
			.split(":")
			.map((item: string) => parseInt(item, 10));
		return hours * 3600 + minutes * 60 + seconds;
	};

	const workedSeconds = toSeconds(timeWorked);
	const totalSeconds = toSeconds(totalTime);

	const percentage = Math.round((workedSeconds / totalSeconds) * 100);

	return `${percentage}%`;
}

getCompleted("01:00:00", "03:00:00"); // 33%
getCompleted("02:00:00", "04:00:00"); // 50%
getCompleted("01:00:00", "01:00:00"); // 100%
getCompleted("00:10:00", "01:00:00"); // 17%
getCompleted("01:10:10", "03:30:30"); // 33%
getCompleted("03:30:30", "05:50:50"); // 60%

// 3 ⭐ //
/*
🎁 Now Santa Claus and the elves deserve a break. We hope they enjoyed AdventJS and will recommend it to their friends!
*/
