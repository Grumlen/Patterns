function Colleague (name) {
  this.name = name;
  this.mediator = null;
  function send(number,recipient) {
    mediator.sent(number,this,recipient);
  }
  function receive(number,sender) {
    console.log(sender+" just sent me the number "+number);
  }
  function sendAll(number) {
    mediator.sentToAll(number,this);
  }
  return {
    send,
    receive,
    sendAll
  };
}
var mediator = (function(){
  var colleagues = {};
  function addColleague(colleague) {
    colleagues[name] = colleague.name;
    colleague.mediated = this;
  }
  function removeColleague(colleague) {
    for (var name in colleagues) {
      if (colleagues[name]==colleague) {
        colleagues.splice(i,1);
        colleague.mediated = null;
      }
    }
  }
  function sent(number,sender,recipient) {
    for (var name in colleagues) {
      if (colleagues[name]==recipient) {
        recipient.receive(number,sender);
      }
    }
  }
  function sentToAll(number,sender) {
    colleagues.forEach(function(colleague) {
      colleague.receive(number,sender);
    });
  }
  return {
    addColleague,
    removeColleague,
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
