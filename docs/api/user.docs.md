# Deknyhy documentation for interaction with user

The purpose of this branch of API is to handle registration user, tracking his activity, handling feedback etc.

**Endpoint**

For now there is only user registration. 
`POST` `API_URL/user/register`

This endpoint receives:
`telegramId`: BigInt
`username?`: string;