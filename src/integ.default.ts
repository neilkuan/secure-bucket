import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import { SecureBucket } from './index';

const config = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};
const app = new cdk.App();
const stack = new cdk.Stack(app, 'secureBucketStack', { env: config });
const sb = new SecureBucket(stack, 'SecureBucketStack', {
  encryption: s3.BucketEncryption.UNENCRYPTED,
  bucketName: 'neil202020',
});

new cdk.CfnOutput(stack, 'SecureBucketName', {
  value: sb.bucketName,
});