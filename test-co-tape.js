var co= require('co'),
  tape= require('tape'),
  cotape= require('./co-tape')

tape('', function(t){
	t.plan(2)
	cotape(function*(val){
		t.equal(val, 42, 'cotape executed generator passing in value')
	})(42)
	t.pass('cotape continued execution')
})

tape('simple cotape execution', cotape(function *(t){
	t.plan(1)
	t.ok(t, 'we have a t')
}))
