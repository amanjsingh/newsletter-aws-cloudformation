import json
import boto3


def lambda_handler(event, context):
    dynamoClient = boto3.resource("dynamodb")
    snsClient = boto3.client("sns")
    table = dynamoClient.Table("posts")
    response = table.put_item(
        Item={
            "subscriber": event["subscriber"],
        }
    )
    if response["ResponseMetadata"]["HTTPStatusCode"] == 200:
        snsClient.subscribe(
            TopicArn="arn:aws:sns:us-east-1:991168581972:newPostNotification",
            Protocol="email",
            Endpoint=event["subscriber"],
            MessageStructure="json",
        )
    return {
        "statusCode": response["ResponseMetadata"]["HTTPStatusCode"],
        "body": json.dumps("Post Added"),
    }
