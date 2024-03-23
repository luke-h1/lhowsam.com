#!/bin/bash

# usage ./clear-buckets.sh bucket1 bucket2 bucket3

if [ "$#" -eq 0 ]; then
    echo "No arguments provided. Please provide a list of S3 bucket names."
    exit 1
fi

for bucket_name in "$@"
do
    echo "Processing bucket: $bucket_name"

    # Empty the bucket
    aws s3 rm s3://$bucket_name --recursive

    # Delete the bucket
    aws s3 rb s3://$bucket_name

    echo "Finished emptying and deleting bucket: $bucket_name"
done
