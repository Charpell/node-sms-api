
# SMS-Management-System

This is a simple API built to enable users send and recieve sms messages


## Getting Started
1 Clone the repo. From the root of the project, run the following:
```
npm install
```
2 Start the development application, run:
```
npm run dev

3 Create `.env` file in the root of your project and insert your keys. See a sample in the `.env.sample` file

4 Install postman to test all endpoints


## Technologies used
+ NodeJs
+ ExpressJs
+ MongoDB




## API

### POST A CONTACT (/v1/contact)

- name, contactNumber

#### Request

```
{
  "name": "Ebuka",
  "phoneNumber": "12345678",
}
```

#### Response

```

{
  "_id": "5c870ab865c6e6cc37ee0b63",
    "name": "Ebuka",
    "contactNumber": 12345678,
}
```



### DELETE A CONTACT (/api/v1/contacts/:contactId)

- where contactId = 5c870ab865c6e6cc37ee0b63

#### Response

```
{
    "message": "Contact deleted"
}
```



### POST A MESSAGE (/v1/sms)

#### Request

```
{
	"message": "New message",
	"sender": "5c8706e432d395c98f73427e",
	"receiver": "5c8706ea32d395c98f73427f"
}
```



### GET SENT MESSAGES (/v1/sms/sent/:contactId)

- where messageId = 5c870ab865c6e6cc37ee0b63

#### Response

```
[
    {
        "_id": "5c87071232d395c98f734281",
        "message": "New message",
        "contact": "5c8706ea32d395c98f73427f",
        "status": "Sent",
        "__v": 0
    },
    {
        "_id": "5c87071732d395c98f734284",
        "message": "New message",
        "contact": "5c8706ea32d395c98f73427f",
        "status": "Sent",
        "__v": 0
    }
]
```


### GET RECEIVED MESSAGES (/v1/sms/received/:contactId)

- where messageId = 5c870ab865c6e6cc37ee0b63

#### Response

```
[
    {
        "_id": "5c87071232d395c98f734281",
        "message": "New message",
        "contact": "5c8706ea32d395c98f73427f",
        "status": "Received",
        "__v": 0
    },
    {
        "_id": "5c87071732d395c98f734284",
        "message": "New message",
        "contact": "5c8706ea32d395c98f73427f",
        "status": "Received",
        "__v": 0
    }
]
```