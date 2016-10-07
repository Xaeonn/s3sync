S3Sync
------------
A simple file syncing solution using Amazon Web Service S3.

**This is a work in progress and is not ready for any use yet!**

Config is specified in app/config.json, the structure is:
```
{
  "aws":{
    "region":"REGIONNAME"
  }
}
```
AWS Credentials are required for s3sync to run, specify them using:
```
export AWS_ACCESS_KEY_ID='AKID'
export AWS_SECRET_ACCESS_KEY='SECRET'
```

Callbacks are being used to handle web requests at the moment which is leading
to potential problems of execution order of user clicks, some simple
implementation of flux would solve this.
