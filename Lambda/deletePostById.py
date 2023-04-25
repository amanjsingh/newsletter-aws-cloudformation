import json
import boto3


def lambda_handler(event, context):
    client = boto3.resource("dynamodb")
    table = client.Table("posts")
    response = table.delete_item(Key={"postID": event["pathParameters"]["id"]})
    return {
        "statusCode": response["ResponseMetadata"]["HTTPStatusCode"],
        "headers": {"content-type": "application/json"},
        "body": json.dumps("Post Deleted"),
    }
