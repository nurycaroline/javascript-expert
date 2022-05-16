const CountDown = require('./countDown')
const sinon = require('sinon')
const assert = require('assert')

	;
(async () => { 
	{
		const countDown = new CountDown()
		const spy = sinon.spy(countDown, countDown.execute.name)
		for await( const i of countDown.execute(10)) {}
		const expectedCallCount = 10
		assert.deepStrictEqual(spy.callCount, expectedCallCount)
	}
})()