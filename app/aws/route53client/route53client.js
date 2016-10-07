//
// Route53 Client
// Sam Boles
// October 2016
//

var AWS = require('aws-sdk');

var Route53Client = function(region) {
  this.region = region;
  this.route53 = new AWS.Route53();
};

// Retrieve a list of the hosted zones the account currently has on Route53
// Takes a callback method to handle the results
Route53Client.prototype.ListZones = function (callback) {
  var params = {
    // Marker: 'STRING_VALUE',
    // MaxItems: 'STRING_VALUE'
  };
  this.route53.listHostedZones(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      console.log(data);
    }
  });
};

// Retrieves a list of records for a hosted zone
// Takes the domain name of the hosted zone and a callback to handle the results
// It is important thing to note is that Route53 does not prevent multiple
// hosted zones with the same name, this is something that should be avoided and
// so this method ignores the possibility for now
Route53Client.prototype.ListRecords = function (zoneID, callback) {
  var params = {
    HostedZoneId: zoneID
  };
  
  this.route53.listResourceRecordSets(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      console.log(data);
      callback(data);
    }
  });
};

// Create a hosted zone in Route53
// Takes the domain name to host a zone for
Route53Client.prototype.AddZone = function (domain) {
  // Set a caller reference
  // TODO: store this somewhere for retries?
  var callerReference = new Date();
  callerReference = CallerReference.toISOString();

  // Setup the request params
  var params = {
    CallerReference: callerReference,
    Name: domain
  };

  // Send the request
  this.route53.createHostedZone(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      console.log(data);
    }
  });
};

// Adds a record set to a given zone
// Takes the zone name to add the record to, the domain for the record, the
// record type (A, MX, PTR, CNAME, TXT, ect) and the  record text
// Better to avoid using this method directly unless you are very comfortable
// understanding DNS, wrapper methods for different record types will be
// provided
Route53Client.prototype.AddRecord = function (zone, recordDomain, recordType,
                                                                  recordText) {

};

// Adds an alias record to another AWS resource in a hosted zone
// Takes the hosted zone name, the domain to add and the alias domain
Route53Client.prototype.AddAliasRecord = function (zone, domain, alias) {

};

// Deletes a record set from a hosted zone
// Takes the hosted zone, the records domain and the type of the record to
// delete
Route53Client.prototype.DeleteRecord = function (zone, recordDomain,
                                                        recordType) {

};

// Delete an entire hosted zone, will fail if there are any records other than
// the NS records attached to the zone
// Takes the zone name
Route53Client.prototype.DeleteZone = function (zone) {

};

module.exports = Route53Client;
