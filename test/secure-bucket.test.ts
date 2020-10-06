import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import { SecureBucket } from '../src/index';
const config = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};
test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new cdk.Stack(app, 'secureBucketStack', { env: config });
  new SecureBucket(stack, 'MyTestStack');
  // THEN
  expect(stack).toHaveResource('AWS::S3::Bucket', {
    BucketEncryption: {
      ServerSideEncryptionConfiguration: [
        {
          ServerSideEncryptionByDefault: {
            SSEAlgorithm: 'aws:kms',
          },
        },
      ],
    },
  });
});