class CountDown {
	*execute(input) {
		const nextNumber = input - 1

		if(nextNumber > 0) {
			yield nextNumber
			yield* this.execute(nextNumber)
		}
	
	}
}

module.exports = CountDown