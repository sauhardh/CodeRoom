# Server Setup

**Start** <br>
```sh
npm install
npm start
```

**.env setup**<br>
```
#For MYSQL Database
DB_HOST = localhost
DB_USER = root
DB_PASS = <your password>
DB_NAME = users
DB_TABLE_NAME = userstable

#For OTP Database
DB_OTP_TABLE_NAME = otpverification
OTP_EMAIL_SENDER = <me@gmail.com>

#For OTP Nodemailer
OTP_APP_PASSWORD = <Application password>
OTP_EXPIRY = 5* #In mins

#For json web token
JWT_SECRET = <IHaveNoSecrets>
JWT_LIFETIME = '1hr'


#For docker setup
PYTHON_TAG = 'sha256:cf2c...'
JS_TAG = 'sha256:cfa2266c...'
CPP_TAG = 'sha256:2321d3c...'



```

**Note**

*Default Port : 5001*