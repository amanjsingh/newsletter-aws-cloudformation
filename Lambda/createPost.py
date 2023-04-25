import json
import boto3


def lambda_handler(event, context):
    dynamoClient = boto3.resource("dynamodb")
    snsClient = boto3.client("sns")
    table = dynamoClient.Table("posts")
    response = table.put_item(
        Item={
            "postID": event["postID"],
            "item": event["item"],
            "owner": event["owner"],
            "price": event["price"],
        }
    )
    if response["ResponseMetadata"]["HTTPStatusCode"] == 200:
        snsClient.publish(
            TopicArn="arn:aws:sns:us-east-1:991168581972:newPostNotification",
            Subject="This week's newsletter!",
            Message=json.dumps({"default": json.dumps(event["item"]+" .\n Visit our website for more content!")}),
            MessageStructure="json",
        )
    return {
        "statusCode": response["ResponseMetadata"]["HTTPStatusCode"],
        "body": json.dumps("Post Added"),
    }
