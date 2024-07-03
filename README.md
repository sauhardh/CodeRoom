<h1>
<img src="https://capsule-render.vercel.app/api?type=transparent&height=300&text=CODE%20ROOM&textBg=false&reversal=false&fontColor=238579&fontSize=75&fontAlign=50&animation=twinkling&strokeWidth=5&stroke=238579&desc=Code%20as%20your%20neurons%20fire.&descSize=20"/>
</h1>


Code Room is an unbelievably fast online code editor and compiler which allows you for real time collaboration.

![](./readmePicture.png)

### Features

- **Multi-language Support**: Compile code in multiple programming languages.
- **Monaco Editor**: Enjoy the same code editing experience as in VS Code, with features like indentation, syntax highlighting, and IntelliSense.
- **Real-time Collaboration**: Code together with others in real-time.
- **Integrated Chat**: Communicate seamlessly with your fellow collaborators.
- **Supported Language** : JavaScript, Python, C++


### Get Started

*Ensure NodeJS and MySQL is installed on your machine*


```sh
git clone <link of this repo>
cd CodeRoom
```

**To start React App**
```sh
npm install
npm run dev
```

**To start server**
```sh
cd server
npm install
npm start
```

**On you favourite browser**
```
http://localhost:5173/
```
>voilà! You are ready to swing.

### Under the hood
- **React**  In front end
- **Nodejs** and **Express** server on backend
- **MySQL** for Database Management
- **Tailwind** for Style
- Password Encryption using **bcrypt** hashing
- Authentication using **JWT**, with ft. like OTP using NodeMailer.
- **Monaco Editor** for code IntelliSense and edit
- Language specific compiler for code compilation using **docker**
- (Language - Compiler) = Javascript - **Nodejs(runtime)**, Python - **python3**, C++ - **gcc**
- Socket.io for **websocket** (Real time communication)
- Terniary Operator

### Before you Start

- **Server is running on port :``` 5001```**<br>

**Make sure your .env file inside server directory looks something like this:**
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

**How to Setup Docker** <br>
`sh
-Build an docker image, `docker build <path where dockerfile is present>`
-Copy the image tag of particular image
-Paste it in the .env file located inside server directory
`


### Developers

[Ostrich-egg](https://github.com/ostrich-egg)<br>
[Adarsha](https://github.com/Adarsha16)<br>
[Pranaya-sht](https://github.com/Pranaya-sht)<br>
[XGPher35](https://github.com/XGPher35)<br>
> This is Third semister project.<br>