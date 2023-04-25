import json
import boto3


def lambda_handler(event, context):
    client = boto3.resource("dynamodb")
    table = client.Table("posts")
    response = table.scan()
    return {
        "statusCode": response["ResponseMetadata"]["HTTPStatusCode"],
        "body": response['Items'],
    }
