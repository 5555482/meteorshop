describe('Messages template', function() {
	beforeEach(function() {
		Messages = sinon.stub({
		find: function() {}
		});
	});
  function helper(name) {
  return Template.messages.helpers.firstCall.args[0][name];
  }
});