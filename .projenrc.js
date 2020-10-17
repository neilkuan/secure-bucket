const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  authorAddress: "guan840912@gmail.com",
  authorName: "Neil Kuan",
  cdkVersion: "1.68.0",
  name: "secure-bucket",
  repository: "https://github.com/guan840912/secure-bucket.git",
  cdkDependencies: [
    '@aws-cdk/aws-s3',
    '@aws-cdk/core',
  ],
  npmRegistry: 'npm.pkg.github.com',
  releaseBranches: ['main'],
  defaultReleaseBranch: 'main',
  
});

project.addScripts({
  destroy: 'cdk destroy'
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log','coverage','.DS_Store'];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude);

project.synth();
