function Colleague (name) {
  this.name = name;
  this.mediator = null;
  function send(number,recipient) {
    mediator.sent(number,this.name,recipient);
  }
  function receive(number,sender) {
    console.log(this.name+": "+sender+" just sent me the number "+number);
  }
  function sendAll(number) {
    mediator.sentToAll(number,this);
  }
  return {
    send,
    receive,
    sendAll,
    name: name
  };
}
var mediator = (function(){
  var colleagues = {};
  function addColleague(added) {
    colleagues[added] = added.name;
    added.mediated = this;
  }
  function sent(number,sender,recipient) {
    console.log("message received");
    recipient.receive(number,sender);
  }
  return {
    addColleague,
    sent,
    sentToAll
  };
})();
var john = new Colleague("John");
var aria = new Colleague("Aria");
var mark = new Colleague("Mark");
var sue = new Colleague("Sue");
mediator.addColleague(john);
mediator.addColleague(aria);
mediator.addColleague(mark);
mediator.addColleague(sue);
