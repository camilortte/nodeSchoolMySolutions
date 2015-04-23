var nums = process.argv.slice(2).map(Number);
nums = nums.reduce(function(previousValue, currentValue){
	return previousValue + currentValue;
});
console.log(nums);
