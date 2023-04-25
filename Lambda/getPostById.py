import json
import boto3


def lambda_handler(event, context):
    client = boto3.resource("dynamodb")
    table = client.Table("posts")
    response = table.get_item(Key={"postID": event["pathParameters"]["id"]})
    return {
        "statusCode": response["ResponseMetadata"]["HTTPStatusCode"],
        "body": json.dumps(response["Item"]),
    }
