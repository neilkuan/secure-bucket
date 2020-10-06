import { Bucket, BucketEncryption, BucketProps } from '@aws-cdk/aws-s3';
import { Construct } from '@aws-cdk/core';

export class SecureBucket extends Bucket {

  constructor(scope: Construct, id: string, props: BucketProps={}) {
    super(scope, id, {
      ...props,
      encryption: BucketEncryption.KMS_MANAGED,
    });
  }
}