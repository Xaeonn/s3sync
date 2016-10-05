//
// Route53 Client
// Sam Boles
// October 2016
// 

var AWS = require('aws-sdk');

var Route53Client = function(region) {

};

Route53Client.prototype.ListZones = function () {

};

Route53Client.prototype.ListRecords = function (zone) {

};

Route53Client.prototype.AddZone = function (domain) {

};

Route53Client.prototype.AddRecord = function (zone, recordDomain, recordType, recordText) {

};

Route53Client.prototype.AddAliasRecord = function (zone, domain, alias) {

};

Route53Client.prototype.DeleteRecord = function (zone, recordDomain, recordType) {

};

Route53Client.prototype.DeleteZone = function (zone) {

};

module.exports = Route53Client;
