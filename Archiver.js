function Archiver() {
  var temperature = null;
  var archive = [];
  //TODO: implement "Archiver" as a self-archiving object
  //...ensure that when "temperature" property is
  //...set, that the array returned by getArchive
  //...gets a log entry in the form of {date:,val:}
  Object.definePrototype(Archiver.prototype, temperature, {
    get: function(prototy) {
      return this.archive;
    },
    set: function(property, value) {
      this.archive.push({date: new Date(), value: value});
      this[property] = value;
    }
  });
  this.getArchive = function() {return archive;};
}

